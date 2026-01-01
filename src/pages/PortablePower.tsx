import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Battery, Zap, Tent, Car, Sun, Plug } from "lucide-react";

const products = [
  {
    name: "BLUETTI AC200P",
    capacity: "2,000Wh",
    output: "2,000W",
    description: "Perfect for camping, RV trips, and emergency backup",
    features: ["17 output ports", "Solar charging", "Portable design"],
  },
  {
    name: "BLUETTI AC300",
    capacity: "3,072Wh",
    output: "3,000W",
    description: "High-capacity power for off-grid adventures",
    features: ["Modular batteries", "Fast charging", "App control"],
  },
  {
    name: "BLUETTI EB70S",
    capacity: "716Wh",
    output: "800W",
    description: "Compact and lightweight for outdoor activities",
    features: ["Compact size", "Multiple outputs", "LED flashlight"],
  },
  {
    name: "BLUETTI AC500",
    capacity: "5,120Wh",
    output: "5,000W",
    description: "Industrial-grade portable power station",
    features: ["Expandable", "Heavy duty", "Professional use"],
  },
];

const useCases = [
  { icon: Tent, title: "Camping", description: "Power your outdoor adventures" },
  { icon: Car, title: "RV Living", description: "All the comforts of home on the road" },
  { icon: Sun, title: "Off-Grid", description: "Solar-powered independence" },
  { icon: Plug, title: "Emergency", description: "Reliable backup during outages" },
];

const PortablePower = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Portable Power Stations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Power Anywhere,<br />Anytime
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From camping trips to emergency backup, BLUETTI portable power stations keep you powered wherever life takes you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="xl">Shop All Products</Button>
                <Button variant="heroOutline" size="xl">Compare Models</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Popular Models
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect portable power station for your needs
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-card/80 transition-colors group"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                    <Battery className="w-16 h-16 text-accent opacity-50" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex gap-4 text-sm mb-3">
                    <span className="text-accent">{product.capacity}</span>
                    <span className="text-muted-foreground">{product.output}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-xs text-foreground/60 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortablePower;
