import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-[0_16px_32px_rgba(30,27,20,0.05)]"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="text-3xl font-headline tracking-tighter text-primary">
          CLAS
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 items-center">
          <a className="font-headline uppercase tracking-widest text-sm text-primary border-b border-primary/20 pb-1 hover:text-primary transition-colors duration-300" href="#">Home</a>
          <a className="font-headline uppercase tracking-widest text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Menu</a>
          <a className="font-headline uppercase tracking-widest text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Our Story</a>
          <a className="font-headline uppercase tracking-widest text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
