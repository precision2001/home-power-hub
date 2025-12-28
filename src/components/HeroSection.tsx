import { motion } from "framer-motion";
import { Home, Zap, Sun, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const features = [
  { icon: Home, title: "All-In-One", subtitle: "Home Power" },
  { icon: Zap, title: "Whole-House Backup", subtitle: "from a Single System" },
  { icon: Sun, title: "Connects to", subtitle: "Your Solar" },
  { icon: Shield, title: "Dual-Core", subtitle: "Safety Guard" },
];

export const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern home with solar panels and battery storage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
          >
            Your Best Time to Save on a{" "}
            <span className="text-gradient">Home Battery Upgrade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-foreground/90 mb-8"
          >
            EP2000 ESS—30kWh for only{" "}
            <span className="font-bold text-primary">A$9,800</span> with Standard
            Installation Included!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="glow" size="xl">
              Lock In Your Deal
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-card/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
