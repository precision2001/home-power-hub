import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const MobileCTABar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="glass-strong border-t border-border/50 px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 w-11 h-11 rounded-full bg-secondary hover:bg-secondary/80"
            asChild
          >
            <a href="tel:1300000000" aria-label="Call us">
              <Phone className="w-5 h-5 text-foreground" />
            </a>
          </Button>
          <Button variant="glow" className="flex-1 h-11 text-sm font-semibold">
            Get a Free Quote
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 w-11 h-11 rounded-full bg-secondary hover:bg-secondary/80"
            aria-label="Chat with us"
          >
            <MessageCircle className="w-5 h-5 text-foreground" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
