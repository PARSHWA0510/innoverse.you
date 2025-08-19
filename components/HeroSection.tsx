import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const scrollToCommunity = () => {
  const element = document.getElementById('community');
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden hero-gradient">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="mr-2 h-4 w-4 text-white" />
            <span className="text-sm text-white">Building the Future Together</span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Where{" "}
            <span className="inline-block">Growth</span>{" "}
            Meets{" "}
            <span className="inline-block">Guidance</span>
          </motion.h1>
          
          <motion.p 
            className="mb-12 text-lg text-white/90 sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Building bridges between education, industry, and entrepreneurship through meaningful connections.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-white text-indigo-600 hover:bg-white/90 shadow-xl"
                onClick={scrollToCommunity}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}