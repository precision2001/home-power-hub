import { motion } from "framer-motion";
import { ClipboardList, Mail, Phone, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Lock in your deal and share your home details.",
  },
  {
    icon: Mail,
    step: "Step 2",
    title: "Receive your exclusive offer via email.",
  },
  {
    icon: Phone,
    step: "Step 3",
    title: "We'll reach out, or you can contact us to finalise your installation plan.",
  },
  {
    icon: Wrench,
    step: "Step 4",
    title: "Get installed and start saving this summer.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple 4-step process to energy independence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass rounded-2xl p-6 h-full hover:bg-card/80 transition-all duration-300 group-hover:glow-primary">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {item.step}
                </span>
                <p className="text-foreground font-medium mt-2">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
