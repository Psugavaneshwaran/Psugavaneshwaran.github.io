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

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          toast({ title: "Message sent successfully!" });
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          toast({ title: "Failed to send message", description: error.text });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900"
    >
      {/* Terminal header bar */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <div className="flex items-center bg-gray-900/80 rounded-t-xl px-6 py-3 border border-gray-700/40 shadow-lg">
          <span className="flex gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-red-300 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-200 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-green-500 border border-green-300 shadow-sm" />
          </span>
          <span className="text-xs sm:text-sm font-mono text-gray-400">
            Contact — sugavanesh@portfolio:~$
          </span>
        </div>
      </div>

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
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Information */}
            <div className="bg-gradient-to-br from-purple-900/60 via-pink-900/50 to-teal-900/60 backdrop-blur-xl p-8 rounded-2xl border border-purple-400/30 shadow-2xl hover:shadow-pink-400/20 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-8 text-teal-300 flex items-center">
                <span className="w-8 h-0.5 bg-pink-400 mr-4"></span>
                Contact Info
              </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-purple-800/30 group-hover:bg-pink-400/10 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-gray-300 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-200">Email</h4>
                  <a
                    href="mailto:sugavanesh08@gmail.com"
                    className="text-lg text-teal-100 hover:text-pink-300 transition-colors duration-300"
                  >
                    sugavanesh08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-purple-800/30 group-hover:bg-pink-400/10 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-gray-300 group-hover:text-teal-300 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-pink-200">Location</h4>
                  <p className="text-lg text-teal-100 hover:text-pink-300 transition-colors duration-300">
                    Perundurai, Erode
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-pink-400/10">
              <h4 className="text-sm font-medium text-purple-200 mb-6">
                Follow Me
              </h4>
              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sugavaneshwaranp18/",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/sugavaneshwaran_p/",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com/sugavanesh08",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-purple-900/30 hover:bg-pink-800/50 text-gray-300 hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
            <div className="bg-gradient-to-br from-teal-900/60 via-purple-900/50 to-pink-900/60 backdrop-blur-xl p-8 rounded-2xl border border-teal-400/30 shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-8 text-pink-300 flex items-center">
                <span className="w-8 h-0.5 bg-teal-400 mr-4"></span>
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
                    className="w-full px-4 py-3 rounded-lg bg-purple-900/30 border border-pink-400/20 text-teal-100 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-teal-400/30 transition-all duration-300 animate-input-blink"
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
                    className="w-full px-4 py-3 rounded-lg bg-purple-900/30 border border-teal-400/20 text-pink-100 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-pink-400/30 transition-all duration-300 animate-input-blink"
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
                    className="w-full px-4 py-3 rounded-lg bg-teal-900/30 border border-purple-400/20 text-pink-100 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-teal-400/30 transition-all duration-300 animate-input-blink"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-900 via-pink-900 to-teal-900 text-teal-300 font-mono flex items-center justify-center gap-2 border border-pink-400/30",
                    "hover:from-purple-800 hover:to-pink-800 hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-teal-900/50",
                    "disabled:opacity-70 disabled:cursor-not-allowed"
                  )}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-cyan-300"
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
                    $ Sending...
                  </>
                ) : (
                  <>
                    $ Send Message
                    <Send className="h-5 w-5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
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
            transform: translate(0px, 0px);
            opacity: 0.2;
          }
          50% {
            transform: translate(10px, -20px);
            opacity: 0.5;
          }
          100% {
            transform: translate(0px, 0px);
            opacity: 0.2;
          }
        }
        @keyframes input-blink {
          0%,
          100% {
            border-bottom-color: #00fff0;
          }
          50% {
            border-bottom-color: transparent;
          }
        }
        .animate-input-blink:focus {
          border-bottom-width: 2px !important;
          border-bottom-style: solid !important;
          animation: input-blink 1s steps(1) infinite;
        }
      `}</style>
    </section>
  );
};
