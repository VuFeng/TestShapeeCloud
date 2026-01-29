import type React from "react";

import { Button } from "./ui/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const GOOGLE_SHEETS_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleInputMouseMove = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleInputMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (name.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name.trim())) {
      return "Name must only contain letters and spaces";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Email is invalid";
    }
    if (email.length > 100) {
      return "Email must be less than 100 characters";
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let fieldError: string | undefined;

    switch (name) {
      case "name":
        fieldError = validateName(value);
        break;
      case "email":
        fieldError = validateEmail(value);
        break;
      case "message":
        fieldError = validateMessage(value);
        break;
    }

    if (fieldError) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      toast.error("Please check the fields you have entered.");
      return;
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      console.log("Form submitted:", formData);
      toast.success(
        "Message sent successfully! We'll get back to you soon. 🎉"
      );
      setErrors({});
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
      {/* Decorative Envelope Icon */}
      <motion.div
        className="absolute top-20 right-20 text-6xl opacity-5"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✉️
      </motion.div>

      {/* Decorative Mail Icons */}
      {["📧", "✉️", "📮"].map((icon, i) => (
        <motion.div
          key={`mail-${i}`}
          className="absolute text-3xl opacity-10"
          style={{
            left: `${10 + i * 30}%`,
            top: `${15 + (i % 2) * 70}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Decorative Dots Pattern */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`contact-dot-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${5 + (i % 5) * 20}%`,
            top: `${10 + Math.floor(i / 5) * 20}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative Lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-primary/10 to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-secondary/10 to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-linear-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient-x bg-size-[200%_auto]">
              Get in Touch
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message
              anytime.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Full Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setFocusedField("name")}
                onMouseMove={handleInputMouseMove}
                onMouseLeave={handleInputMouseLeave}
                required
                whileFocus={{ scale: 1.01 }}
                style={{
                  transform: focusedField === "name"
                    ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                    : undefined,
                }}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 magnetic ${
                  errors.name
                    ? "border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-destructive"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setFocusedField("email")}
                onMouseMove={handleInputMouseMove}
                onMouseLeave={handleInputMouseLeave}
                required
                whileFocus={{ scale: 1.01 }}
                style={{
                  transform: focusedField === "email"
                    ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                    : undefined,
                }}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 magnetic ${
                  errors.email
                    ? "border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-destructive"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setFocusedField("message")}
                onMouseMove={handleInputMouseMove}
                onMouseLeave={handleInputMouseLeave}
                required
                rows={5}
                whileFocus={{ scale: 1.01 }}
                style={{
                  transform: focusedField === "message"
                    ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                    : undefined,
                }}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 magnetic ${
                  errors.message
                    ? "border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary"
                }`}
                placeholder="Tell us what's on your mind..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-destructive"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer animate-shimmer relative overflow-hidden transition-all duration-300"
                >
                  <motion.span
                    animate={loading ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{
                      duration: 1,
                      repeat: loading ? Infinity : 0,
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
