import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Users, Award, Target, Heart, Leaf } from "lucide-react";

const stats = [
  { value: "11,000+", label: "Quotes Created" },
  { value: "500+", label: "Certified Installers" },
  { value: "50,000+", label: "Happy Customers" },
  { value: "100%", label: "Australian Owned" },
];

const values = [
  { icon: Heart, title: "Customer First", description: "We prioritize our customers' needs and satisfaction in everything we do." },
  { icon: Leaf, title: "Sustainability", description: "We're committed to creating a cleaner, greener future for Australia." },
  { icon: Target, title: "Excellence", description: "We strive for excellence in service, products, and partnerships." },
  { icon: Users, title: "Community", description: "We believe in building strong relationships within our community." },
];

const team = [
  { name: "Sarah Chen", role: "Chief Executive Officer", description: "20+ years in renewable energy" },
  { name: "Michael Brooks", role: "Head of Operations", description: "Former solar installer with 15 years experience" },
  { name: "Emma Wilson", role: "Customer Success Lead", description: "Passionate about customer experience" },
  { name: "David Park", role: "Technical Director", description: "Expert in energy storage systems" },
];

const AboutUs = () => {
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
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Powering Australia's Solar Future
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  EasyLink Solar connects homeowners with certified installers, making the switch to solar simple, transparent, and affordable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-4xl md:text-5xl font-heading font-bold text-accent">{stat.value}</span>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  EasyLink Solar was founded with a simple mission: to make solar energy accessible to every Australian household. We saw the complexity and confusion in the solar industry and knew there had to be a better way.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, we're Australia's leading solar platform, connecting thousands of homeowners with certified installers across the country. Our AI-powered tools and transparent pricing have revolutionized how Australians go solar.
                </p>
                <p className="text-muted-foreground">
                  As an exclusive partner of BLUETTI in Australia, we bring world-class energy storage solutions to homes and businesses, ensuring reliable, clean energy for generations to come.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="glass rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the people driving Australia's solar revolution
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:bg-card/80 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
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

export default AboutUs;
