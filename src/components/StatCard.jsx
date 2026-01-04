import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, number, label }) {
  return (
    <motion.div
      className="bg-primary-light rounded-2xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 border-2 border-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="inline-block mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <Icon size={48} className="text-primary" />
      </motion.div>
      <motion.p className="text-4xl font-bold text-dark-bg mb-2">
        {number}
      </motion.p>
      <motion.p className="text-lg text-dark-bg opacity-80 font-semibold">
        {label}
      </motion.p>
    </motion.div>
  );
}
