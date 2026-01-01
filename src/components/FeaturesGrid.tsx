import { motion } from "framer-motion";
import { Sun, Battery, Home, Car } from "lucide-react";
import dualCoreShield from "@/assets/dual-core-shield.png";

const features = [
  {
    icon: Sun,
    title: "Solar Generation",
    description: "Harness the sun",
  },
  {
    icon: Battery,
    title: "Smart Storage",
    description: "EP760 & EP2000",
  },
  {
    icon: Home,
    title: "Home Power",
    description: "24/7 backup",
  },
  {
    icon: Car,
    title: "EV Ready",
    description: "Charge overnight",
  },
  {
    icon: null,
    title: "Dual Core Safety Guard",
    description: "Advanced protection",
    customIcon: true,
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <p className="text-sm sm:text-base text-primary font-semibold uppercase tracking-wider mb-2">
            Technology Pioneer in Clean Energy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose BLUETTI?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-card/80 transition-all duration-300 group hover:glow-primary"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-gradient-primary transition-all duration-300">
                {feature.customIcon ? (
                  <img src={dualCoreShield} alt="Shield" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain" />
                ) : (
                  feature.icon && <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                )}
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-heading font-semibold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
