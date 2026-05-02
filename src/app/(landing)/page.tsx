import { Navbar, Footer } from "@/features/navigation";
import {
  Hero,
  Brands,
  About,
  Experience,
  Services,
  Contact,
} from "@/features/landing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}