import { motion } from "framer-motion";
import { Home, Zap, Sun, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnergyFlowAnimation } from "@/components/EnergyFlowAnimation";

const features = [
  { icon: Sun, title: "Solar Generation", subtitle: "Harness the sun" },
  { icon: Zap, title: "Smart Storage", subtitle: "EP760 & EP2000" },
  { icon: Home, title: "Home Power", subtitle: "24/7 backup" },
  { icon: Car, title: "EV Ready", subtitle: "Charge overnight" },
];

export const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sun className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Australia's Trusted Solar Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
            >
              Power Your Home with{" "}
              <span className="text-accent">Premium BLUETTI</span>{" "}
              Energy Storage
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-4"
            >
              Professional installation by EasyLink Solar's certified network
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Watch how our EP760 and EP2000 systems capture solar energy during the day 
              and power your home through the night — all while keeping your EV charged.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="glow" size="xl">
                Get a Free Quote
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Products
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">11,000+</span>
                <span>quotes created</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">500+</span>
                <span>certified installers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Energy Flow Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 p-4">
              <EnergyFlowAnimation />
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-card/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-accent-foreground" />
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
