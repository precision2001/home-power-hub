import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Home, Clock, TreePine } from "lucide-react";

const useCases = [
  {
    id: "solar",
    icon: Sun,
    title: "Maximise Solar",
    description:
      "Store excess solar power during the day, then use it at night or on cloudy days. Watch your electricity bills shrink as your home runs mostly on your own sunshine.",
  },
  {
    id: "backup",
    icon: Home,
    title: "Home Backup",
    description:
      "Keep the lights on during outages. The EP2000 automatically switches to backup mode in less than 20ms — so fast you won't even notice the grid went down.",
  },
  {
    id: "tou",
    icon: Clock,
    title: "TOU Savings",
    description:
      "Charge your battery when electricity is cheap (off-peak hours) and use stored energy when rates are high. Smart energy arbitrage that saves you money every day.",
  },
  {
    id: "offgrid",
    icon: TreePine,
    title: "Off-Grid Freedom",
    description:
      "Break free from the grid entirely. Perfect for remote properties, farms, or anyone seeking complete energy independence with reliable solar power.",
  },
];

export const UseCaseSection = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Let the Sun Slash Your Power Bills
          </h2>
          <p className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-3 sm:mb-4">
            Up to 90% Off
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Imagine powering your entire home with clean, free energy from the sun.
            The EP2000 ESS makes it real.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-4 sm:mb-6">
              Live Better with EP2000 ESS
            </h3>
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                className={`glass rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 flex items-center gap-3 sm:gap-4 ${
                  activeCase.id === useCase.id
                    ? "border-primary bg-white glow-primary"
                    : "hover:border-primary/30"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                  activeCase.id === useCase.id
                    ? "bg-gradient-to-r from-[#33d4e8] to-[#4a9fe8] shadow-lg"
                    : "bg-gradient-to-r from-[#00c8e0] to-[#1e88e5]"
                }`}>
                  <useCase.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    activeCase.id === useCase.id
                      ? "text-white drop-shadow-sm"
                      : "text-white/90"
                  }`} />
                </div>
                <span
                  className={`text-sm sm:text-base font-medium ${
                    activeCase.id === useCase.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {useCase.title}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-xl sm:rounded-2xl p-5 sm:p-8"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 sm:mb-6">
              <activeCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              {activeCase.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {activeCase.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
