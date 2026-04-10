import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Heart, Mic, Users, Brain, Sparkles } from "lucide-react";

const skills = [
  { icon: Video, label: "Video Creation", desc: "Cinematic storytelling & editing" },
  { icon: Mic, label: "Public Speaking", desc: "Engaging talks & presentations" },
  { icon: Heart, label: "Counseling", desc: "Mental health & life guidance" },
  { icon: Users, label: "Community Building", desc: "Growing loyal audiences" },
  { icon: Brain, label: "Mindset Coaching", desc: "Transforming perspectives" },
  { icon: Sparkles, label: "Content Strategy", desc: "Viral content & branding" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">What I bring</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold gold-text">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-500 hover:gold-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{skill.label}</h3>
              <p className="text-sm font-body text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
