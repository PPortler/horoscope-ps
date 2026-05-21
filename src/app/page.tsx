import { Background } from "@/components/layout/Background";
import FormSection from "@/components/section/FormSection";
import HeroSection from "@/components/section/HeroSection";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10 h-screen flex flex-col justify-between gap-10 pt-10 lg:p-20 px-5">
        <HeroSection />
        <FormSection />
      </main>
    </>
  );
}
