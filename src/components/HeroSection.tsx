import { motion, AnimatePresence } from "framer-motion";
import { Home, Zap, Sun, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import energyFlowVideo from "@/assets/energy-flow.mp4";
import heroInstallation from "@/assets/hero-installation.jpg";
import heroFamilySolar from "@/assets/hero-family-solar.jpg";
import dualCoreShield from "@/assets/dual-core-shield.png";

const features = [
  { icon: Sun, title: "Solar Generation", subtitle: "Harness the sun" },
  { icon: Zap, title: "Smart Storage", subtitle: "EP760 & EP2000" },
  { icon: Home, title: "Home Power", subtitle: "24/7 backup" },
  { icon: Car, title: "EV Ready", subtitle: "Charge overnight" },
  { icon: null, title: "Dual Core Safety Guard", subtitle: "Advanced protection", customIcon: true },
];

const slides = [
  {
    type: "video",
    src: energyFlowVideo,
    objectPosition: "object-center",
    badge: "Australia's Trusted Solar Partner",
    headline: "Power Your Home with",
    highlight: "Premium BLUETTI",
    subline: "Energy Storage",
    description: "Professional installation by EasyLink Solar's certified network",
  },
  {
    type: "image",
    src: heroInstallation,
    objectPosition: "object-[70%_center] sm:object-center",
    badge: "Professional Installation",
    headline: "Expert Solar",
    highlight: "Installation",
    subline: "Services",
    description: "Certified installers delivering quality workmanship across Australia",
  },
  {
    type: "image",
    src: heroFamilySolar,
    objectPosition: "object-[center_30%] sm:object-center",
    badge: "Limited Time Offer",
    headline: "Unbeatable",
    highlight: "Best Deals",
    subline: "on Solar",
    description: "Save thousands with our exclusive summer promotions and rebates",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const duration = currentSlide === 0 ? 10000 : 8000;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section id="overview" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 sm:pt-0">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
        {slide.type === "video" ? (
            <video 
              src={slide.src} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className={`w-full h-full object-cover ${slide.objectPosition}`} 
            />
          ) : (
            <img 
              src={slide.src} 
              alt="" 
              className={`w-full h-full object-cover ${slide.objectPosition}`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 sm:from-background/70 via-background/50 sm:via-background/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full glass hover:bg-card/80 transition-colors">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full glass hover:bg-card/80 transition-colors">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${i === currentSlide ? "bg-accent" : "bg-foreground/30"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm mb-4 sm:mb-6 ${
              currentSlide === 0 
                ? 'bg-blue-500/20 border border-blue-400/40 animate-fire-glow-blue' 
                : currentSlide === 1 
                  ? 'bg-white/20 border border-white/40 animate-fire-glow-white'
                  : 'bg-accent/25 border border-accent/40 shadow-[0_0_20px_rgba(245,177,0,0.3),0_0_40px_rgba(245,177,0,0.15),inset_0_0_12px_rgba(245,177,0,0.1)]'
            }`}>
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">{slide.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight max-w-md">
              <span className="whitespace-nowrap">{slide.headline}</span><br />
              {currentSlide === 0 ? (
                <><span className="text-accent">Premium </span><span className="text-gradient">BLUETTI</span></>
              ) : (
                <span className="text-accent">{slide.highlight}</span>
              )}<br />
              {slide.subline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-6 sm:mb-8 max-w-sm">{slide.description}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button variant="glow" size="lg" className="sm:size-xl">Get a Free Quote</Button>
              <Button variant="heroOutline" size="lg" className="sm:size-xl">Explore Products</Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-foreground/80">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-foreground">11,000+</span>
                <span>quotes created</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-foreground/30" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-foreground">500+</span>
                <span>certified installers</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              className={`glass rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:bg-card/80 transition-colors backdrop-blur-md ${
                index === features.length - 1 && features.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shrink-0">
                {feature.customIcon ? (
                  <img src={dualCoreShield} alt="Shield" className="w-4 h-4 sm:w-5 sm:h-5 object-contain mix-blend-screen" />
                ) : (
                  feature.icon && <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{feature.title}</p>
                <p className="text-[10px] sm:text-xs text-foreground/60 truncate">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
