import { motion } from "framer-motion";
import { Box, Layers, Link, ShieldCheck, Award, Zap } from "lucide-react";

const whyChooseFeatures = [
  {
    icon: Box,
    title: "All-in-One System",
    description: "Comes with everything you need — hybrid inverter, modular battery, and backup gateway. No extra components required."
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Pair one EP2000 with up to 7 x B700 battery modules to match your energy needs."
  },
  {
    icon: Link,
    title: "Seamless Integration",
    description: "Works with your solar/inverter setup via AC, DC, or hybrid coupling."
  },
  {
    icon: ShieldCheck,
    title: "6-Layer Protection",
    description: "Six-layer system-level protection ensures end-to-end security — from battery cells to structure."
  },
  {
    icon: Award,
    title: "VDE Certification",
    description: "Rigorously tested to meet the world's stringent German VDE2510-50 safety standard."
  },
  {
    icon: Zap,
    title: "VPP Ready",
    description: "Compatible with select Australian VPP providers. Contact us to check if your provider is supported."
  }
];

export const EP2000WhyChoose = () => {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Why choose BLUETTI?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f2847] rounded-2xl p-6 border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
