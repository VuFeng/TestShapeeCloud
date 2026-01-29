import { useState } from "react";
import { Brain, Sparkles, Music } from "lucide-react";

export const About = () => {
  const stats = [
    {
      label: "Mental Balance",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "High Quality",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
    },
    {
      label: "Mindful Design",
      icon: Music,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft animation-delay-2000" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            A Peaceful Space for Modern Life
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Energia is designed for those seeking a stress-free listening
            environment. With a minimalist, distraction-free interface and
            high-quality audio, Energia provides a calm digital space where you
            can unwind, find clarity, and cultivate positive energy in your
            daily life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div
                    className={`relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-500 ${
                      hoveredStat === index
                        ? "border-primary/50 bg-card/80 shadow-2xl shadow-primary/20 transform -translate-y-1"
                        : "hover:border-primary/30"
                    }`}
                  >
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-10 text-white shadow-lg`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {stat.label === "Mental Balance"
                        ? "Frequency-based audio for emotional calm and inner peace"
                        : stat.label === "High Quality"
                        ? "Premium audio playback optimized for your well-being"
                        : "Clean, distraction-free interface for seamless listening"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
