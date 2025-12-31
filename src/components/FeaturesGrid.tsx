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
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Technology Pioneer in Clean Energy
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose BLUETTI?
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 w-48 text-center hover:bg-card/80 transition-all duration-300 group hover:glow-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 mx-auto group-hover:bg-gradient-primary transition-all duration-300">
                {feature.customIcon ? (
                  <img src={dualCoreShield} alt="Shield" className="w-8 h-8 object-contain" />
                ) : (
                  feature.icon && <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                )}
              </div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
