import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Youtube, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold gold-text">Get In Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Email</p>
                <a href="mailto:keshav@example.com" className="text-foreground font-body hover:text-primary transition-colors">
                  keshav@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Location</p>
                <p className="text-foreground font-body">India</p>
              </div>
            </div>

            <div className="h-px bg-border/50" />

            <div className="flex items-center gap-4 justify-center">
              <a
                href="https://youtube.com/@keshav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_90%_60%/0.3)]"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/keshav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_90%_60%/0.3)]"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground font-body mt-16"
        >
          © 2026 Keshav. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
