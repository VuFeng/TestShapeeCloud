import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Energia — <span className="text-primary">Frequency Audio</span>{" "}
              for Calm Living
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Energia brings together sound, frequency, and intention to help
              you relax, focus, and reconnect with your inner peace
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <a href="https://play.google.com/" target="_blank">
                Get it on Google Play
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary hover:bg-primary/10 bg-transparent hover:text-primary"
            >
              <a href="https://apps.apple.com/" target="_blank">
                Download on App Store
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <div className="relative max-w-2xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {/* Duplicate slides for infinite loop */}
                  {[...slides, ...slides].map((item, index) => (
                    <div key={index} className="min-w-full shrink-0">
                      <div className="bg-background rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/20">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-4 bg-background"
                        />
                        <p className="text-base md:text-lg font-semibold text-foreground text-center">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
