import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";

const slides = [
  {
    title: "Deep Relaxation",
    image: image1,
    alt: "peaceful meditation app interface",
    description: "Frequency waves for inner calm",
  },
  {
    title: "Laser Focus",
    image: image2,
    alt: "productivity app interface",
    description: "Binaural beats for concentration",
  },
  {
    title: "Restful Sleep",
    image: image3,
    alt: "sleep tracking app interface",
    description: "Delta waves for deep rest",
  },
  {
    title: "Vital Energy",
    image: image4,
    alt: "wellness app interface",
    description: "Gamma waves for positivity",
  },
  {
    title: "Vital Energy",
    image: image5,
    alt: "wellness app interface",
    description: "Gamma waves for positivity",
  },
  {
    title: "Vital Energy",
    image: image6,
    alt: "wellness app interface",
    description: "Gamma waves for positivity",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 px-4">
      {/* Liquid Background */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[100px] animate-float-slow animation-delay-2000" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[80px] animate-pulse-soft" />
      </div>

      {/* Glass Overlay Texture */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl -z-10" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-medium text-sm animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Audio App for Wellness
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground/90">
            Frequency Audio for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
              CalmLiving
            </span>
          </h1>

          <p className="font-sans text-xl text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            CalmLiving combines ancient sound healing with modern neuroscience.
            Experience calm, focus, and energy through our liquid-smooth
            interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ x: mousePosition.x * 0.1, y: mousePosition.y * 0.1 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer bg-accent hover:bg-accent/90 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg shadow-accent/20 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer text-primary hover:bg-primary/5 rounded-xl px-8 py-6 text-lg font-medium border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                Listen to Demo
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground font-medium pt-4">
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="pl-2">Trusted by 50,000+ meditators</p>
          </div>
        </motion.div>

        {/* Morphing Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[500px] lg:max-w-full aspect-[4/5] lg:aspect-square flex items-center justify-center p-8"
        >
          {/* Decorative Liquid Blobs behind phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] blur-2xl animate-pulse-soft -z-10" />

          <div className="relative w-[300px] md:w-[350px] h-[600px] md:h-[700px] bg-white/20 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-2xl shadow-primary/20 overflow-hidden p-3 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">
            {/* Phone Bezel */}

            <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    className="w-full h-full object-contain"
                  />

                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-10 left-6 right-6 text-white text-center">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="font-heading text-3xl font-bold mb-2 text-white"
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/90 font-sans text-base font-light"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Glass Cards */}
          <motion.div
            className="absolute top-32 -left-4 md:-left-8 lg:left-0 p-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl flex items-center gap-3 animate-float shadow-xl z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl shadow-lg shadow-secondary/30">
              🎵
            </div>
            <div>
              <p className="text-xs text-foreground/70 font-bold uppercase tracking-wider">
                Now Playing
              </p>
              <p className="text-base font-bold text-foreground">
                Deep Theta Waves
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-40 -right-4 md:-right-8 lg:right-4 p-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl flex items-center gap-3 animate-float-slow shadow-xl z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl shadow-lg shadow-accent/30">
              ⚡
            </div>
            <div>
              <p className="text-xs text-foreground/70 font-bold uppercase tracking-wider">
                Energy
              </p>
              <p className="text-base font-bold text-foreground">+45% Boost</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
