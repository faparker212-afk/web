import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/keshav-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gold-border gold-glow">
            <img src={portrait} alt="Keshav" className="w-full h-full object-cover" width={700} height={900} />
          </div>
          <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse" />
        </motion.div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Welcome to my world
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-black gold-text leading-none mb-4"
          >
            Keshav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl font-body font-light text-foreground/80 mb-6"
          >
            YouTuber & Counselor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-sm md:text-base font-body text-muted-foreground leading-relaxed mb-10 italic"
          >
            "Born to stand out, built to inspire. Every story I tell leaves a mark."
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://youtube.com/@keshav"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(43_90%_60%/0.3)]"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://instagram.com/keshav"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(43_90%_60%/0.3)]"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
