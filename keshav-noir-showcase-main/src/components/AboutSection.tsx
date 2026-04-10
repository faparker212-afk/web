import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold gold-text">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="space-y-6 font-body text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              I'm <span className="text-primary font-semibold">Keshav</span> — a creator, a dreamer, and a voice for those 
              who feel unheard. From the streets to the screen, my journey hasn't been easy, but every scar 
              tells a story worth sharing.
            </p>
            <p>
              As a <span className="text-primary font-semibold">YouTuber</span>, I create content that hits different — raw, 
              real, and unapologetic. Whether it's motivational talks, life advice, or just keeping it 100 with my 
              audience, every video carries a piece of my soul.
            </p>
            <p>
              As a <span className="text-primary font-semibold">Counselor</span>, I guide people through their darkest hours. 
              Mental health isn't a joke — and I've made it my mission to break the stigma, one conversation at a time. 
              I believe in healing through honesty and strength through vulnerability.
            </p>
            <p className="text-primary/90 italic font-display text-xl md:text-2xl text-center pt-4">
              "I didn't come this far to only come this far."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
