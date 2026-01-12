export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Meditation Practitioner",
      content:
        "Energia transformed my meditation practice. The frequency audio is incredibly soothing and helps me reach deeper states of calm.",
      rating: 5,
    },
    {
      name: "James Mitchell",
      role: "Corporate Professional",
      content:
        "I use Energia during work breaks to reset my focus. It's become an essential part of my daily routine for mental clarity.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Sleep Enthusiast",
      content:
        "The nighttime listening experience is phenomenal. I sleep better and wake more refreshed than ever before.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from people who found their calm with Energia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {testimonial.content}
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
