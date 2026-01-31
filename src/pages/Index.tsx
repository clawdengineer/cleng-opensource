import BubbleBackground from "@/components/BubbleBackground";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BubbleBackground />
      
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
