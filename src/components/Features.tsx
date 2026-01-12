import { Music, Zap, Brain, Heart, Moon, Focus } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Music,
      title: "Relaxation & Deep Rest",
      description:
        "Immerse yourself in frequency audio designed for deep relaxation and peaceful rest",
    },
    {
      icon: Zap,
      title: "Energy Reset",
      description:
        "Recharge your mind and spirit with positive energy and mindset optimization",
    },
    {
      icon: Brain,
      title: "Focus & Productivity",
      description:
        "Enhance concentration and mental clarity with focus-enhancing frequency experiences",
    },
    {
      icon: Heart,
      title: "Stress Relief",
      description:
        "Release emotional tension and find calm through soothing scalar sound experiences",
    },
    {
      icon: Moon,
      title: "Sleep Preparation",
      description:
        "Prepare your body and mind for restful sleep with nighttime-optimized audio",
    },
    {
      icon: Focus,
      title: "Meditation & Mindfulness",
      description:
        "Deepen your practice with frequency-guided meditation and mindful awareness",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sound Experiences That Transform
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our rich library of frequency audio albums organized to
            match your intentions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
