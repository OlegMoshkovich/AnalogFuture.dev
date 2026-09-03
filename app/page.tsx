import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import SelectedWork from "./components/SelectedWork";
import HowWeWork from "./components/HowWeWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Manifesto />
      <SelectedWork />
      <HowWeWork />
      <Footer />
    </main>
  );
}
