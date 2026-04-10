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
             “Main Keshav hoon — YouTuber by passion aur College Counselor by purpose.
                   Screen par content banata hoon, aur real life me logon ko direction deta hoon.
              Mere videos sirf entertainment nahi… ek perspective hote hain.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
