import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Battery, Zap, Shield, Home, Check, Building2, Sun, Clock, Tent } from "lucide-react";
import batterySystem from "@/assets/battery-system.png";

const features = [
  { icon: Battery, title: "Three Phase Power", description: "Designed for larger homes and commercial applications" },
  { icon: Zap, title: "20kW Output", description: "Industrial-grade power output for demanding loads" },
  { icon: Shield, title: "Advanced BMS", description: "Intelligent battery management for optimal performance" },
  { icon: Building2, title: "Commercial Ready", description: "Perfect for businesses and large properties" },
];

const essFeatures = [
  { 
    icon: Sun, 
    title: "Maximise Solar", 
    description: "Capture every ray of sunshine. The EP2000 optimizes solar harvesting to maximize your energy independence and reduce reliance on the grid." 
  },
  { 
    icon: Home, 
    title: "Home Backup", 
    description: "Keep the lights on during outages. The EP2000 automatically switches to backup mode in less than 20ms — so fast you won't even notice the grid went down." 
  },
  { 
    icon: Clock, 
    title: "TOU Savings", 
    description: "Save money by using stored energy during peak rate hours and charging during off-peak times. Smart energy management for maximum savings." 
  },
  { 
    icon: Tent, 
    title: "Off-Grid Freedom", 
    description: "Go completely off-grid with confidence. The EP2000 provides reliable power for remote locations and complete energy independence." 
  },
];

const specs = [
  { label: "Phase Configuration", value: "Three Phase (3P/N/PE)" },
  { label: "Rated Power", value: "20,000W" },
  { label: "Battery Capacity", value: "Up to 100kWh" },
  { label: "Battery Type", value: "LiFePO4" },
  { label: "Efficiency", value: ">97%" },
  { label: "Warranty", value: "10 years" },
];

const EP2000 = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  Commercial Grade
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  BLUETTI EP2000
                </h1>
                <p className="text-xl text-foreground/80 mb-4">
                  Three Phase Home Energy Storage System
                </p>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  The EP2000 is designed for larger residential and commercial applications, delivering three-phase power with exceptional reliability and efficiency.
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
                    alt="BLUETTI EP2000" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Better with EP2000 ESS Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Live Better with EP2000 ESS
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how the EP2000 transforms your energy experience
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Feature List */}
              <div className="space-y-4">
                {essFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedFeature(index)}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedFeature === index
                        ? "bg-white border-[3px] border-[#00c8e0] shadow-lg"
                        : "bg-gray-100 border-[3px] border-transparent hover:bg-gray-200"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`font-semibold text-lg ${
                      selectedFeature === index ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {feature.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Feature Details */}
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mb-6">
                  {(() => {
                    const IconComponent = essFeatures[selectedFeature].icon;
                    return <IconComponent className="w-10 h-10 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {essFeatures[selectedFeature].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {essFeatures[selectedFeature].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Enterprise Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for commercial and high-demand residential applications
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-card/50">
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
                  Ideal For
                </h3>
                <ul className="space-y-4">
                  {[
                    "Large residential properties",
                    "Commercial buildings and offices",
                    "Agricultural and farming operations",
                    "Industrial facilities",
                    "Properties with high energy demands",
                    "Three-phase power requirements"
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

export default EP2000;
