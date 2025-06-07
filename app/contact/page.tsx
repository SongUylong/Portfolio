"use client"; // Mark as Client Component for useState and form handling

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react"; // Lucide React icons
import AppLayout from "@/components/layout/AppLayout";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // Handles changes in form input fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // In a real application, you would send this data to a backend API (e.g., using fetch or a serverless function).
    // For this demonstration, we'll simulate a network request.
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (formData.name && formData.email && formData.message) {
        setStatus("success");
        setMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      } else {
        setStatus("error");
        setMessage("Please fill in all fields.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again later.");
      console.error("Contact form submission error:", error);
    }
  };

  // Framer Motion variants for the contact card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <AppLayout>
      <section id="contact" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
          Get in Touch
        </h2>
        <motion.div
          className="max-w-xl mx-auto shadow-lg"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the card is in view
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
                {/* Display submission status messages */}
                {status === "success" && (
                  <p className="text-green-600 text-sm mt-2 text-center">
                    {message}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-destructive text-sm mt-2 text-center">
                    {message}
                  </p>
                )}
              </form>

              <div className="flex justify-center gap-6 mt-8">
                {/* Social media links */}
                <a
                  href="[https://www.linkedin.com/in/yourprofile](https://www.linkedin.com/in/yourprofile)" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a
                  href="[https://github.com/yourusername](https://github.com/yourusername)" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-7 w-7" />
                </a>
                <a
                  href="mailto:your.email@example.com" // Replace with your email
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="h-7 w-7" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </AppLayout>
  );
}
