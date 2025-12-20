import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Section imports (to be implemented)
import Hero from "@/components/sections/Hero";
import WhyResilience from "@/components/sections/WhyResilience";
import About from "@/components/sections/About";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import WhatLookingFor from "@/components/sections/WhatLookingFor";
import Challenges from "@/components/sections/Challenges";
import HowItWorks from "@/components/sections/HowItWorks";
import Timeline from "@/components/sections/Timeline";
import AfterHackathon from "@/components/sections/AfterHackathon";
import Solutions from "@/components/sections/Solutions";
import GetInvolved from "@/components/sections/GetInvolved";
import Partners from "@/components/sections/Partners";
import CodeOfConduct from "@/components/sections/CodeOfConduct";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <WhyResilience />
        <About />
        <WhoShouldJoin />
        <WhatLookingFor />
        <Challenges />
        <HowItWorks />
        <Timeline />
        <AfterHackathon />
        <GetInvolved />
        <Partners />
        <CodeOfConduct />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
