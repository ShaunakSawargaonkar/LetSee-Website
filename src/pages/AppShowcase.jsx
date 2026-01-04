import { motion } from 'framer-motion';
import { Smartphone, Eye, Zap, Shield, Radio, Volume2 } from 'lucide-react';
import { containerVariants, itemVariants } from '../hooks/useAnimations';

export default function AppShowcase() {
  const features = [
    { icon: Eye, title: 'Visual Recognition', description: 'AI-powered image recognition in real-time.', color: 'from-blue-400 to-blue-600' },
    { icon: Smartphone, title: 'Intuitive Interface', description: 'Voice-guided navigation with haptic feedback.', color: 'from-purple-400 to-purple-600' },
    { icon: Zap, title: 'Fast & Responsive', description: 'Lightning-fast processing for real-time feedback.', color: 'from-yellow-400 to-yellow-600' },
    { icon: Shield, title: 'Privacy First', description: 'Encrypted and secure data protection.', color: 'from-green-400 to-green-600' },
    { icon: Volume2, title: 'Voice Control', description: 'Complete hands-free operation.', color: 'from-pink-400 to-pink-600' },
    { icon: Radio, title: 'Offline Support', description: 'Core features work without internet.', color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <main id="main-content" className="w-full">
      <section className="bg-gradient-to-br from-dark-bg to-primary-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.1 }} transition={{ duration: 1 }} className="absolute inset-0">
          <Smartphone size={400} className="absolute -top-24 -right-24 text-primary" />
        </motion.div>
        <motion.div className="max-w-4xl mx-auto relative z-10" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-4" variants={itemVariants}>Let's See App</motion.h1>
          <motion.p className="text-2xl text-white opacity-90" variants={itemVariants}>Revolutionary assistive technology for the visually impaired</motion.p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-bg mb-4 text-center"
            variants={itemVariants}
          >
            Key <span className="text-primary-dark">Features</span>
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Powerful features designed with accessibility at the core
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    boxShadow: '0 25px 50px -12px rgba(252, 184, 83, 0.3)',
                  }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-3 border-primary hover:border-primary-dark transition-all duration-300 shadow-md"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl w-fit mb-4`}>
                    <Icon size={32} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-bg mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-dark-bg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* App Mockup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light to-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-bg mb-4 text-center"
            variants={itemVariants}
          >
            App Interface Preview
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Designed for accessibility and ease of use
          </motion.p>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            {/* Mockup */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 flex items-center justify-center min-h-96 shadow-2xl"
            >
              <motion.div
                className="text-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Smartphone size={80} className="text-white mx-auto mb-4" />
                <p className="text-white text-2xl font-semibold mb-2">App Mockup</p>
                <p className="text-white opacity-80">Interactive Demo Available Soon</p>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div variants={containerVariants}>
              <motion.h3
                className="text-3xl font-bold text-dark-bg mb-8"
                variants={itemVariants}
              >
                Designed for <span className="text-primary-dark">Accessibility</span>
              </motion.h3>

              <motion.ul className="space-y-4" variants={containerVariants}>
                {[
                  'Voice-first interaction model',
                  'Haptic feedback for confirmation',
                  'High contrast visual elements',
                  'Fully screen reader compatible',
                  'Offline functionality support',
                  'Customizable font sizes & colors',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <span className="text-primary-dark font-bold text-2xl flex-shrink-0 pt-1">✓</span>
                    <span className="text-lg text-dark-bg">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 bg-primary-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-primary transition-all duration-300 text-lg shadow-lg focus-visible:outline-offset-2"
                aria-label="Download the app"
              >
                Download Now
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4 text-center"
            variants={itemVariants}
          >
            Technical <span className="text-primary">Specifications</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Built with cutting-edge technology and accessibility standards
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-light to-primary p-8 rounded-2xl border-3 border-primary"
            >
              <h3 className="text-2xl font-bold text-dark-bg mb-6">
                Technology Stack
              </h3>
              <ul className="space-y-4">
                {[
                  { tech: 'TensorFlow Lite', desc: 'On-device ML models' },
                  { tech: 'React Native', desc: 'Cross-platform app' },
                  { tech: 'Web Speech API', desc: 'Voice interaction' },
                  { tech: 'Cloud Vision', desc: 'Advanced image analysis' },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="text-dark-bg"
                  >
                    <p className="font-bold text-lg">{item.tech}</p>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-dark to-primary p-8 rounded-2xl border-3 border-primary"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Accessibility Standards
              </h3>
              <ul className="space-y-4">
                {[
                  { standard: 'WCAG 2.1 Level AA', status: 'Certified' },
                  { standard: 'VoiceOver (iOS)', status: 'Optimized' },
                  { standard: 'TalkBack (Android)', status: 'Optimized' },
                  { standard: 'ARIA Labels', status: 'Complete' },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="text-white"
                  >
                    <p className="font-bold text-lg">{item.standard}</p>
                    <p className="text-sm opacity-80">{item.status}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
