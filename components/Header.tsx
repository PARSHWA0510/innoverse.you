import { motion } from "framer-motion";
import { Menu, Network } from "lucide-react";
import { Button } from "./ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-sm opacity-60"></div>
            <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl">
              <Network className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">Innoverse.YOU</h1>
            <p className="text-xs text-muted-foreground">Connect. Learn. Grow.</p>
          </div>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <motion.button 
            onClick={() => scrollToSection('hero')}
            className="text-sm hover:text-primary transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('community')}
            className="text-sm hover:text-primary transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Community
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('conclave')}
            className="text-sm hover:text-primary transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Conclave
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('levels')}
            className="text-sm hover:text-primary transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            User Levels
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="text-sm hover:text-primary transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </motion.header>
  );
}