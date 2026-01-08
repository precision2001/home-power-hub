import { motion } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";
import batterySystem from "@/assets/battery-system.png";
import dualCoreShield from "@/assets/dual-core-shield.png";
import heroInstallation from "@/assets/hero-installation.jpg";

export const EP2000TechPioneer = () => {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Technology Pioneer in Clean Energy
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* 40kWp Max PV - Wide card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 rounded-2xl border border-[#1e3a5f] relative overflow-hidden group hover:border-[#00c8e0]/50 transition-all duration-300 h-48 md:h-56"
            style={{
              backgroundImage: `url(${heroHome})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-transparent" />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">40kWp</p>
              <p className="text-gray-400">Max. Recommended PV Power</p>
            </div>
          </motion.div>

          {/* All-in-One System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-span-2 rounded-2xl border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden h-48 md:h-56"
            style={{
              backgroundImage: `url(${batterySystem})`,
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#0f2847'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2847] via-[#0f2847]/90 to-transparent" />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">All-in-One System</p>
              <p className="text-gray-400">Complete solution in one package</p>
            </div>
          </motion.div>

          {/* 20kW 3 Phase Output - Full width hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-2 md:col-span-4 bg-gradient-to-r from-[#00c8e0]/20 via-[#1e88e5]/20 to-[#00c8e0]/20 rounded-2xl p-8 md:p-12 border border-[#00c8e0]/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00c8e0]/5 to-[#1e88e5]/5" />
            <div className="relative z-10 text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                20kW <span className="text-[#00c8e0]">3 Phase</span> Output
              </p>
              <p className="text-gray-300 text-lg">Powerful 6.7kW per phase</p>
            </div>
          </motion.div>

          {/* Six-Layer Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="col-span-1 rounded-2xl border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden h-40 md:h-48"
            style={{
              backgroundImage: `url(${dualCoreShield})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/50" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                Six-<span className="text-[#00c8e0]">Layer</span>
              </p>
              <p className="text-gray-400 text-sm">Full-system protection</p>
            </div>
          </motion.div>

          {/* Capacity Range - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-3 rounded-2xl border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden h-40 md:h-48"
            style={{
              backgroundImage: `url(${batterySystem})`,
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#0f2847'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2847] via-[#0f2847]/85 to-transparent" />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <p className="text-2xl md:text-4xl font-bold text-white mb-2">14.7kWh — 51.6kWh</p>
              <p className="text-gray-400">Flexible sizing for your needs</p>
            </div>
          </motion.div>

          {/* Parallel Units - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c] rounded-2xl p-6 md:p-8 border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00c8e0]/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-bold text-white mb-1">Parallel Up to 3 Units</p>
              <p className="text-gray-400 text-sm">For small business</p>
            </div>
          </motion.div>

          {/* 98% Efficiency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c] rounded-2xl p-6 md:p-8 border border-[#1e3a5f] relative overflow-hidden hover:border-[#00c8e0]/50 transition-all duration-300"
          >
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#00c8e0]/15 rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-4xl md:text-5xl font-bold text-[#00c8e0] mb-1">98%</p>
              <p className="text-gray-400 text-sm">Max. inverter efficiency</p>
            </div>
          </motion.div>

          {/* Easy App Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c] rounded-2xl p-6 md:p-8 border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute right-4 bottom-4 w-16 h-24 rounded-xl bg-gradient-to-b from-[#00c8e0]/20 to-[#1e88e5]/20 border border-[#00c8e0]/30" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-bold text-white mb-1">Easy App Control</p>
              <p className="text-gray-400 text-sm">Monitor and manage from anywhere</p>
            </div>
          </motion.div>

          {/* SHADE FIX Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 md:col-span-2 rounded-2xl border border-[#1e3a5f] hover:border-[#00c8e0]/50 transition-all duration-300 relative overflow-hidden h-40 md:h-auto"
            style={{
              backgroundImage: `url(${heroInstallation})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/40" />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <p className="text-xl md:text-2xl font-bold text-white mb-1">SHADE FIX Tech</p>
              <p className="text-gray-400 text-sm">Reduces solar shading power loss</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
