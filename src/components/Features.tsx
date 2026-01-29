import { Music, Zap, Brain, Heart, Moon, Focus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Music,
    title: "Relaxation & Deep Rest",
    description:
      "Immerse yourself in frequency audio designed for deep relaxation and peaceful rest",
    color: "from-blue-500 to-cyan-500",
    accent: "text-white",
  },
  {
    icon: Zap,
    title: "Energy Reset",
    description:
      "Recharge your mind and spirit with positive energy and mindset optimization",
    color: "from-yellow-500 to-orange-500",
    accent: "text-white",
  },
  {
    icon: Brain,
    title: "Focus & Productivity",
    description:
      "Enhance concentration and mental clarity with focus-enhancing frequency experiences",
    color: "from-purple-500 to-pink-500",
    accent: "text-white",
  },
  {
    icon: Heart,
    title: "Stress Relief",
    description:
      "Release emotional tension and find calm through soothing scalar sound experiences",
    color: "from-red-500 to-pink-500",
    accent: "text-white",
  },
  {
    icon: Moon,
    title: "Sleep Preparation",
    description:
      "Prepare your body and mind for restful sleep with nighttime-optimized audio",
    color: "from-indigo-500 to-blue-500",
    accent: "text-white",
  },
  {
    icon: Focus,
    title: "Meditation & Mindfulness",
    description:
      "Deepen your practice with frequency-guided meditation and mindful awareness",
    color: "from-green-500 to-teal-500",
    accent: "text-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            Sound Experiences That Transform
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore our rich library of frequency audio albums organized to
            match your intentions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${
                    feature.color
                  } rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-40" : ""
                  }`}
                />

                <div className="relative p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 transition-all duration-500 h-full flex flex-col items-start gap-4 shadow-lg hover:shadow-xl">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 shadow-inner`}
                  >
                    <Icon className={`w-8 h-8 ${feature.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
