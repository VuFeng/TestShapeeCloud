import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-30 animate-pulse-soft" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8 bg-card/40 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-1">
              Ready to Find Your Calm?
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Download Energia today and start your journey to inner peace and
              mental clarity
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 relative z-10 feature-buttons">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="w-full sm:w-auto relative px-8 py-4 rounded-full font-bold text-lg text-primary-foreground overflow-hidden group shadow-lg shadow-primary/25">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  className="relative flex items-center justify-center gap-2"
                >
                  Get it on Google Play
                </a>
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="w-full sm:w-auto relative px-8 py-4 rounded-full font-bold text-lg text-primary border-2 border-primary bg-background/50 backdrop-blur-md overflow-hidden group shadow-lg shadow-primary/10">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  className="relative flex items-center justify-center gap-2"
                >
                  Download on App Store
                </a>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
