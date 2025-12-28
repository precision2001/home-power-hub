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
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let the Sun Slash Your Power Bills
          </h2>
          <p className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-4">
            Up to 90% Off
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagine powering your entire home with clean, free energy from the sun.
            The EP2000 ESS makes it real.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
              Live Better with EP2000 ESS
            </h3>
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                className={`glass rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                  activeCase.id === useCase.id
                    ? "border-primary bg-primary/5 glow-primary"
                    : "hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    activeCase.id === useCase.id
                      ? "bg-gradient-primary"
                      : "bg-secondary"
                  }`}
                >
                  <useCase.icon
                    className={`w-5 h-5 ${
                      activeCase.id === useCase.id
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <span
                  className={`font-medium ${
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
            className="glass-strong rounded-2xl p-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
              <activeCase.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              {activeCase.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {activeCase.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
