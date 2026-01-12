import { Button } from "./ui/Button";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-linear-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Find Your Calm?
            </h2>
            <p className="text-lg text-muted-foreground">
              Download Energia today and start your journey to inner peace and
              mental clarity
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Get it on Google Play
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Download on App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
