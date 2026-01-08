import { motion } from "framer-motion";
import { Box, Layers, Link, ShieldCheck, Award, Zap } from "lucide-react";
import batterySystem from "@/assets/battery-system.png";
import heroHome from "@/assets/hero-home.jpg";
import heroFamilySolar from "@/assets/hero-family-solar.jpg";
import dualCoreShield from "@/assets/dual-core-shield.png";

const whyChooseFeatures = [
  {
    icon: Box,
    title: "All-in-One System",
    description: "Comes with everything you need — hybrid inverter, modular battery, and backup gateway.",
    image: batterySystem
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Pair one EP2000 with up to 7 x B700 battery modules to match your energy needs.",
    image: batterySystem
  },
  {
    icon: Link,
    title: "Seamless Integration",
    description: "Works with your solar/inverter setup via AC, DC, or hybrid coupling.",
    image: heroHome
  },
  {
    icon: ShieldCheck,
    title: "6-Layer Protection",
    description: "Six-layer system-level protection ensures end-to-end security.",
    image: dualCoreShield
  },
  {
    icon: Award,
    title: "VDE Certification",
    description: "Rigorously tested to meet the world's stringent German VDE2510-50 safety standard.",
    image: null // Gradient placeholder
  },
  {
    icon: Zap,
    title: "VPP Ready",
    description: "Compatible with select Australian VPP providers.",
    image: heroFamilySolar
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
              className="bg-[#0f2847] rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 group"
            >
              {/* Image Area */}
              <div className="relative h-40 overflow-hidden">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#00c8e0]/30 to-[#1e88e5]/30" />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2847] via-transparent to-transparent" />
                {/* Icon positioned in corner */}
                <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-5">
                <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
