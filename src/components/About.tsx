export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
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
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Mental Balance</h3>
              <p className="text-sm text-muted-foreground">
                Frequency-based audio for emotional calm and inner peace
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">High Quality</h3>
              <p className="text-sm text-muted-foreground">
                Premium audio playback optimized for your well-being
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Mindful Design</h3>
              <p className="text-sm text-muted-foreground">
                Clean, distraction-free interface for seamless listening
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
