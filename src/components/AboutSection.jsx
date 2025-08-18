import { motion } from "framer-motion";
import { Download, Globe, Palette, Sparkles } from "lucide-react";

export const AboutSection = () => {
  // Animation variants for section elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.9], // Spring-like easing
      },
    },
  };

  const cardVariants = {
    rest: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.03,
      rotateX: 5,
      rotateY: 3,
      boxShadow: "0 15px 30px rgba(34, 211, 238, 0.3)",
      transition: {
        duration: 0.3,
        ease: [0.175, 0.885, 0.32, 1.275], // Springy transition
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 0 0 rgba(34, 211, 238, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 16px rgba(34, 211, 238, 0.4)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    tap: { scale: 0.98 },
  };

  const iconVariants = {
    rest: { rotate: 0, scale: 1 },
    hover: {
      rotate: 15,
      scale: 1.15,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-blue-900"
    >
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-white"
          variants={childVariants}
        >
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">
            Me
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center"
          variants={childVariants}
        >
          <motion.div className="space-y-4 sm:space-y-6" variants={childVariants}>
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 text-center md:text-left"
              variants={childVariants}
            >
              What I Build & How I Deliver
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base text-gray-300 text-center md:text-left"
              variants={childVariants}
            >
              With expertise in Java, Spring Boot, and React, I craft scalable,
              secure, and user-focused web applications. My advanced Figma skills
              enable me to design intuitive UI/UX prototypes, while Photoshop
              supports asset creation. Using Spline, I integrate stunning 3D
              interactive elements for a modern touch.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-gray-300 text-center md:text-left"
              variants={childVariants}
            >
              From banking systems to e-commerce platforms and ML-powered tools, I
              prioritize performance, usability, and aesthetics. I deliver
              end-to-end solutions—robust backends, sleek interfaces, and 3D
              designs—that create impactful experiences for users and businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
              variants={childVariants}
            >
              <motion.a
                href="#contact"
                className="relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get In Touch
                <motion.span
                  className="absolute inset-0 bg-cyan-400/30 opacity-0 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
              
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-6"
            variants={childVariants}
          >
            {[
              {
                icon: Palette,
                title: "Designing the Future",
                description:
                  "Using Figma and Photoshop, I create visually stunning UI/UX designs and assets that ensure intuitive and engaging user experiences.",
              },
              {
                icon: Globe,
                title: "Building the Web",
                description:
                  "With Java, Spring Boot, and React, I develop scalable, secure web applications that deliver seamless performance across devices.",
              },
              {
                icon: Sparkles,
                title: "Innovating with 3D",
                description:
                  "Leveraging Spline, I integrate captivating 3D interactive elements, elevating projects with modern, dynamic visuals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative p-4 sm:p-6 rounded-lg bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-md border border-cyan-400/20"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="flex items-start gap-3 sm:gap-4"
                  variants={childVariants}
                >
                  <motion.div
                    className="p-2 sm:p-3 rounded-full bg-cyan-400/10"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                  </motion.div>
                  <div className="text-left">
                    <motion.h4
                      className="font-semibold text-base sm:text-lg text-cyan-400"
                      variants={childVariants}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      className="text-xs sm:text-sm text-gray-300"
                      variants={childVariants}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};