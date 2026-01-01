import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import batteryImage from "@/assets/battery-system.png";

const packages = [
  {
    id: 1,
    name: "EP2000 + HV800 + 4 × B700",
    capacity: "29.49 kWh",
    power: "20 kW",
    pv: "40 kWp PV",
    price: "9,800",
    popular: false,
  },
  {
    id: 2,
    name: "EP2000 + HV800 + 5 × B700",
    capacity: "36.86 kWh",
    power: "20 kW",
    pv: "40 kWp PV",
    price: "10,500",
    popular: true,
  },
  {
    id: 3,
    name: "EP2000 + HV800 + 7 × B700",
    capacity: "51.61 kWh",
    power: "20 kW",
    pv: "40 kWp PV",
    price: "9,500",
    popular: false,
  },
];

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 11,
    mins: 23,
    secs: 34,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <span className="text-xs sm:text-sm text-muted-foreground">Ends</span>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 glass-strong rounded-lg flex items-center justify-center">
            <span className="text-lg sm:text-2xl font-bold text-foreground font-heading">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground capitalize mt-1 block">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ProductShowcase = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Whole-Home Power + Installation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            <span className="text-primary font-semibold">300 Systems ONLY!</span> —
            Limited Summer Offer
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            205 homeowners claimed this offer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-3xl" />
            <img
              src={batteryImage}
              alt="BLUETTI EP2000 Battery System"
              className="w-full max-w-xs sm:max-w-md mx-auto animate-float"
            />
          </motion.div>

          {/* Package Selection */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {/* Package Cards */}
            <div className="space-y-3 sm:space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`relative glass rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-300 ${
                    selectedPackage.id === pkg.id
                      ? "border-primary glow-primary"
                      : "hover:border-primary/30"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-2.5 sm:-top-3 right-3 sm:right-4 bg-gradient-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                        {pkg.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {pkg.capacity} | {pkg.power} | {pkg.pv}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xl sm:text-2xl font-bold text-gradient font-heading">
                        A${pkg.price}*
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">+ GST</p>
                      <p className="text-[10px] sm:text-xs text-primary">Installation Included</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              *After Federal Government Battery Rebate
            </p>

            {/* Countdown */}
            <div className="flex justify-center">
              <CountdownTimer />
            </div>

            <Button variant="glow" size="xl" className="w-full">
              Claim Your Deal Now
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Note: Additional electrician costs may apply depending on site
              conditions. T&Cs apply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
