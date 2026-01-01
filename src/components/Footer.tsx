import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import easylinkLogo from "@/assets/easylink-logo.png";

const footerLinks = {
  Products: ["EP2000", "AC500", "AC300", "Solar Panels", "Accessories"],
  Support: ["FAQs", "Warranty", "Contact Us", "User Manual", "Firmware"],
  Company: ["About Us", "Careers", "Press", "Partners", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const Footer = () => {
  return (
    <footer id="support" className="bg-primary/5 border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Ready to Take Control of Your Energy?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
              Join thousands of homeowners already saving with EasyLink Solar and BLUETTI products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="glow" size="lg" className="sm:size-xl">
                Get Your Quote
              </Button>
              <Button variant="heroOutline" size="lg" className="sm:size-xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Links Grid */}
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12 border-t border-border/50">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2">
              <img src={easylinkLogo} alt="EasyLink Solar" className="h-7 w-7 sm:h-8 sm:w-8" />
              <span className="text-base sm:text-lg font-brand font-bold text-foreground whitespace-nowrap">
                EASYLINK SOLAR
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Your Local Solar Energy Partner
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">
              Authorised <span className="font-bold text-gradient">BLUETTI</span> Distributor
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm sm:text-base font-heading font-semibold text-foreground mb-3 sm:mb-4">
                {category}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-4 sm:py-6 border-t border-border/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2025 EasyLink Solar. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
