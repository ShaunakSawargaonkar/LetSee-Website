import { motion } from 'framer-motion';

export default function Card({ 
  title, 
  description, 
  variant = 'default',
  hoverEffect = false 
}) {
  const variantClass = variant === 'default' 
    ? 'bg-white border-2 border-primary-light' 
    : 'bg-primary-light border-2 border-primary';

  return (
    <motion.div
      className={`p-8 rounded-2xl ${variantClass} transition-all duration-300`}
      whileHover={hoverEffect ? { 
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)',
      } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
    >
      <motion.h3 className="text-2xl font-bold text-dark-bg mb-4">
        {title}
      </motion.h3>
      <motion.p className="text-lg text-dark-bg opacity-80 leading-relaxed">
        {description}
      </motion.p>
    </motion.div>
  );
}
