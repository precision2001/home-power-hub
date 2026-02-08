import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Sun, Users, Heart, Zap, Shield, 
  TrendingUp, Handshake, Eye, Lightbulb, BadgeCheck,
  ArrowRight, CheckCircle2, Star, Play, ChevronRight,
  DollarSign, Award, Target, UserCheck, Sparkles, Mail
} from "lucide-react";
import { AboutTimeline } from "@/components/AboutTimeline";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import images
import solarHeroVideo from "@/assets/about/solar-hero-video.jpg";
import solarPanelsHero from "@/assets/about/solar-panels-hero.jpg";
import missionSolar from "@/assets/about/mission-solar.jpg";
import customerFocus from "@/assets/about/customer-focus.jpg";
import valuesBg from "@/assets/about/values-bg.jpg";
import portfolio1 from "@/assets/about/portfolio-1.jpg";
import portfolio2 from "@/assets/about/portfolio-2.jpg";
import portfolio3 from "@/assets/about/portfolio-3.jpg";
import portfolio4 from "@/assets/about/portfolio-4.jpg";
import portfolio5 from "@/assets/about/portfolio-5.jpg";
import portfolio6 from "@/assets/about/portfolio-6.jpg";
import portfolio7 from "@/assets/about/portfolio-7.jpg";

const values = [
  { icon: DollarSign, title: "Price Transparency" },
  { icon: Heart, title: "Customer-Centric" },
  { icon: Handshake, title: "Collaboration" },
  { icon: Eye, title: "Transparency" },
  { icon: Award, title: "Excellence" },
  { icon: Star, title: "Customer Satisfaction" },
  { icon: BadgeCheck, title: "Quality" },
  { icon: TrendingUp, title: "Value Creation" },
  { icon: Users, title: "Team Efficiency" },
  { icon: UserCheck, title: "Trusted Advisor" },
];

const portfolioImages = [
  { src: portfolio1, alt: "Solar installation on residential roof" },
  { src: portfolio2, alt: "Commercial solar project" },
  { src: portfolio3, alt: "Ground-mounted solar array" },
  { src: portfolio4, alt: "Rooftop solar panels" },
  { src: portfolio5, alt: "Solar farm aerial view" },
  { src: portfolio6, alt: "Residential solar installation" },
  { src: portfolio7, alt: "Solar battery system" },
];

const heroSlides = [
  { type: 'video', src: solarHeroVideo, label: '1 video' },
  { type: 'image', src: solarPanelsHero, label: '2 Image slides' },
];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Solar Panels */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background with slide transition */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent-foreground text-sm font-semibold mb-6">
                  <Sun className="w-4 h-4 text-accent" />
                  Powered by BLUETTI
                </span>
                
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
                  Solar Panels
                </h2>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Advanced Solar Panels for{" "}
                  <span className="text-accent">
                    Modern Homes
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Discover our range of high-performance solar panels designed to maximize efficiency and reliability for your solar energy system.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" variant="hero">
                    View Catalog
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                  <Button size="lg" variant="heroOutline">
                    Talk to Expert
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Media indicators */}
              <div className="hidden lg:flex flex-col items-end justify-center gap-4">
                {heroSlides.map((slide, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      currentSlide === index 
                        ? 'bg-card/80 backdrop-blur-md border border-border shadow-lg' 
                        : 'bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card/60'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {slide.type === 'video' ? (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <span className="text-foreground font-medium">{slide.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Timeline Section */}
        <AboutTimeline />

        {/* Mission Statement Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                  <Target className="w-4 h-4" />
                  Our Purpose
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Mission Statement
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Easylink Solar is the cornerstone of a dynamic solar energy ecosystem in Australia, fostering seamless collaboration among end customers, installers, and equipment vendors to deliver sustainable, high-quality energy solutions.
                </p>
                
                <div className="bg-card rounded-2xl p-6 border-2 border-[#00c8e0] shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    Our Purpose: Customer Focus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Easylink Solar solves the challenge of opaque pricing, unreliable providers, and complex decision-making for Australian end customers by providing AI-powered instant assessments, transparent personalized quotes incorporating 2025 incentives, and connections to a verified network of accredited installers, ensuring hassle-free access to high-ROI solar solutions without aggressive sales tactics.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                  <img 
                    src={missionSolar} 
                    alt="Solar panels and sustainable energy" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating stats card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">CEC Accredited</p>
                      <p className="text-sm text-muted-foreground">Verified Network</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Installer Ecosystem callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-secondary rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                    Solar Installers Ecosystem
                  </h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    It addresses inconsistent lead quality, administrative inefficiencies, and scaling limitations by delivering pre-qualified leads, integrated CRM and quoting tools, marketing support, competitive commissions, and training programs to streamline operations and boost business growth in a competitive market.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link to="/installers">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                      Join Our Network
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customer Focus Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={customerFocus} 
                    alt="Customer consultation" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-center text-white">
                    <Star className="w-8 h-8 mx-auto mb-1 fill-white" />
                    <p className="text-2xl font-bold">5★</p>
                    <p className="text-xs opacity-90">Rating</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00c8e0]/20 to-[#1e88e5]/20 border border-[#00c8e0]/30 text-foreground text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4 text-[#00c8e0]" />
                  Customer Focus
                </span>
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  We Begin By Actively Listening
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We begin by actively listening to our customers — understanding their expectations, needs, and pain points. This allows us to clearly define shared goals and collaboratively design a tailored solar solution, presenting realistic options that align with your budget and desired outcomes.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From the very first conversation, this transparent approach builds immediate trust and a strong sense of shared responsibility toward achieving the best possible results for you.
                </p>
                
                <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
                  <p className="text-foreground leading-relaxed">
                    <span className="font-semibold">Our nationwide network</span> of CEC-accredited member installers (Clean Energy Council accredited, the recognised standard for quality and competence in Australia's solar industry) fully shares our customer-first ethos and core values.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    The result? We consistently deliver high-performing, customer-satisfying solutions that maximise value, comfort, and long-term savings — often leading to enthusiastic referrals from happy customers to their family, friends, and networks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${valuesBg})` }}
          />
          <div className="absolute inset-0 bg-secondary/95" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-4">
                Our Core Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mb-4">
                Values
              </h2>
              <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
                These principles guide every decision we make and every relationship we build.
              </p>
            </motion.div>
            
            {/* Values Grid - 5x2 layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group bg-card/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-2xl p-5 hover:bg-card/20 transition-all duration-300 hover:scale-105 hover:border-[#00c8e0]/50 ${
                    index === 9 ? 'col-span-2 md:col-span-3 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-foreground">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Site Portfolio Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-4">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Site Portfolio
              </h2>
            </motion.div>
            
            {/* Portfolio Grid - Masonry style */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-3 border-transparent hover:border-[#00c8e0] ${
                    index === 0 || index === 3 ? 'row-span-2' : ''
                  } ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 || index === 3 ? 'h-full min-h-[300px]' : 'h-48 md:h-56'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-card text-sm font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00c8e0]/20 to-[#1e88e5]/20 border border-[#00c8e0]/30 text-foreground text-sm font-semibold mb-6">
                <Mail className="w-4 h-4 text-[#00c8e0]" />
                Stay Connected
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Stay up to date on the latest at
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-accent mb-6">
                Join our Mailing List
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Subscribe for updates on new features, insights, early access opportunities, and events.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl border-border bg-card"
                />
                <Button size="lg" variant="hero" className="rounded-xl">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to receive marketing communications from us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-secondary">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
                  Ready to Join the Solar Revolution?
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  Whether you're a homeowner looking to save on energy bills or an installer ready to grow your business, we're here to help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl">
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/installers">
                    <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
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
