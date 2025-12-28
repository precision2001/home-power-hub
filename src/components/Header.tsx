import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Specs", href: "#specs" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="text-2xl font-bold font-heading text-gradient">BLUETTI</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider hidden sm:block">
                Technology Pioneer<br />in Clean Energy
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
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
              <Button variant="heroOutline" size="sm" className="hidden sm:flex">
                Contact Us
              </Button>
              <Button variant="hero" size="sm">
                Buy Now
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
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
            className="md:hidden border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Product Sub-header */}
      <div className="sticky top-16 z-40 glass border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center justify-between">
            <span className="font-heading font-semibold text-foreground">EP2000 Home ESS</span>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
