import { motion } from 'framer-motion';
import { X, Mail, Linkedin } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-dark-bg">Get In Touch</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-dark-bg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">Contact us through any of these channels:</p>

        {/* Email */}
        <motion.a
          href="mailto:director.letsee@gmail.com"
          whileHover={{ x: 5 }}
          className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary hover:bg-primary-light transition-all duration-300 mb-4 cursor-pointer"
        >
          <div className="bg-primary p-3 rounded-lg">
            <Mail size={24} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-dark-bg">Email</p>
            <p className="text-sm text-gray-600">director.letsee@gmail.com</p>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/shaunak-sawargaonkar-64b645166/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary hover:bg-primary-light transition-all duration-300 cursor-pointer"
        >
          <div className="bg-primary p-3 rounded-lg">
            <Linkedin size={24} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-dark-bg">LinkedIn</p>
            <p className="text-sm text-gray-600">Shaunak Sawargaonkar</p>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
