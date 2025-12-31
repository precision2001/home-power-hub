import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Battery, Zap, Shield, Sun, Home, Check } from "lucide-react";
import batterySystem from "@/assets/battery-system.png";

const features = [
  { icon: Battery, title: "9.2kWh Capacity", description: "Expandable up to 79.36kWh with additional B500 batteries" },
  { icon: Zap, title: "7,600W Output", description: "Power your entire home with continuous high output" },
  { icon: Shield, title: "LiFePO4 Battery", description: "10+ year lifespan with over 3,500 cycles" },
  { icon: Sun, title: "Solar Ready", description: "Seamlessly integrates with existing solar systems" },
];

const specs = [
  { label: "Capacity", value: "9,216Wh (expandable to 79,360Wh)" },
  { label: "AC Output", value: "7,600W (surge 12,000W)" },
  { label: "Solar Input", value: "9,000W max" },
  { label: "Battery Type", value: "LiFePO4" },
  { label: "Cycle Life", value: "3,500+ cycles to 80%" },
  { label: "Warranty", value: "10 years" },
];

const EP760 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  Flagship Home Battery
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  BLUETTI EP760
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Redefining Energy Storage Solutions
                </p>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  The EP760 is BLUETTI's flagship home energy storage system, designed to provide reliable backup power and help you achieve energy independence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="glow" size="xl">Get a Free Quote</Button>
                  <Button variant="heroOutline" size="xl">View Specifications</Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={batterySystem} 
                    alt="BLUETTI EP760" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced technology for reliable home energy storage
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:bg-card/80 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Why Choose EP760?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Whole-home backup power during outages",
                    "Maximize solar self-consumption",
                    "Time-of-use optimization to reduce bills",
                    "Seamless grid integration",
                    "Smart app monitoring and control",
                    "Professional installation available"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="glow" size="lg" className="mt-6">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EP760;
