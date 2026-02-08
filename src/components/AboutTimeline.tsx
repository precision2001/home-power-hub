import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Rocket, Users, Award, Building2, Globe, Zap, 
  Brain, Star, Play, Pause, ChevronDown, BarChart3, Network
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
    color: "from-amber-400 to-orange-500"
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
    color: "from-[#00c8e0] to-[#1e88e5]"
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
    color: "from-emerald-400 to-teal-500"
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
    color: "from-rose-400 to-pink-500"
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
    color: "from-violet-400 to-purple-500"
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

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    <section className="py-20 md:py-28 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Easylink Solar, founded in Sydney in 2016, has evolved into Australia's leading AI-powered solar platform, marked by several notable achievements in technology adoption, user engagement, and market impact.
          </p>
        </motion.div>

        {/* Year Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeIndex === index
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
              }`}
            >
              {item.year}
            </button>
          ))}
        </motion.div>

        {/* Featured Content Area */}
        <div className="mb-16">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Media Side */}
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${timelineData[activeIndex].color} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`} />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                  {timelineData[activeIndex].hasVideo ? (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        src={energyFlowVideo}
                        poster={timelineData[activeIndex].image}
                        loop
                        muted
                        playsInline
                        className="w-full h-[350px] md:h-[450px] object-cover"
                        onEnded={() => setIsPlaying(false)}
                      />
                      <button
                        onClick={handlePlayVideo}
                        className={`absolute inset-0 flex items-center justify-center bg-foreground/20 backdrop-blur-sm transition-opacity ${
                          isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                        }`}
                      >
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${timelineData[activeIndex].color} flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110`}>
                          {isPlaying ? (
                            <Pause className="w-8 h-8 text-white" />
                          ) : (
                            <Play className="w-8 h-8 text-white ml-1" />
                          )}
                        </div>
                      </button>
                    </div>
                  ) : (
                    <img
                      src={timelineData[activeIndex].image}
                      alt={timelineData[activeIndex].title}
                      className="w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  
                  {/* Year Badge */}
                  <div className={`absolute top-6 left-6 px-6 py-3 rounded-2xl bg-gradient-to-r ${timelineData[activeIndex].color} shadow-xl`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">{timelineData[activeIndex].year}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${timelineData[activeIndex].color} flex items-center justify-center shadow-lg`}>
                      {(() => {
                        const Icon = timelineData[activeIndex].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {timelineData[activeIndex].subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {timelineData[activeIndex].title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {timelineData[activeIndex].description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {timelineData[activeIndex].stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="bg-card rounded-2xl p-5 border border-border hover:border-[#00c8e0]/50 transition-colors"
                      >
                        <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${timelineData[activeIndex].color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore the journey</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00c8e0] to-[#1e88e5]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year Bubble */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl border-4 border-background cursor-pointer`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className="hidden md:block text-white font-bold text-sm">{item.year}</span>
                      <Icon className="md:hidden w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl hover:border-[#00c8e0]/50 transition-all group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                          <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Mini Image */}
                      <div className="relative rounded-xl overflow-hidden h-32 group-hover:h-40 transition-all duration-300">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color.replace('from-', 'from-').replace('to-', 'via-transparent to-')} opacity-30`} />
                        
                        {item.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                              <Play className="w-4 h-4 text-foreground ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                        {item.stats.map((stat) => (
                          <div key={stat.label} className="flex-1">
                            <p className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 -bottom-8 md:-translate-x-1/2"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00c8e0] to-[#1e88e5] flex items-center justify-center shadow-xl border-4 border-background">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
