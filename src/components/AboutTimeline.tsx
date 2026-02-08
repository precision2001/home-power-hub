import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Rocket, Building2, Brain, Star, Play, Pause, BarChart3, Network, 
  Check, ArrowRight, Sparkles
} from "lucide-react";
import portfolio1 from "@/assets/about/portfolio-1.jpg";
import portfolio2 from "@/assets/about/portfolio-2.jpg";
import portfolio3 from "@/assets/about/portfolio-3.jpg";
import portfolio4 from "@/assets/about/portfolio-4.jpg";
import portfolio5 from "@/assets/about/portfolio-5.jpg";
import solarHero from "@/assets/about/solar-panels-hero.jpg";
import energyFlowVideo from "@/assets/energy-flow.mp4";
import { Button } from "@/components/ui/button";

const timelineData = [
  {
    year: "2016",
    title: "Founding",
    subtitle: "The Beginning",
    description: "Established as a solar energy solutions provider in Sydney, Australia, focusing on connecting customers, installers, and vendors.",
    icon: Rocket,
    image: portfolio1,
    highlights: [
      "Founded in Sydney, Australia as a solar solutions provider",
      "Vision to make solar accessible for every Australian household",
      "Connecting customers, installers, and vendors seamlessly"
    ],
    stats: [
      { label: "Location", value: "Sydney" },
      { label: "Mission", value: "Connect & Serve" }
    ],
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.3)"
  },
  {
    year: "2025",
    title: "Platform Launch & AI Integration",
    subtitle: "Active as of 2025",
    description: "Rolled out an advanced AI-driven quoting system using satellite imagery and machine learning for 95% accurate roof analysis.",
    icon: Brain,
    image: portfolio2,
    hasVideo: true,
    highlights: [
      "AI-driven quoting system using satellite imagery",
      "95% accurate roof analysis with machine learning",
      "Full 2025 incentive integration for transparent quotes"
    ],
    stats: [
      { label: "Accuracy", value: "95%" },
      { label: "Integration", value: "2025" }
    ],
    color: "from-[#00c8e0] to-[#1e88e5]",
    glowColor: "rgba(0, 200, 224, 0.3)"
  },
  {
    year: "Oct 2025",
    title: "User Growth & Quote Generation",
    subtitle: "Major Milestone",
    description: "Surpassed 1000 personalized solar quotes created nationwide, empowering customers with high-ROI options.",
    icon: BarChart3,
    image: portfolio3,
    highlights: [
      "Surpassed 1,000+ personalized solar quotes nationwide",
      "High-ROI options for every customer segment",
      "Pre-qualified leads for certified installers"
    ],
    stats: [
      { label: "Quotes", value: "1,000+" },
      { label: "Coverage", value: "Nationwide" }
    ],
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.3)"
  },
  {
    year: "Ongoing",
    title: "Customer Excellence",
    subtitle: "Our Commitment",
    description: "Achieved consistent 5-star reviews, underscoring commitment to transparent, no-pressure service.",
    icon: Star,
    image: portfolio4,
    highlights: [
      "Consistent 5-star customer reviews and satisfaction",
      "Transparent, no-pressure service approach",
      "Premium Clean Energy Council-approved equipment"
    ],
    stats: [
      { label: "Rating", value: "5★" },
      { label: "Equipment", value: "CEC Approved" }
    ],
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(251, 113, 133, 0.3)"
  },
  {
    year: "2025+",
    title: "Ecosystem Expansion",
    subtitle: "VPP Forthcoming",
    description: "Built a verified network of certified installers with integrated CRM tools and upcoming VPP Connect Service.",
    icon: Network,
    image: portfolio5,
    hasVideo: true,
    highlights: [
      "Verified network of certified solar installers",
      "Integrated CRM tools and marketing support",
      "Virtual Power Plant (VPP) Connect Service coming soon"
    ],
    stats: [
      { label: "Network", value: "Certified" },
      { label: "Coming", value: "VPP" }
    ],
    color: "from-violet-400 to-purple-500",
    glowColor: "rgba(167, 139, 250, 0.3)"
  }
];

// Glassmorphic Card Component
const GlassCard = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`
      relative rounded-3xl overflow-hidden
      bg-gradient-to-br from-[#E4F294] via-[#E8E85F] to-[#E8EB1E]
      backdrop-blur-xl
      border border-[#E8EB1E]/30
      shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export const AboutTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Hero Section with Full Background */}
      <div className="relative min-h-screen flex items-center justify-center py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={solarHero} 
            alt="Solar panels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary" />
        </div>

        {/* Decorative Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Easylink Solar
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8">
              About Us
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Easylink Solar, founded in Sydney in 2016, has evolved into Australia's leading 
              AI-powered solar platform, marked by notable achievements in technology adoption 
              and market impact.
            </p>

            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base rounded-2xl"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Glass Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission Card */}
            <GlassCard delay={0.3}>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
                  Our Mission
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      Making solar energy accessible and transparent for every Australian household through AI-powered solutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      Connecting customers with certified installers and premium equipment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      Delivering instant, accurate quotes with 95% roof analysis precision.
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Why Choose Us Card */}
            <GlassCard delay={0.4}>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
                  Why Choose Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      AI-driven platform with satellite imagery and machine learning technology.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      Consistent 5-star reviews and CEC-approved equipment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-secondary/80 text-sm leading-relaxed">
                      Transparent, no-pressure service with verified installer network.
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>

          {/* More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-end mt-8 max-w-4xl mx-auto"
          >
            <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
              <span className="text-sm font-medium">More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-24">
        {/* White Background */}
        <div className="absolute inset-0 bg-[#FFFFFF]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c8e0]/10 border border-[#00c8e0]/20 text-[#00c8e0] text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
              The EasyLink Story
            </h2>
          </motion.div>

          {/* Horizontal Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-16 max-w-4xl mx-auto"
          >
            <div className="relative flex items-center justify-between">
              {/* Track Line */}
              <div className="absolute left-0 right-0 h-0.5 bg-white/10 top-1/2 -translate-y-1/2" />
              <motion.div 
                className="absolute left-0 h-0.5 bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] top-1/2 -translate-y-1/2"
                style={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;
                const isPast = index <= activeIndex;
                
                return (
                  <motion.button
                    key={item.year}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 group flex flex-col items-center"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        boxShadow: isActive 
                          ? `0 0 30px ${item.glowColor}`
                          : 'none'
                      }}
                      className={`
                        relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center
                        transition-all duration-300 cursor-pointer backdrop-blur-xl
                        ${isActive 
                          ? `bg-gradient-to-br ${item.color} border border-white/30` 
                          : isPast 
                            ? 'bg-white/15 border border-white/20' 
                            : 'bg-white/5 border border-white/10'
                        }
                      `}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : isPast ? 'text-[#00c8e0]' : 'text-white/40'}`} />
                    </motion.div>
                    
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0.5 }}
                      className={`
                        mt-3 text-xs md:text-sm font-semibold whitespace-nowrap
                        ${isActive ? 'text-[#00c8e0]' : 'text-white/50'}
                      `}
                    >
                      {item.year}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Content - Glassmorphic Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10">
              <div className="grid lg:grid-cols-2">
                {/* Media Side */}
                <div className="relative h-[350px] lg:h-[450px]">
                  {timelineData[activeIndex].hasVideo ? (
                    <div className="relative h-full">
                      <video
                        ref={videoRef}
                        src={energyFlowVideo}
                        poster={timelineData[activeIndex].image}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                      />
                      <button
                        onClick={handlePlayVideo}
                        className={`absolute inset-0 flex items-center justify-center bg-secondary/40 backdrop-blur-sm transition-opacity ${
                          isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center"
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-1" />
                          )}
                        </motion.div>
                      </button>
                    </div>
                  ) : (
                    <div className="relative h-full group">
                      <img
                        src={timelineData[activeIndex].image}
                        alt={timelineData[activeIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/20 to-transparent" />
                    </div>
                  )}
                  
                  {/* Year Badge */}
                  <div className="absolute top-6 left-6">
                    <div 
                      className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${timelineData[activeIndex].color} border border-white/20`}
                      style={{ boxShadow: `0 10px 30px ${timelineData[activeIndex].glowColor}` }}
                    >
                      <span className="text-xl font-bold text-white">{timelineData[activeIndex].year}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Subtitle */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00c8e0]/10 border border-[#00c8e0]/20 text-[#00c8e0] text-xs font-medium mb-4">
                      {(() => {
                        const Icon = timelineData[activeIndex].icon;
                        return <Icon className="w-3.5 h-3.5" />;
                      })()}
                      {timelineData[activeIndex].subtitle}
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                      {timelineData[activeIndex].title}
                    </h3>

                    {/* Highlights with Check Marks */}
                    <ul className="space-y-4 mb-8">
                      {timelineData[activeIndex].highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-[#00c8e0]/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#00c8e0]" />
                          </div>
                          <span className="text-white/70 text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex gap-6">
                      {timelineData[activeIndex].stats.map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="relative"
                        >
                          <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${timelineData[activeIndex].color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative py-24">
        {/* Glassmorphic Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00bcff] to-[#5474eb]">
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Gradient Orbs for extra glow */}
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#5474eb]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#00bcff]/25 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-24 bottom-20 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00c8e0] via-[#1e88e5] to-[#00c8e0]"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        w-12 h-12 rounded-xl cursor-pointer
                        bg-gradient-to-br ${item.color} 
                        border border-white/20 backdrop-blur-xl
                        flex items-center justify-center
                      `}
                      style={{ boxShadow: `0 0 25px ${item.glowColor}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Glass Card */}
                  <div className={`
                    ml-20 md:ml-0 md:w-[calc(50%-3rem)]
                    ${isEven ? 'md:pr-12' : 'md:pl-12'}
                  `}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      {/* Glassmorphic Card */}
                      <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
                          
                          {/* Year Badge */}
                          <div className={`absolute top-4 ${isEven ? 'left-4' : 'md:right-4 left-4'}`}>
                            <span className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${item.color} text-white text-sm font-bold border border-white/20`}>
                              {item.year}
                            </span>
                          </div>

                          {item.hasVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                                <Play className="w-4 h-4 text-white ml-0.5" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className={`p-6 ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                          <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#00c8e0] transition-colors">
                            {item.title}
                          </h4>

                          {/* Highlights */}
                          <ul className="space-y-2 mb-5">
                            {item.highlights.slice(0, 2).map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="mt-1 w-4 h-4 rounded-full bg-[#00c8e0]/15 flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5 text-[#00c8e0]" />
                                </div>
                                <span className="text-white/60 text-sm leading-relaxed line-clamp-1">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Stats */}
                          <div className="flex gap-6 pt-4 border-t border-white/10">
                            {item.stats.map((stat) => (
                              <div key={stat.label}>
                                <p className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {stat.value}
                                </p>
                                <p className="text-xs text-white/40">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-6 md:left-1/2 -bottom-4 md:-translate-x-1/2"
          >
            <div 
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center border border-white/20"
              style={{ boxShadow: '0 0 25px rgba(0, 200, 224, 0.4)' }}
            >
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
