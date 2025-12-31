import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, TrendingUp, Settings, Award, Check, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Users, title: "Quality Leads", description: "Receive pre-qualified leads from motivated customers" },
  { icon: TrendingUp, title: "Grow Your Business", description: "Expand your reach with our marketing support" },
  { icon: Settings, title: "Integrated CRM", description: "Manage leads and quotes in one platform" },
  { icon: Award, title: "Certification", description: "Training and certification programs available" },
];

const features = [
  "Pre-qualified leads in your area",
  "Integrated quote creation tool",
  "Customer relationship management",
  "Marketing and branding support",
  "Training and certification programs",
  "Competitive commission structure",
  "Dedicated partner support",
  "Access to premium BLUETTI products",
];

const Installers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  For Solar Professionals
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Grow Your Solar Business
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Join Australia's leading solar platform. Get access to quality leads, integrated tools, and premium BLUETTI products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glow" size="xl">
                    Join Our Network
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="heroOutline" size="xl">Learn More</Button>
                </div>
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
                Why Partner With Us?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to grow your solar installation business
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  What You Get
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with EasyLink Solar and get access to everything you need to succeed in the solar industry.
                </p>
                <ul className="grid gap-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our network of certified installers and start receiving quality leads today.
                </p>
                <Button variant="glow" size="xl" className="w-full">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Already a partner? <a href="#" className="text-accent hover:underline">Sign in</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Installers;
