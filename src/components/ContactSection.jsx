"use client";

import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_y5rvbl9";
const TEMPLATE_ID = "template_8xq2v6g";
const PUBLIC_KEY = "aIY1ZoH9PvcKGUrZu";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        e.target.reset();
      },
      (error) => {
        toast({
          title: "Error sending message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        console.error(error.text);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 30%),
          radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 30%),
          linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(49, 46, 129, 0.9) 100%)
        `,
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-400/20 shadow-xl hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-300 flex items-center">
              <span className="w-8 h-0.5 bg-cyan-400 mr-4"></span>
              Contact Info
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-blue-800/30 group-hover:bg-cyan-400/10 transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-200">Email</h4>
                  <a
                    href="mailto:sugavanesh08@gmail.com"
                    className="text-lg text-blue-100 hover:text-cyan-300 transition-colors duration-300"
                  >
                    sugavanesh08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-blue-800/30 group-hover:bg-cyan-400/10 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-200">Location</h4>
                  <p className="text-lg text-blue-100 hover:text-cyan-300 transition-colors duration-300">
                    Perundurai, Erode
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-400/10">
              <h4 className="text-sm font-medium text-blue-200 mb-6">Follow Me</h4>
              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sugavaneshwaranp18/",
                    color: "text-blue-400",
                  },
                  
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-blue-900/30 hover:bg-blue-800/50 ${social.color} hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-lg p-8 rounded-2xl border border-blue-400/20 shadow-xl hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-300 flex items-center">
              <span className="w-8 h-0.5 bg-cyan-400 mr-4"></span>
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-blue-200"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-400/20 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-blue-200"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-400/20 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-blue-200"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-400/20 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/30 transition-all duration-300"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium flex items-center justify-center gap-2",
                  "hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-blue-900/50",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};