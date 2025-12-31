import { motion } from "framer-motion";
import { Home, Zap, Sun, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import energyFlowVideo from "@/assets/energy-flow.mp4";
import dualCoreShield from "@/assets/dual-core-shield.png";

const features = [
  { icon: Sun, title: "Solar Generation", subtitle: "Harness the sun" },
  { icon: Zap, title: "Smart Storage", subtitle: "EP760 & EP2000" },
  { icon: Home, title: "Home Power", subtitle: "24/7 backup" },
  { icon: Car, title: "EV Ready", subtitle: "Charge overnight" },
  { icon: null, title: "Dual Core Safety Guard", subtitle: "Advanced protection", customIcon: true },
];

export const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0">
        <video
          src={energyFlowVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6"
          >
            <Sun className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Australia's Trusted Solar Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight max-w-md"
          >
            Power Your Home with
            <br />
            <span className="text-accent">Premium BLUETTI</span>
            <br />
            Energy Storage
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-foreground/90 mb-4 max-w-sm"
          >
            Professional installation by EasyLink Solar's certified network
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base text-foreground/70 mb-8 max-w-sm"
          >
            Watch how our EP760 and EP2000 systems capture solar energy during the day 
            and power your home through the night — all while keeping your EV charged.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
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
            className="flex items-center gap-6 text-sm text-foreground/80"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">11,000+</span>
              <span>quotes created</span>
            </div>
            <div className="w-px h-4 bg-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">500+</span>
              <span>certified installers</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-card/80 transition-colors backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shrink-0">
                {feature.customIcon ? (
                  <img src={dualCoreShield} alt="Shield" className="w-5 h-5 object-contain" />
                ) : (
                  feature.icon && <feature.icon className="w-5 h-5 text-accent-foreground" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                <p className="text-xs text-foreground/60">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
