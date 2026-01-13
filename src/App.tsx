import { Toaster } from "react-hot-toast";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CTA } from "./components/CTA";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          },
          success: {
            iconTheme: {
              primary: "var(--primary)",
              secondary: "var(--primary-foreground)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--destructive)",
              secondary: "var(--destructive-foreground)",
            },
          },
        }}
      />
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
