import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Calculator, Users, Shield, Check, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Calculator, title: "AI-Powered Calculations", description: "Get accurate solar estimates based on your roof and usage" },
  { icon: Users, title: "Verified Installers", description: "Connect with certified professionals in your area" },
  { icon: Shield, title: "Transparent Pricing", description: "No hidden fees, clear and upfront quotes" },
  { icon: Sun, title: "Premium Equipment", description: "Access to BLUETTI's top-tier energy storage systems" },
];

const steps = [
  { number: "01", title: "Get Your Quote", description: "Enter your details and receive an instant personalized solar estimate" },
  { number: "02", title: "Compare Options", description: "Review system sizes, costs, and savings projections" },
  { number: "03", title: "Connect with Installers", description: "Get matched with verified installers in your area" },
  { number: "04", title: "Go Solar", description: "Complete your installation and start saving on energy" },
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  For Homeowners
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Start Your Solar Journey
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Get personalized solar quotes and connect with certified installers. Join thousands of Australians saving on energy costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glow" size="xl">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="heroOutline" size="xl">How It Works</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  <span className="font-semibold text-foreground">11,000+</span> quotes created • <span className="font-semibold text-foreground">500+</span> certified installers
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Choose EasyLink Solar?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We make going solar simple, transparent, and affordable
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:bg-card/80 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-primary/5">
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
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four simple steps to solar energy independence
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="text-6xl font-heading font-bold text-accent/20">{step.number}</span>
                  <h3 className="font-semibold text-foreground text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="glow" size="xl">
                Start Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customers;
