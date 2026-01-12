import { About } from "./components/About";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
