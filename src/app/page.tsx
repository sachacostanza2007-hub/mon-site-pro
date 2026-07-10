import { Hero } from "@/components/home/hero";
import { WhyUs } from "@/components/home/why-us";
import { Advantages } from "@/components/home/advantages";
import { Services } from "@/components/home/services";
import { Method } from "@/components/home/method";
import { Technologies } from "@/components/home/technologies";
import { Portfolio } from "@/components/home/portfolio";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { BlogPreview } from "@/components/home/blog-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Advantages />
      <Services />
      <Method />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Faq />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
