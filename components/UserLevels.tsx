import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building,
  GraduationCap,
  Handshake,
  Network,
  Rocket,
  Star,
  Target,
  TrendingUp
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const userLevels = [
  {
    level: "Level 1",
    title: "Students",
    subtitle: "Learning, Career Growth & Industry Exposure",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    benefits: {
      receive: [
        "Industry mentorship and career guidance from experienced professionals",
        "Mock interviews, skill development, and job referrals",
        "Professional network building and trend insights"
      ],
      give: [
        "Fresh perspectives and innovative thinking to projects",
        "Peer collaboration and future mentorship to newcomers"
      ]
    }
  },
  {
    level: "Level 2", 
    title: "Early Professionals",
    subtitle: "Career Acceleration & Visibility",
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    benefits: {
      receive: [
        "Career advancement mentorship from senior professionals",
        "Leadership opportunities and expanded professional networks",
        "Direct job referrals and industry credibility building"
      ],
      give: [
        "Recent graduate insights and guidance to current students",
        "Bridge connection between students and senior professionals"
      ]
    }
  },
  {
    level: "Level 3",
    title: "Early-Stage Startup Founders", 
    subtitle: "Building & Scaling",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    benefits: {
      receive: [
        "Strategic business advice from experienced entrepreneurs",
        "Direct investor exposure and funding opportunities",
        "Access to talent pool and potential business collaborators"
      ],
      give: [
        "Innovation mindset and entrepreneurial opportunities for others",
        "Real-world startup experience and case studies"
      ]
    }
  },
  {
    level: "Level 4",
    title: "Business Professionals",
    subtitle: "Growth, Impact & Network Expansion", 
    icon: Building,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    benefits: {
      receive: [
        "Access to skilled talent and innovative startup partnerships",
        "Business expansion through community referrals",
        "Personal fulfillment through impactful mentorship"
      ],
      give: [
        "Industry expertise and strategic business guidance",
        "Job opportunities and market insights for community members"
      ]
    }
  },
  {
    level: "Level 5",
    title: "Investors",
    subtitle: "Finding the Next Big Opportunity",
    icon: TrendingUp,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    benefits: {
      receive: [
        "Curated access to high-potential startups and deal flow",
        "Market insights and collaborative investment opportunities",
        "Network expansion with other investors and entrepreneurs"
      ],
      give: [
        "Funding opportunities and strategic business mentorship",
        "Success stories and inspiration to the entire community"
      ]
    }
  }
];

export function UserLevels() {
  return (
    <section id="levels" className="py-24 bg-gradient-to-br from-muted/30 to-accent/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Community Levels
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how each member contributes to and benefits from our thriving ecosystem
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {userLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                  <CardHeader className={`bg-gradient-to-r ${level.bgGradient} relative overflow-hidden`}>
                    {/* Subtle decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="flex items-center space-x-6 relative z-10">
                      <motion.div 
                        className={`bg-gradient-to-r ${level.gradient} p-4 rounded-2xl shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-white/80 text-foreground">
                            {level.level}
                          </Badge>
                          <CardTitle className="text-2xl">{level.title}</CardTitle>
                        </div>
                        <CardDescription className="text-lg text-muted-foreground">
                          {level.subtitle}
                        </CardDescription>
                      </div>
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-8 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* What They Receive */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl">What They Receive</h4>
                        </div>
                        <div className="space-y-3">
                          {level.benefits.receive.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-100"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <ArrowRight className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* What They Give */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                            <Handshake className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl">What They Give</h4>
                        </div>
                        <div className="space-y-3">
                          {level.benefits.give.map((contribution, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{contribution}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Call to Action - Fixed rotating icon issue */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1 max-w-3xl mx-auto">
            <div className="relative bg-background rounded-3xl p-12">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"
              />
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Network className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-3xl mb-4 text-white">Ready to Join?</h3>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Be among the first to join our community. Help us build something amazing together 
                  as we create the future of mentorship and professional growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    className="group relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span>Join Community</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.button>
                  {/* <motion.button 
                    className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
                    </div>
                  </motion.button> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}