import { motion } from "motion/react";
export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </section>
  );
}
