import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/1.webp";
import image2 from "../assets/images/2.webp";
import image3 from "../assets/images/3.webp";
import image4 from "../assets/images/4.webp";

const slides = [
  {
    title: "Relaxation",
    image: image1,
    alt: "peaceful meditation app interface with frequency waves and calm colors",
  },
  {
    title: "Focus",
    image: image2,
    alt: "productivity app interface with focus timer and concentration features",
  },
  {
    title: "Sleep",
    image: image3,
    alt: "sleep tracking app interface with moon and night mode design",
  },
  {
    title: "Energy",
    image: image4,
    alt: "wellness app interface with energy boost and positive vibes theme",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    appear: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10 -z-10" />

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-balance leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Energia —{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                Frequency Audio
              </span>{" "}
              for Calm Living
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Energia brings together sound, frequency, and intention to help
              you relax, focus, and reconnect with your inner peace
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25 transition-all duration-300"
              >
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Get it on Google Play
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full hover:text-black border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 bg-transparent px-8 py-6 text-lg transition-all duration-300"
              >
                <a href="https://apps.apple.com/" target="_blank">
                  Download on App Store
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-visible rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="appear"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <motion.div
                        className="absolute w-[80%] h-full bg-linear-to-tr from-primary/40 to-secondary/40 rounded-full blur-[60px] -z-10"
                        animate={{
                          scale: [0.9, 1.1, 0.9],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 bg-black/5 backdrop-blur-sm"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-transparent pointer-events-none z-10 opacity-50" />

                        <img
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].alt}
                          className="w-auto h-full max-h-[600px] md:max-h-[750px] lg:max-h-[900px] object-contain"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-8 left-0 right-0 text-center z-20"
                      >
                        <span className="inline-block px-6 py-2 rounded-full bg-background/60 backdrop-blur-xl border border-white/20 text-sm font-semibold tracking-wide shadow-lg backdrop-brightness-150">
                          {slides[currentSlide].title}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      currentSlide === index
                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                        : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
