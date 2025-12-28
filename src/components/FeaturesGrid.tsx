import { motion } from "framer-motion";
import {
  Box,
  Layers,
  Link2,
  ShieldCheck,
  Award,
  Radio,
} from "lucide-react";

const features = [
  {
    icon: Box,
    title: "All-in-One System",
    description:
      "Comes with everything you need — hybrid inverter, modular battery, and backup gateway. No extra components required.",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description:
      "Pair one EP2000 with up to 7 × B700 battery modules to match your energy needs.",
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description:
      "Works with your solar/inverter setup via AC, DC, or hybrid coupling.",
  },
  {
    icon: ShieldCheck,
    title: "6-Layer Protection",
    description:
      "Six-layer system-level protection ensures end-to-end security — from battery cells to structure.",
  },
  {
    icon: Award,
    title: "VDE Certification",
    description:
      "Rigorously tested to meet the world's stringent German VDE2510-50 safety standard.",
  },
  {
    icon: Radio,
    title: "VPP Ready",
    description:
      "Compatible with select Australian VPP providers. Contact us to check if your provider is supported.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 group hover:glow-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
