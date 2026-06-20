import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  ExternalLink,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { snap, gentle } from "@/lib/motion";

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "Malika Degaldoruwa",
    href: "http://www.linkedin.com/in/malika-degaldoruwa-69362a215",
    Icon: Linkedin,
    accent: "#0a66c2",
  },
  {
    label: "GitHub",
    handle: "Malika200020",
    href: "https://github.com/Malika200020",
    Icon: Github,
    accent: "#8b5cf6",
  },
];

function ContactCard({ href, accent, icon, label, sublabel, detail }) {
  const cardV = {
    idle: {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px hsl(var(--border))",
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: `0 32px 64px ${accent}2e, 0 0 0 1px ${accent}55`,
    },
    tap: {
      y: -2,
      scale: 0.99,
      boxShadow: `0 8px 24px ${accent}18, 0 0 0 1px ${accent}38`,
    },
  };
  const iconV = {
    idle: { scale: 1, y: 0 },
    hover: { scale: 1.12, y: -3 },
    tap: { scale: 0.9, y: 0 },
  };
  const arrowV = {
    idle: { x: 0, y: 0, opacity: 0.38 },
    hover: { x: 4, y: -4, opacity: 1 },
    tap: { x: 2, y: -2, opacity: 0.7 },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardV}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      transition={snap}
      className="relative flex flex-col p-7 rounded-2xl will-change-transform
                 min-h-[210px] outline-none bg-card
                 focus-visible:ring-2 focus-visible:ring-primary/60
                 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between mb-5">
        <motion.div
          variants={iconV}
          transition={gentle}
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            border: `1px solid ${accent}2a`,
            color: accent,
          }}
        >
          {icon}
        </motion.div>

        <motion.div variants={arrowV} transition={gentle} className="mt-0.5">
          <ExternalLink size={15} style={{ color: accent }} />
        </motion.div>
      </div>

      <div className="flex-1">
        <p className="font-bold text-[1.3rem] leading-tight text-foreground">
          {label}
        </p>
        <p className="text-muted-foreground text-sm mt-1.5 leading-snug">
          {sublabel}
        </p>
      </div>

      <div className="flex items-center gap-1.5 mt-5 min-w-0">
        <p className="text-[0.8rem] font-medium truncate text-muted-foreground">
          {detail}
        </p>
        <motion.div variants={arrowV} transition={gentle} className="shrink-0">
          <ArrowRight size={13} style={{ color: accent }} />
        </motion.div>
      </div>
    </motion.a>
  );
}

ContactCard.propTypes = {
  href: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappHref = `https://wa.me/94719352662?text=${encodeURIComponent(
    "Hi Malika! I'd like to connect about an opportunity. Could we chat?",
  )}`;

  const emailHref = `mailto:malikadegaldoruwa@gmail.com?subject=${encodeURIComponent(
    "Opportunity / Inquiry — Malika Degaldoruwa",
  )}&body=${encodeURIComponent("Hi Malika,\n\nI'd like to connect about an opportunity.\n\nDetails:\n")}`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[640px] h-[640px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "#8b5cf6", opacity: 0.06 }}
      />
      <div
        className="absolute -right-48 bottom-1/3 w-[440px] h-[440px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "#25D366", opacity: 0.04 }}
      />

      <div className="relative container mx-auto max-w-5xl">
        <div className="max-w-[660px] mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-[0.62rem] font-bold tracking-[0.28em] uppercase">
                Let&apos;s Connect
              </span>
              <span className="h-px w-8 bg-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ ...gentle, delay: 0.07 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(34,197,94,0.07)",
                border: "1px solid rgba(34,197,94,0.15)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.55, 1], opacity: [1, 0.35, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-green-500 text-[0.68rem] font-semibold tracking-wide">
                Currently open to new opportunities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...gentle, delay: 0.1 }}
              className="font-bold text-[clamp(2.2rem,5.5vw,3.6rem)] text-foreground leading-tight tracking-tight"
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...gentle, delay: 0.16 }}
              className="text-muted-foreground text-[0.95rem] mt-4 leading-relaxed max-w-[460px] mx-auto"
            >
              Looking for a talented developer to join your team or collaborate
              on a project? I&apos;m always open to exploring opportunities
              where I can contribute my skills and expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...gentle, delay: 0.22 }}
            >
              <ContactCard
                href={whatsappHref}
                accent="#25D366"
                icon={<MessageCircle size={22} strokeWidth={1.75} />}
                label="WhatsApp"
                sublabel="Quickest way to reach me"
                detail="+94 71 935 2662"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...gentle, delay: 0.3 }}
            >
              <ContactCard
                href={emailHref}
                accent="#8b5cf6"
                icon={<Mail size={22} strokeWidth={1.75} />}
                label="Email"
                sublabel="Best for detailed inquiries"
                detail="malikadegaldoruwa@gmail.com"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.46 }}
            className="text-center text-muted-foreground text-[0.74rem] tracking-wide mt-5"
          >
            Based in Kandy, Sri Lanka · Response within 24 hours
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.52 }}
            className="flex items-center gap-5 mt-16 mb-8"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <span className="text-muted-foreground text-[0.65rem] font-semibold tracking-[0.22em] uppercase shrink-0">
              Find me on
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </motion.div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            {SOCIALS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...gentle, delay: 0.56 + i * 0.07 }}
              >
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    boxShadow: `0 10px 28px ${s.accent}28, 0 0 0 1px ${s.accent}45`,
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={snap}
                  aria-label={`${s.label} — ${s.handle}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full
                             bg-card border border-border
                             text-muted-foreground hover:text-foreground
                             transition-colors duration-200
                             outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <span style={{ color: s.accent }}>
                    <s.Icon size={17} />
                  </span>
                  <span className="text-sm font-medium">{s.handle}</span>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.78 }}
            className="text-center text-muted-foreground text-[0.67rem] tracking-widest uppercase mt-14"
          >
            Malika Degaldoruwa · Software Engineer · Kandy, Sri Lanka
          </motion.p>
        </div>
      </div>
    </section>
  );
};
