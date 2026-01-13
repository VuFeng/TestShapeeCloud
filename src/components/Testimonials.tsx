import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Meditation Practitioner",
    content:
      "Energia transformed my meditation practice. The frequency audio is incredibly soothing and helps me reach deeper states of calm.",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "James Mitchell",
    role: "Corporate Professional",
    content:
      "I use Energia during work breaks to reset my focus. It's become an essential part of my daily routine for mental clarity.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Emma Williams",
    role: "Sleep Enthusiast",
    content:
      "The nighttime listening experience is phenomenal. I sleep better and wake more refreshed than ever before.",
    rating: 5,
    color: "from-orange-500 to-red-500",
  },
]

export const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500 ${hoveredIndex === index ? "opacity-20" : ""
                  }`}
              />

              <div
                className={`relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-500 ${hoveredIndex === index
                  ? "border-primary/30 bg-card/80 shadow-2xl shadow-primary/20 transform -translate-y-2"
                  : ""
                  }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        transitionDelay: `${i * 50}ms`,
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
