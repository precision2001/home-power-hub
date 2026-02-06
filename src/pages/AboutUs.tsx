import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Sun, Users, Award, Target, Heart, Leaf, Zap, Shield, 
  TrendingUp, Handshake, Eye, Lightbulb, BadgeCheck, Clock,
  ArrowRight, CheckCircle2, Star
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutCustomer from "@/assets/about-customer.jpg";
import aboutInstaller from "@/assets/about-installer.jpg";
import heroFamilySolar from "@/assets/hero-family-solar.jpg";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2016", title: "Founded in Sydney", description: "Established as a solar energy solutions provider, connecting customers with quality installers." },
  { year: "2020", title: "AI Platform Launch", description: "Rolled out advanced AI-driven quoting system with 95% accurate roof analysis." },
  { year: "2024", title: "100+ Quotes Milestone", description: "Surpassed 100 personalized solar quotes, empowering customers nationwide." },
  { year: "2025", title: "VPP Connect Launch", description: "Introducing Virtual Power Plant Connect Service for enhanced energy optimization." },
];

const values = [
  { icon: Eye, title: "Price Transparency", description: "Clear, upfront pricing with no hidden costs or surprises." },
  { icon: Heart, title: "Customer Excellence", description: "5-star service with a no-pressure, customer-first approach." },
  { icon: Handshake, title: "Collaboration", description: "Building strong partnerships between customers, installers, and vendors." },
  { icon: Lightbulb, title: "Innovation", description: "AI-powered solutions driving the future of solar energy." },
  { icon: BadgeCheck, title: "Quality Assurance", description: "CEC-accredited installers and premium equipment only." },
  { icon: TrendingUp, title: "Value Creation", description: "Maximizing ROI and long-term savings for every customer." },
];

const stats = [
  { value: "100+", label: "Quotes Created", icon: Zap },
  { value: "500+", label: "Certified Installers", icon: Users },
  { value: "95%", label: "Roof Analysis Accuracy", icon: Target },
  { value: "5★", label: "Customer Rating", icon: Star },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Full-Width Background */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  <Sun className="w-4 h-4" />
                  About EasyLink Solar
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Powering Australia's
                  <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Solar Revolution
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Since 2016, we've been transforming how Australians access solar energy through AI-powered technology, transparent pricing, and a network of certified installers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-accent-foreground hover:opacity-90">
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Meet Our Team
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 justify-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.value}</span>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
                The Cornerstone of Australia's Solar Energy Ecosystem
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Easylink Solar fosters seamless collaboration among end customers, installers, and equipment vendors to deliver sustainable, high-quality energy solutions. We're not just selling solar — we're building a community dedicated to a cleaner, greener Australia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Customer Focus Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Customer Focus
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Solving Real Problems for Real Australians
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We understand the challenges you face: opaque pricing, unreliable providers, and complex decision-making. That's why we built a platform that puts you first.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "AI-powered instant roof assessments",
                    "Transparent quotes with 2025 incentives included",
                    "Verified network of CEC-accredited installers",
                    "No aggressive sales tactics — ever"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-accent to-primary text-accent-foreground">
                    Talk to an Expert
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <img 
                    src={aboutCustomer} 
                    alt="Happy customers with solar installation" 
                    className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">5-Star Reviews</p>
                        <p className="text-sm text-muted-foreground">Consistent excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Installer Ecosystem Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src={aboutInstaller} 
                    alt="Solar installer at work" 
                    className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 shadow-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Grow Your Business</p>
                        <p className="text-sm text-muted-foreground">Pre-qualified leads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Installer Ecosystem
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Empowering Solar Professionals
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We address the challenges installers face: inconsistent lead quality, administrative inefficiencies, and scaling limitations. Our platform helps you grow.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Pre-qualified leads delivered to you",
                    "Integrated CRM and quoting tools",
                    "Marketing support and training programs",
                    "Competitive commissions structure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/installers">
                  <Button variant="outline">
                    Join Our Network
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2f4a] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What We Stand For
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                These core principles guide every decision we make and every relationship we build.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Milestones That Matter
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small Sydney startup to Australia's leading AI-powered solar platform.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/50" />
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year bubble */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold shadow-lg z-10">
                      {milestone.year}
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroFamilySolar})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Ready to Join the Solar Revolution?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a homeowner looking to save on energy bills or an installer ready to grow your business, we're here to help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-accent-foreground hover:opacity-90">
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/installers">
                    <Button size="lg" variant="outline">
                      Become an Installer
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
