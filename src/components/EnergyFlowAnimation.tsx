import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const EnergyFlowAnimation = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Energy particle component
  const EnergyParticle = ({ 
    path, 
    delay = 0, 
    duration = 2, 
    color = "hsl(var(--accent))" 
  }: { 
    path: string; 
    delay?: number; 
    duration?: number; 
    color?: string;
  }) => (
    <motion.circle
      r="4"
      fill={color}
      filter="url(#glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        offsetPath: `path('${path}')`,
      }}
    />
  );

  // Paths for energy flow
  const solarToBattery1 = "M 200 80 Q 150 120 100 180";
  const solarToBattery2 = "M 200 80 Q 250 120 300 180";
  const solarToHouse = "M 200 80 L 200 140";
  const battery1ToHouse = "M 100 220 Q 120 200 160 180";
  const battery2ToHouse = "M 300 220 Q 280 200 240 180";
  const batteryToEV = "M 200 280 L 200 320";

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ maxHeight: '500px' }}
      >
        <defs>
          {/* Glow filter for particles */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for sky */}
          <linearGradient id="daySky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#E0F4FF" />
          </linearGradient>
          
          <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#16213e" />
          </linearGradient>

          {/* Solar panel gradient */}
          <linearGradient id="solarPanel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2744" />
          </linearGradient>

          {/* Battery gradient */}
          <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Sky Background */}
        <motion.rect
          x="0"
          y="0"
          width="400"
          height="400"
          rx="16"
          animate={{
            fill: isDay ? "url(#daySky)" : "url(#nightSky)",
          }}
          transition={{ duration: 1 }}
        />

        {/* Stars (visible at night) */}
        <AnimatePresence>
          {!isDay && (
            <>
              {[
                { cx: 50, cy: 30 },
                { cx: 120, cy: 50 },
                { cx: 280, cy: 25 },
                { cx: 350, cy: 45 },
                { cx: 320, cy: 70 },
                { cx: 80, cy: 70 },
              ].map((star, i) => (
                <motion.circle
                  key={i}
                  cx={star.cx}
                  cy={star.cy}
                  r="2"
                  fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3], 
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Sun */}
        <AnimatePresence>
          {isDay && (
            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.circle
                cx="320"
                cy="50"
                r="25"
                fill="#F5B100"
                filter="url(#glow)"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Sun rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.line
                  key={i}
                  x1={320 + 30 * Math.cos((angle * Math.PI) / 180)}
                  y1={50 + 30 * Math.sin((angle * Math.PI) / 180)}
                  x2={320 + 40 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#F5B100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Moon */}
        <AnimatePresence>
          {!isDay && (
            <motion.circle
              cx="320"
              cy="50"
              r="20"
              fill="#E8E8E8"
              filter="url(#glow)"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        {/* House */}
        <g>
          {/* House body */}
          <rect x="160" y="150" width="80" height="60" fill="#4a5568" rx="4" />
          {/* Roof */}
          <polygon points="150,150 200,110 250,150" fill="#2d3748" />
          {/* Door */}
          <rect x="190" y="175" width="20" height="35" fill="#1a202c" rx="2" />
          {/* Windows */}
          <motion.rect
            x="165"
            y="160"
            width="18"
            height="18"
            fill={isDay ? "#87CEEB" : "#FFE066"}
            rx="2"
            animate={{ opacity: isDay ? 0.7 : 1 }}
          />
          <motion.rect
            x="217"
            y="160"
            width="18"
            height="18"
            fill={isDay ? "#87CEEB" : "#FFE066"}
            rx="2"
            animate={{ opacity: isDay ? 0.7 : 1 }}
          />
        </g>

        {/* Solar Panels on roof */}
        <g>
          <rect x="155" y="115" width="35" height="25" fill="url(#solarPanel)" rx="2" />
          <rect x="195" y="115" width="35" height="25" fill="url(#solarPanel)" rx="2" />
          {/* Panel grid lines */}
          <line x1="172" y1="115" x2="172" y2="140" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="155" y1="127" x2="190" y2="127" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="212" y1="115" x2="212" y2="140" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="195" y1="127" x2="230" y2="127" stroke="#3b82f6" strokeWidth="0.5" />
          
          {/* Shimmer effect when day */}
          {isDay && (
            <motion.rect
              x="155"
              y="115"
              width="75"
              height="25"
              fill="white"
              opacity="0"
              rx="2"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          )}
        </g>

        {/* EP760 Battery (Left) */}
        <g>
          <motion.rect
            x="60"
            y="180"
            width="80"
            height="100"
            fill="url(#batteryGradient)"
            rx="8"
            animate={{ 
              filter: isDay ? "drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))" : "none" 
            }}
          />
          <rect x="70" y="190" width="60" height="15" fill="#1e40af" rx="3" />
          <text x="100" y="230" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
            EP760
          </text>
          <text x="100" y="245" textAnchor="middle" fill="#93c5fd" fontSize="8">
            7,600W
          </text>
          {/* Battery level indicator */}
          <rect x="75" y="255" width="50" height="15" fill="#1e3a8a" rx="3" />
          <motion.rect
            x="77"
            y="257"
            height="11"
            fill="#22c55e"
            rx="2"
            animate={{ width: isDay ? [20, 46, 46] : [46, 20, 20] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </g>

        {/* EP2000 Battery (Right) */}
        <g>
          <motion.rect
            x="260"
            y="180"
            width="80"
            height="100"
            fill="url(#batteryGradient)"
            rx="8"
            animate={{ 
              filter: isDay ? "drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))" : "none" 
            }}
          />
          <rect x="270" y="190" width="60" height="15" fill="#1e40af" rx="3" />
          <text x="300" y="230" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
            EP2000
          </text>
          <text x="300" y="245" textAnchor="middle" fill="#93c5fd" fontSize="8">
            30kWh
          </text>
          {/* Battery level indicator */}
          <rect x="275" y="255" width="50" height="15" fill="#1e3a8a" rx="3" />
          <motion.rect
            x="277"
            y="257"
            height="11"
            fill="#22c55e"
            rx="2"
            animate={{ width: isDay ? [20, 46, 46] : [46, 20, 20] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </g>

        {/* Electric Vehicle */}
        <g>
          {/* Car body */}
          <rect x="165" y="330" width="70" height="30" fill="#374151" rx="5" />
          <rect x="175" y="320" width="50" height="15" fill="#4b5563" rx="5" />
          {/* Wheels */}
          <circle cx="180" cy="360" r="8" fill="#1f2937" />
          <circle cx="220" cy="360" r="8" fill="#1f2937" />
          {/* Charging indicator */}
          <motion.text
            x="200"
            y="345"
            textAnchor="middle"
            fill="#22c55e"
            fontSize="12"
            fontWeight="bold"
            animate={{ opacity: !isDay ? [0.5, 1, 0.5] : 0.3 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ⚡
          </motion.text>
        </g>

        {/* Energy Flow Particles - Day (Solar to Batteries and House) */}
        {isDay && (
          <>
            {/* Solar to EP760 */}
            <EnergyParticle path={solarToBattery1} delay={0} duration={1.5} color="#F5B100" />
            <EnergyParticle path={solarToBattery1} delay={0.5} duration={1.5} color="#F5B100" />
            <EnergyParticle path={solarToBattery1} delay={1} duration={1.5} color="#F5B100" />
            
            {/* Solar to EP2000 */}
            <EnergyParticle path={solarToBattery2} delay={0.2} duration={1.5} color="#F5B100" />
            <EnergyParticle path={solarToBattery2} delay={0.7} duration={1.5} color="#F5B100" />
            <EnergyParticle path={solarToBattery2} delay={1.2} duration={1.5} color="#F5B100" />
            
            {/* Solar to House */}
            <EnergyParticle path={solarToHouse} delay={0.3} duration={1} color="#F5B100" />
            <EnergyParticle path={solarToHouse} delay={0.8} duration={1} color="#F5B100" />
          </>
        )}

        {/* Energy Flow Particles - Night (Batteries to House and EV) */}
        {!isDay && (
          <>
            {/* EP760 to House */}
            <EnergyParticle path={battery1ToHouse} delay={0} duration={1.2} color="#3b82f6" />
            <EnergyParticle path={battery1ToHouse} delay={0.6} duration={1.2} color="#3b82f6" />
            
            {/* EP2000 to House */}
            <EnergyParticle path={battery2ToHouse} delay={0.3} duration={1.2} color="#3b82f6" />
            <EnergyParticle path={battery2ToHouse} delay={0.9} duration={1.2} color="#3b82f6" />
            
            {/* Battery to EV */}
            <EnergyParticle path={batteryToEV} delay={0.2} duration={1} color="#22c55e" />
            <EnergyParticle path={batteryToEV} delay={0.7} duration={1} color="#22c55e" />
          </>
        )}

        {/* Flow path indicators (subtle lines) */}
        <g opacity="0.2">
          {isDay ? (
            <>
              <path d={solarToBattery1} stroke="#F5B100" strokeWidth="2" fill="none" strokeDasharray="4,4" />
              <path d={solarToBattery2} stroke="#F5B100" strokeWidth="2" fill="none" strokeDasharray="4,4" />
              <path d={solarToHouse} stroke="#F5B100" strokeWidth="2" fill="none" strokeDasharray="4,4" />
            </>
          ) : (
            <>
              <path d={battery1ToHouse} stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,4" />
              <path d={battery2ToHouse} stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,4" />
              <path d={batteryToEV} stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="4,4" />
            </>
          )}
        </g>

        {/* Day/Night indicator */}
        <motion.text
          x="200"
          y="390"
          textAnchor="middle"
          fill={isDay ? "#1e3a8a" : "#e2e8f0"}
          fontSize="12"
          fontWeight="600"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isDay ? "☀️ Daytime: Charging Batteries" : "🌙 Nighttime: Powering Home & EV"}
        </motion.text>
      </svg>
    </div>
  );
};
