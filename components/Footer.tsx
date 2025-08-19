import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail, MapPin, MessageCircle, Network, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-sm opacity-60"></div>
                <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl">
                  <Network className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-white">Innoverse.You</h3>
                <p className="text-xs text-slate-400">Connect. Learn. Grow.</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Building the future through meaningful connections and shared growth.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/innoverse-you/", target: "_blank" },
                { icon: MessageCircle, href: "https://chat.whatsapp.com/DE0qy17AB6t1Qdalf1D2iL", target: "_blank" },
                { icon: Github, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", id: "hero" },
                { name: "Community", id: "community" },
                { name: "User Levels", id: "levels" },
                { name: "Contact", id: "contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <motion.div 
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4" />
                <span>info.innoversyou@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>+91 9227590139</span>
                  <span>+91 9909405694</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Ahmedabad, India</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-slate-400 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 Innoverse.YOU. Made with <Heart className="h-4 w-4 mx-1 text-red-400" />.
          </motion.p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 sm:mt-0">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}