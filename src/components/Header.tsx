import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Search, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import easylinkLogo from "@/assets/easylink-logo.png";

const batteryItems = [
  { label: "BLUETTI EP760", href: "/ep760" },
  { label: "BLUETTI EP2000 Three Phase", href: "/ep2000" },
  { label: "Portable Power Stations", href: "/portable-power" },
];

const navItems = [
  { label: "Customers", href: "/customers" },
  { label: "Installers", href: "/installers" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBatteryOpen, setIsBatteryOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-primary py-2 text-center">
        <p className="text-sm font-medium text-primary-foreground">
          Summer Sale 2025 — Up to <span className="font-bold">48% Off!</span>
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 glass-strong">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Link to="/" className="flex items-center gap-3">
                <img src={easylinkLogo} alt="EasyLink Solar" className="h-10 w-10" />
                <span className="text-xl font-bold font-heading text-foreground">EASYLINK SOLAR</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Battery Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsBatteryOpen(true)}
                onMouseLeave={() => setIsBatteryOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Battery <ChevronDown className="w-4 h-4" />
                </button>
                {isBatteryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass rounded-xl p-2 shadow-xl">
                    {batteryItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="sm" className="hidden sm:flex" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <div className="flex flex-col items-end gap-0.5">
                <Button variant="hero" size="sm">
                  Buy Now
                </Button>
                <span className="text-[10px] text-muted-foreground">
                  Powered by <span className="font-bold text-gradient">BLUETTI</span>
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider px-2 pt-2">Battery</p>
              {batteryItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};
