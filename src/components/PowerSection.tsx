import { motion } from "framer-motion";
import { Zap, Battery, Home, Car, Refrigerator, Tv } from "lucide-react";

const powerStats = [
  { value: "20kW", label: "Single Unit Output" },
  { value: "60kW", label: "3 Units in Parallel" },
  { value: "51.61kWh", label: "Max Storage" },
];

const appliances = [
  { icon: Car, label: "Electric Vehicle" },
  { icon: Home, label: "HVAC System" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Tv, label: "Home Entertainment" },
];

export const PowerSection = () => {
  return (
    <section id="specs" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            One System,{" "}
            <span className="text-gradient">Total Home Backup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The EP2000 provides up to 20kW of power from a single unit, and with
            3 units in parallel, you can reach a powerful 60kW. Power everything
            from your electric vehicle and stove to all your household devices.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {powerStats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-strong rounded-2xl p-8 text-center hover:glow-primary transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Appliances Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-8">
            Power All Your Home Appliances
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appliances.map((appliance, index) => (
              <motion.div
                key={appliance.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <appliance.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {appliance.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-xs text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          * In off-grid mode without solar connection, EP2000 outputs 10.5kW
          (with 2 B700 batteries) or 15.5kW (with 3 B700 batteries). A full 20kW
          output requires 4 or more battery modules.
        </p>
      </div>
    </section>
  );
};
