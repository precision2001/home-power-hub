import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Rocket, Building2, Brain, Star, Play, Pause, BarChart3, Network, 
  Hexagon, Triangle, Circle, ArrowRight
} from "lucide-react";
import portfolio1 from "@/assets/about/portfolio-1.jpg";
import portfolio2 from "@/assets/about/portfolio-2.jpg";
import portfolio3 from "@/assets/about/portfolio-3.jpg";
import portfolio4 from "@/assets/about/portfolio-4.jpg";
import portfolio5 from "@/assets/about/portfolio-5.jpg";
import energyFlowVideo from "@/assets/energy-flow.mp4";

const timelineData = [
  {
    year: "2016",
    title: "Founding",
    subtitle: "The Beginning",
    description: "Established as a solar energy solutions provider in Sydney, Australia, focusing on connecting customers, installers, and vendors. EasyLink Solar was born from a vision to make solar energy accessible and transparent for every Australian household.",
    icon: Rocket,
    image: portfolio1,
    stats: [
      { label: "Location", value: "Sydney" },
      { label: "Mission", value: "Connect & Serve" }
    ],
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.4)"
  },
  {
    year: "2025",
    title: "Platform Launch & AI Integration",
    subtitle: "Active as of 2025",
    description: "Rolled out an advanced AI-driven quoting system using satellite imagery and machine learning for 95% accurate roof analysis, generating hundreds of optimized configurations with full 2025 incentive integration for transparent, instant quotes.",
    icon: Brain,
    image: portfolio2,
    hasVideo: true,
    stats: [
      { label: "Roof Analysis Accuracy", value: "95%" },
      { label: "Incentive Integration", value: "2025" }
    ],
    color: "from-[#00c8e0] to-[#1e88e5]",
    glowColor: "rgba(0, 200, 224, 0.4)"
  },
  {
    year: "Oct 2025",
    title: "User Growth & Quote Generation",
    subtitle: "Major Milestone",
    description: "Surpassed 1000 personalized solar quotes created nationwide, empowering customers with high-ROI options and pre-qualified leads for installers. A testament to our commitment to transparent, data-driven solar solutions.",
    icon: BarChart3,
    image: portfolio3,
    stats: [
      { label: "Quotes Generated", value: "1,000+" },
      { label: "Coverage", value: "Nationwide" }
    ],
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.4)"
  },
  {
    year: "Ongoing",
    title: "Customer Excellence",
    subtitle: "Our Commitment",
    description: "Achieved consistent 5-star reviews, underscoring commitment to transparent, no-pressure service and premium Clean Energy Council-approved equipment. Every interaction reflects our customer-first philosophy.",
    icon: Star,
    image: portfolio4,
    stats: [
      { label: "Customer Rating", value: "5★" },
      { label: "Equipment", value: "CEC Approved" }
    ],
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(251, 113, 133, 0.4)"
  },
  {
    year: "2025+",
    title: "Ecosystem Expansion",
    subtitle: "VPP Forthcoming",
    description: "Built a verified network of certified installers with integrated CRM tools, marketing support, and upcoming Virtual Power Plant (VPP) Connect Service to enhance collaboration and energy optimization across Australia.",
    icon: Network,
    image: portfolio5,
    hasVideo: true,
    stats: [
      { label: "Installer Network", value: "Certified" },
      { label: "Coming Soon", value: "VPP Connect" }
    ],
    color: "from-violet-400 to-purple-500",
    glowColor: "rgba(167, 139, 250, 0.4)"
  }
];

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
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden" ref={containerRef}>
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 200, 224, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 200, 224, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-[10%] text-[#00c8e0]/10"
        >
          <Hexagon className="w-32 h-32" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-40 left-[5%] text-[#1e88e5]/10"
        >
          <Triangle className="w-24 h-24" strokeWidth={0.5} />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Circle className="w-[600px] h-[600px] text-[#00c8e0]/5" strokeWidth={0.3} />
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00c8e0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1e88e5]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00c8e0]/10 backdrop-blur-xl border border-[#00c8e0]/30 text-[#00c8e0] text-sm font-semibold mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#00c8e0] animate-pulse" />
            <Building2 className="w-4 h-4" />
            Our Story
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-primary-foreground">About </span>
            <span className="bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] bg-clip-text text-transparent">
              EasyLink
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Founded in Sydney in 2016, we've evolved into Australia's leading 
            <span className="text-[#00c8e0] font-semibold"> AI-powered solar platform</span>, 
            marked by notable achievements in technology, engagement, and market impact.
          </p>
        </motion.div>

        {/* Horizontal Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Timeline Track */}
          <div className="relative flex items-center justify-between max-w-4xl mx-auto">
            {/* Track Line */}
            <div className="absolute left-0 right-0 h-0.5 bg-border/50 top-1/2 -translate-y-1/2" />
            <motion.div 
              className="absolute left-0 h-0.5 bg-gradient-to-r from-[#00c8e0] to-[#1e88e5] top-1/2 -translate-y-1/2"
              style={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Timeline Points */}
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
                  {/* Node */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      boxShadow: isActive 
                        ? `0 0 30px ${item.glowColor}, 0 0 60px ${item.glowColor}`
                        : 'none'
                    }}
                    className={`
                      relative w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center
                      transition-all duration-500 cursor-pointer
                      ${isActive 
                        ? `bg-gradient-to-br ${item.color} border-2 border-white/20` 
                        : isPast 
                          ? 'bg-card/80 backdrop-blur-xl border border-[#00c8e0]/30' 
                          : 'bg-card/50 backdrop-blur-xl border border-border/30'
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : isPast ? 'text-[#00c8e0]' : 'text-muted'}`} />
                    
                    {/* Pulse Ring for Active */}
                    {isActive && (
                      <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color}`}
                      />
                    )}
                  </motion.div>
                  
                  {/* Year Label */}
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0.6 }}
                    className={`
                      mt-3 text-xs md:text-sm font-bold whitespace-nowrap
                      ${isActive ? 'text-[#00c8e0]' : 'text-muted'}
                    `}
                  >
                    {item.year}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Content Area - Futuristic Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Glow Effect */}
          <div 
            className="absolute -inset-4 rounded-[2rem] blur-3xl opacity-30"
            style={{ background: `linear-gradient(135deg, ${timelineData[activeIndex].glowColor}, transparent)` }}
          />
          
          {/* Main Card */}
          <div className="relative bg-card/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#00c8e0]/30 rounded-tl-[2rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#1e88e5]/30 rounded-br-[2rem]" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Media Side */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
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
                      className={`absolute inset-0 flex items-center justify-center bg-secondary/30 backdrop-blur-sm transition-opacity ${
                        isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${timelineData[activeIndex].color} flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white/20`}
                        style={{ boxShadow: `0 0 40px ${timelineData[activeIndex].glowColor}` }}
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </motion.div>
                    </button>
                  </div>
                ) : (
                  <div className="relative h-full group">
                    <img
                      src={timelineData[activeIndex].image}
                      alt={timelineData[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/20 to-transparent" />
                  </div>
                )}
                
                {/* Floating Year Badge */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-8 left-8"
                >
                  <div 
                    className={`px-6 py-3 rounded-xl bg-gradient-to-r ${timelineData[activeIndex].color} backdrop-blur-xl border border-white/20`}
                    style={{ boxShadow: `0 10px 40px ${timelineData[activeIndex].glowColor}` }}
                  >
                    <span className="text-2xl md:text-3xl font-bold text-white">{timelineData[activeIndex].year}</span>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Subtitle Tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c8e0]/10 border border-[#00c8e0]/20 text-[#00c8e0] text-sm font-medium mb-6">
                    {(() => {
                      const Icon = timelineData[activeIndex].icon;
                      return <Icon className="w-4 h-4" />;
                    })()}
                    {timelineData[activeIndex].subtitle}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                    {timelineData[activeIndex].title}
                  </h3>

                  <p className="text-lg text-muted leading-relaxed mb-10">
                    {timelineData[activeIndex].description}
                  </p>

                  {/* Stats Grid - Futuristic Style */}
                  <div className="grid grid-cols-2 gap-4">
                    {timelineData[activeIndex].stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00c8e0]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-5 rounded-xl bg-card/50 backdrop-blur-xl border border-white/5 hover:border-[#00c8e0]/30 transition-colors">
                          <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${timelineData[activeIndex].color} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted">{stat.label}</p>
                          
                          {/* Corner Accent */}
                          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00c8e0]/50" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation Hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-2 mt-8 text-muted text-sm"
                  >
                    <span>Explore our journey</span>
                    <ArrowRight className="w-4 h-4 text-[#00c8e0] animate-pulse" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Timeline Section */}
        <div className="relative mt-32">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
              The Complete Journey
            </h3>
            <p className="text-muted">Scroll to explore each milestone</p>
          </motion.div>

          {/* Central Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-32 bottom-20 w-px bg-border/30 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00c8e0] via-[#1e88e5] to-[#00c8e0]"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-28">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        w-12 h-12 md:w-14 md:h-14 rounded-xl cursor-pointer
                        bg-gradient-to-br ${item.color} border-2 border-white/20
                        flex items-center justify-center shadow-2xl
                        transition-all duration-300
                      `}
                      style={{ boxShadow: `0 0 25px ${item.glowColor}` }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`
                    ml-20 md:ml-0 md:w-[calc(50%-3.5rem)]
                    ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}
                  `}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Card Glow */}
                      <div 
                        className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ background: item.glowColor }}
                      />
                      
                      <div className="relative bg-card/50 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#00c8e0]/30 transition-all duration-500">
                        {/* Image Section */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent`} />
                          
                          {/* Year Chip */}
                          <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'}`}>
                            <span className={`px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white text-sm font-bold`}>
                              {item.year}
                            </span>
                          </div>

                          {item.hasVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                                <Play className="w-5 h-5 text-secondary ml-0.5" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className={`p-6 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          <h4 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3 group-hover:text-[#00c8e0] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                            {item.description}
                          </p>

                          {/* Stats Row */}
                          <div className={`flex gap-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            {item.stats.map((stat) => (
                              <div key={stat.label}>
                                <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {stat.value}
                                </p>
                                <p className="text-xs text-muted">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-3.5rem)]" />
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
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center border-2 border-white/20"
              style={{ boxShadow: '0 0 30px rgba(0, 200, 224, 0.5)' }}
            >
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
