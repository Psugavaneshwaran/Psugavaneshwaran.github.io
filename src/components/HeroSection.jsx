import { motion } from "framer-motion";
import { ChevronDown, Code2, Download, Rocket } from "lucide-react";

export const HeroSection = () => {
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

  const scrollVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-blue-900 backdrop-blur-md"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="space-y-6 sm:space-y-8 lg:space-y-10" variants={childVariants}>
          <motion.h1
            className="text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
            variants={childVariants}
          >
            <motion.span variants={childVariants}>Hi, I'm</motion.span>
            <motion.span
              className="text-cyan-400"
              variants={childVariants}
            >
              Sugavaneshwaran
            </motion.span>
            <motion.div
              className="flex gap-2 sm:gap-3"
              variants={childVariants}
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-sky-400" />
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              </motion.div>
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
            variants={childVariants}
          >
            Crafting intelligent solutions through full-stack development, machine
            learning, and modern frameworks. Driven by adaptability and a passion
            for creating impactful digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8 justify-center"
            variants={childVariants}
          >
            <motion.a
              href="#projects"
              className="relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
              <motion.span
                className="absolute inset-0 bg-cyan-400/30 opacity-0 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={scrollVariants}
        animate="animate"
      >
        <motion.span
          className="text-sm sm:text-base text-gray-300 mb-2"
          variants={childVariants}
        >
          Scroll
        </motion.span>
        <motion.div variants={iconVariants} whileHover="hover">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};