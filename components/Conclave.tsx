import { motion } from "framer-motion";
import {
  ArrowUpDown,
  Briefcase,
  Building,
  ChevronRight,
  DollarSign,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  Rocket,
  TrendingUp,
  Users
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const roleInfo = {
  "Student": { 
    icon: GraduationCap, 
    color: "from-blue-500 to-cyan-500", 
    shortName: "Student",
    fullName: "Student" 
  },
  "Early Professional": { 
    icon: Briefcase, 
    color: "from-emerald-500 to-teal-500", 
    shortName: "Early Professional (1-3 yrs)",
    fullName: "Early Professional (1-3 yrs)" 
  },
  "Experienced Professional": { 
    icon: Building, 
    color: "from-orange-500 to-red-500", 
    shortName: "Experienced Professional (7-9 yrs)",
    fullName: "Experienced Professional (7-9 yrs)" 
  },
  "Startup Aspirant": { 
    icon: Rocket, 
    color: "from-orange-500 to-red-500", 
    shortName: "Startup Aspirant",
    fullName: "Startup Aspirant" 
  },
  "Startup Founder": { 
    icon: Rocket, 
    color: "from-violet-500 to-purple-500", 
    shortName: "Startup Founder",
    fullName: "Startup Founder" 
  },
  "Industry Expert": { 
    icon: TrendingUp, 
    color: "from-rose-500 to-pink-500", 
    shortName: "Industry Expert",
    fullName: "Industry Expert" 
  },
  "Investor": { 
    icon: DollarSign, 
    color: "from-green-500 to-emerald-500", 
    shortName: "Investor",
    fullName: "Investor" 
  }
};

const conclaveData = {
  hour1: {
    title: "Seeking Guidance",
    description: "Each member seeks mentorship from the next level",
    sessions: [
      { 
        seeker: "Student", 
        provider: "Early Professional", 
        topic: "Career Transition & Job Search",
        example: "How to prepare for tech interviews? What things should I look for in a company?"
      },
      { 
        seeker: "Early Professional", 
        provider: "Experienced Professional", 
        topic: "Career Growth & Skill Development",
        example: "How do I build leadership skills while still being hands-on? What makes a great team lead vs. a great individual contributor?"
      },
      { 
        seeker: "Startup Aspirant", 
        provider: "Startup Founder", 
        topic: "Entrepreneurship & Innovation",
        example: "How do I know if I'm ready to start my own company? What should I consider before taking the leap?"
      },
      { 
        seeker: "Startup Founder", 
        provider: "Industry Expert", 
        topic: "Scaling & Market Expansion",
        example: "How do I scale my team from 5 to 50 people? What are the key metrics I should track?"
      },
      { 
        seeker: "Industry Expert", 
        provider: "Investor", 
        topic: "Investment & Wealth Strategy",
        example: "How do I structure my pitch deck for investors? What key metrics and storytelling elements do investors look for?"
      }
    ]
  },
  hour2: {
    title: " Giving guidance", 
    description: "Same members now give guidance to someone at a junior level",
    sessions: [
      { 
        provider: "Final Year Student", 
        seeker: "2nd Year Student", 
        topic: "Academic Success & Preparation",
        example: "Which courses should I focus on? How do I build a strong resume for internships?"
      },
      { 
        provider: "Early Professional", 
        seeker: "Final Year Student", 
        topic: "Industry Insights & Skills",
        example: "What's it really like working in tech? Here are the soft skills that matter most..."
      },
      { 
        provider: "Experienced Professional", 
        seeker: "Early Professional", 
        topic: "Career Advancement & Leadership",
        example: "Here's how to build your personal brand and position yourself for promotions"
      },
      { 
        provider: "Startup Founder", 
        seeker: "Experienced Professional", 
        topic: "Innovation & Opportunities",
        example: "Here's how to spot market gaps and think like an entrepreneur in your current role"
      },
      { 
        provider: "Industry Expert", 
        seeker: "Startup Founder", 
        topic: "Strategic Planning & Growth",
        example: "These are the frameworks I use for strategic decisions and team management"
      }
    ]
  }
};

function EnhancedSessionCard({ session, isHour2 = false, index }: { session: any; isHour2?: boolean; index: number }) {
  const seeker = isHour2 ? session.seeker : session.seeker;
  const provider = isHour2 ? session.provider : session.provider;
  const seekerData = roleInfo[seeker as keyof typeof roleInfo];
  const providerData = roleInfo[provider as keyof typeof roleInfo];

  if (!seekerData || !providerData) return null;

  const SeekerIcon = seekerData.icon;
  const ProviderIcon = providerData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="relative bg-gradient-to-br from-background to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg h-full">
        <CardContent className="p-5 h-full flex flex-col">
          {/* Session Number Badge */}
          {/* <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs px-2 py-1">
              Session {index + 1}
            </Badge>
          </div> */}

          {/* Participants Section */}
          <div className="space-y-4 flex-grow">
            {/* Seeker */}
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className={`bg-gradient-to-r ${seekerData.color} p-3 rounded-xl shadow-sm flex-shrink-0`}>
                <SeekerIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold text-sm text-gray-800">{seekerData.shortName}</h5>
                <p className="text-xs px-2 py-1 rounded-full bg-blue-200 text-blue-800 inline-block mt-1">
                  Seeks Guidance
                </p>
              </div>
            </div>

            {/* Topic/Direction */}
            <div className="text-center py-2">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-px bg-primary/30"></div>
                <ChevronRight className="h-4 w-4 text-primary" />
                <div className="w-8 h-px bg-primary/30"></div>
              </div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 mx-2">
                <p className="text-xs font-medium text-primary text-center">{session.topic}</p>
              </div>
            </div>

            {/* Provider */}
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className={`bg-gradient-to-r ${providerData.color} p-3 rounded-xl shadow-sm flex-shrink-0`}>
                <ProviderIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold text-sm text-gray-800">{providerData.shortName}</h5>
                <p className="text-xs px-2 py-1 rounded-full bg-green-200 text-green-800 inline-block mt-1">
                  Gives Guidance
                </p>
              </div>
            </div>
          </div>

          {/* Example Section */}
          <div className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
            <div className="flex items-start space-x-2">
              <MessageCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-indigo-700 leading-relaxed">
                  <span className="font-medium">Example: </span>
                  "{session.example}"
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Conclave() {
  const [,setActiveHour] = useState(1);

  return (
    <section id="conclave" className="py-24 bg-gradient-to-br from-accent/20 to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text">
              The Conclave Experience
            </h2>
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A structured format where each member both gives and receives guidance through focused 1:1 conversations.
          </motion.p>
        </motion.div>

        {/* Concept Overview */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl text-white">1</span>
                  </div>
                  <h4 className="font-semibold mb-1">Seek guidance from experience</h4>
                </div>
                
                <ArrowUpDown className="h-8 w-8 text-primary" />
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl text-white">2</span>
                  </div>
                  <h4 className="font-semibold mb-1">Give guidance to junior</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

                  {/* Hour Selector */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={() => setActiveHour(1)}
              className="px-6 py-3 rounded-xl transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-4 w-4" />
                <span>Seeking & Giving Guidance</span>
              </div>
            </motion.button>
          </div>

        {/* Sessions Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-background to-accent/30 border-0 shadow-2xl">
            
            <CardContent className="px-6 pb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
                {conclaveData.hour1.sessions.map((session, index) => (
                  <EnhancedSessionCard 
                    key={index}
                    session={session} 
                    isHour2={false} 
                    index={index}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Benefits - More Compact */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dual Perspective",
                description: "Experience both sides of mentorship",
                icon: ArrowUpDown,
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Immediate Application", 
                description: "Apply what you learn right away",
                icon: MessageCircle,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Equal Exchange",
                description: "Everyone contributes and receives",
                icon: Users,
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-to-br from-background to-accent/20 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className={`bg-gradient-to-r ${benefit.color} p-2 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}