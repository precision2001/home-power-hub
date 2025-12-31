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
    <footer id="support" className="bg-secondary/30 border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Take Control of Your Energy?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of homeowners already saving with EasyLink Solar and BLUETTI products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="xl">
                Get Your Quote
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Links Grid */}
      <div className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-2">
              <img src={easylinkLogo} alt="EasyLink Solar" className="h-8 w-8" />
              <span className="text-lg font-brand text-foreground whitespace-nowrap">
                EASYLINK SOLAR
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Your Local Solar Energy Partner
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Authorised <span className="font-bold text-gradient">BLUETTI</span> Dealer
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
      <div className="container mx-auto px-4 py-6 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 EasyLink Solar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
