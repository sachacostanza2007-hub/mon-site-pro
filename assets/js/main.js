(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Navbar: scroll shadow + mobile menu toggle
     --------------------------------------------------------- */
  var navbar = document.querySelector(".navbar");
  var navToggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");

  function onScroll() {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = ICON_MENU;
      });
    });
  }

  var ICON_MENU =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';
  var ICON_CLOSE =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';

  /* ---------------------------------------------------------
     Scroll reveal (fade/translate, image wipe, pulse divider)
     --------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    "[data-reveal], [data-reveal-group], [data-reveal-image], .pulse-divider"
  );

  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------------------------------------------------------
     Animated counters
     --------------------------------------------------------- */
  var counters = document.querySelectorAll("[data-counter]");

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    if (reducedMotion) {
      el.textContent = target;
      return;
    }
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(p * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      cio.observe(el);
    });
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------------------------------------------------------
     Project cards: 3D tilt + cursor-following halo
     --------------------------------------------------------- */
  var projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(function (card) {
    var halo = card.querySelector(".project-card-halo");
    var raf = null;

    card.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch" || reducedMotion) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var rotateY = (px - 0.5) * 8;
        var rotateX = (0.5 - py) * 8;
        card.style.transform =
          "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        if (halo) {
          halo.style.setProperty("--hx", px * 100 + "%");
          halo.style.setProperty("--hy", py * 100 + "%");
        }
      });
    });

    card.addEventListener("pointerleave", function () {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });
  });

  /* ---------------------------------------------------------
     Magnetic buttons
     --------------------------------------------------------- */
  var magnets = document.querySelectorAll(".magnetic");

  magnets.forEach(function (wrap) {
    var target = wrap.querySelector(".btn");
    if (!target) return;
    var radius = 60;

    wrap.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch" || reducedMotion) return;
      var rect = wrap.getBoundingClientRect();
      var relX = e.clientX - (rect.left + rect.width / 2);
      var relY = e.clientY - (rect.top + rect.height / 2);
      var distance = Math.hypot(relX, relY);
      if (distance > radius * 2) return;
      target.style.transform = "translate(" + relX * 0.35 + "px, " + relY * 0.35 + "px)";
    });

    wrap.addEventListener("pointerleave", function () {
      target.style.transform = "translate(0, 0)";
    });
  });

  /* ---------------------------------------------------------
     Blog search / category filter
     --------------------------------------------------------- */
  var blogGrid = document.querySelector("[data-blog-grid]");
  if (blogGrid) {
    var searchInput = document.querySelector("[data-blog-search]");
    var filterButtons = document.querySelectorAll("[data-blog-filter]");
    var cards = Array.prototype.slice.call(blogGrid.querySelectorAll("[data-blog-card]"));
    var noResults = document.querySelector("[data-blog-empty]");
    var activeCategory = "Tous";

    function applyFilter() {
      var query = (searchInput ? searchInput.value : "").trim().toLowerCase();
      var visibleCount = 0;
      cards.forEach(function (card) {
        var category = card.getAttribute("data-category");
        var haystack = card.getAttribute("data-search") || "";
        var matchesCategory = activeCategory === "Tous" || category === activeCategory;
        var matchesQuery = query === "" || haystack.toLowerCase().indexOf(query) !== -1;
        var visible = matchesCategory && matchesQuery;
        card.classList.toggle("hidden", !visible);
        if (visible) visibleCount++;
      });
      if (noResults) noResults.classList.toggle("hidden", visibleCount > 0);
    }

    if (searchInput) {
      searchInput.addEventListener("input", applyFilter);
    }
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeCategory = btn.getAttribute("data-blog-filter");
        filterButtons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        applyFilter();
      });
    });
  }

  /* ---------------------------------------------------------
     Contact form
     --------------------------------------------------------- */
  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    var submitBtn = contactForm.querySelector("button[type=submit]");
    var errorBanner = contactForm.querySelector("[data-form-error]");
    var successPanel = document.querySelector("[data-form-success]");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = contactForm.name.value.trim();
      var email = contactForm.email.value.trim();
      var subject = contactForm.subject.value;
      var message = contactForm.message.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (errorBanner) errorBanner.classList.add("hidden");

      if (!name || !email || !subject || !message) {
        showError("Merci de remplir tous les champs obligatoires.");
        return;
      }
      if (!emailPattern.test(email)) {
        showError("Adresse email invalide.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi en cours…";
      }

      // No server-side backend on a static export: open a pre-filled email
      // to contact@bycosta.eu. Swap this for a form service (Formspree,
      // Netlify Forms...) if you deploy behind one.
      var body =
        "Nom : " +
        name +
        "\nEmail : " +
        email +
        "\nTéléphone : " +
        (contactForm.phone.value.trim() || "—") +
        "\nProjet : " +
        subject +
        "\n\n" +
        message;

      var mailto =
        "mailto:contact@bycosta.eu?subject=" +
        encodeURIComponent("Nouvelle demande — " + subject) +
        "&body=" +
        encodeURIComponent(body);

      window.setTimeout(function () {
        window.location.href = mailto;
        contactForm.classList.add("hidden");
        if (successPanel) successPanel.classList.remove("hidden");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Envoyer ma demande";
        }
      }, 500);
    });

    function showError(msg) {
      if (!errorBanner) return;
      errorBanner.querySelector("span").textContent = msg;
      errorBanner.classList.remove("hidden");
    }
  }

  /* ---------------------------------------------------------
     Method timeline scrub (vanilla scroll listener, GSAP-free
     fallback so the page has zero hard dependency on the CDN)
     --------------------------------------------------------- */
  var timeline = document.querySelector("[data-timeline]");
  if (timeline) {
    var progress = timeline.querySelector(".timeline-progress");
    var badges = timeline.querySelectorAll(".timeline-badge");
    var ticking = false;

    function updateTimeline() {
      ticking = false;
      var rect = timeline.getBoundingClientRect();
      var vh = window.innerHeight;
      var start = vh * 0.75;
      var end = -rect.height + vh * 0.45;
      var raw = (start - rect.top) / (start - end);
      var p = Math.max(0, Math.min(1, raw));

      if (progress) progress.style.height = p * 100 + "%";
      var activeIndex = Math.round(p * (badges.length - 1));
      badges.forEach(function (badge, i) {
        badge.classList.toggle("is-active", i <= activeIndex);
      });
    }

    function onTimelineScroll() {
      if (!ticking) {
        requestAnimationFrame(updateTimeline);
        ticking = true;
      }
    }

    if (reducedMotion) {
      if (progress) progress.style.height = "100%";
      badges.forEach(function (badge) {
        badge.classList.add("is-active");
      });
    } else {
      updateTimeline();
      window.addEventListener("scroll", onTimelineScroll, { passive: true });
      window.addEventListener("resize", onTimelineScroll);
    }
  }
})();
