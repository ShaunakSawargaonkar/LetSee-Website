import { motion } from 'framer-motion';

export default function SectionHeader({ 
  title, 
  highlighted, 
  description, 
  align = 'center' 
}) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      className={`mb-12 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-dark-bg mb-4"
        variants={variants}
      >
        {title} {highlighted && <span className="text-primary">{highlighted}</span>}
      </motion.h2>
      {description && (
        <motion.p
          className="text-xl text-dark-bg opacity-80 max-w-2xl mx-auto"
          variants={variants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
