/**
 * Donate Page
 * Information about donations and support
 * WCAG 2.1 AA compliant
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Globe, TrendingUp, Award } from 'lucide-react';
import ContactModal from '../components/ContactModal';

export default function Donate() {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <main id="main-content" className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light via-primary to-primary-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <Heart size={400} className="absolute -top-24 -right-24 text-white" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Support Our <span className="text-white opacity-90">Mission</span>
          </motion.h1>
          <motion.p
            className="text-2xl text-white opacity-90"
            variants={itemVariants}
          >
            Help us create a more accessible world for the visually impaired
          </motion.p>
        </motion.div>
      </section>

      {/* Impact Section */}
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
            Your <span className="text-primary-dark">Impact</span>
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Every donation directly transforms lives. See the difference you can make.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { icon: Heart, title: 'Lives Changed', stat: '10,000+', color: 'from-red-400 to-red-600' },
              { icon: Globe, title: 'Global Reach', stat: '15 Countries', color: 'from-blue-400 to-blue-600' },
              { icon: Users, title: 'Community', stat: '50,000+', color: 'from-purple-400 to-purple-600' },
              { icon: Target, title: 'Our Goal', stat: '1M by 2025', color: 'from-green-400 to-green-600' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -10 }}
                  className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-3 border-primary hover:border-primary-dark transition-all duration-300 shadow-md"
                >
                  <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl w-fit mx-auto mb-4`}>
                    <Icon size={40} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="text-4xl font-bold text-primary-dark mb-2">
                    {item.stat}
                  </p>
                  <p className="text-dark-bg font-semibold text-lg">
                    {item.title}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* How We Use Donations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light to-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-dark-bg mb-4 text-center"
            variants={itemVariants}
          >
            How Your Donation <span className="text-primary-dark">Helps</span>
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            100% transparency: Here's exactly where your contribution goes
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: TrendingUp,
                title: 'App Development',
                description: 'Funding cutting-edge AI and assistive technology features',
                percentage: '35%',
              },
              {
                icon: Award,
                title: 'Research',
                description: 'Supporting studies on accessibility and user experience',
                percentage: '25%',
              },
              {
                icon: Users,
                title: 'Community Programs',
                description: 'Educational workshops and training initiatives',
                percentage: '25%',
              },
              {
                icon: Globe,
                title: 'Infrastructure',
                description: 'Maintaining servers and ensuring reliability',
                percentage: '15%',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.3)' }}
                  className="bg-white p-8 rounded-2xl border-3 border-primary hover:border-primary-dark shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary-light p-4 rounded-xl">
                      <Icon size={32} className="text-primary-dark" aria-hidden="true" />
                    </div>
                    <span className="text-3xl font-bold text-primary-dark">{item.percentage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-bg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dark-bg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Ways to <span className="text-primary-dark">Contribute</span>
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose the way that works best for you
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: 'One-Time Donation',
                description: 'Make a single contribution to support our immediate projects.',
                icon: '💰',
              },
              {
                title: 'Monthly Support',
                description: 'Become a sustaining member with a recurring monthly donation.',
                icon: '📅',
              },
              {
                title: 'Corporate Partnership',
                description: 'Partner with us to bring technology to your corporate social responsibility.',
                icon: '🤝',
              },
              {
                title: 'Volunteer',
                description: 'Donate your time and expertise to support our mission.',
                icon: '🙌',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(252, 184, 83, 0.3)',
                }}
                className="bg-gradient-to-br from-primary-light to-white p-8 rounded-2xl border-3 border-primary hover:border-primary-dark transition-all duration-300 shadow-md"
              >
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-2xl font-bold text-dark-bg mb-4">
                  {item.title}
                </h3>
                <p className="text-dark-bg mb-6 leading-relaxed">
                  {item.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-dark text-white font-bold py-3 px-4 rounded-xl hover:bg-primary transition-colors duration-300 focus-visible:outline-offset-2"
                  
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Heart size={300} className="absolute bottom-0 right-0 text-white opacity-10" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to Make a Difference?
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-10 max-w-2xl mx-auto opacity-90"
            variants={itemVariants}
          >
            Join thousands of supporters experiencing the impact of creating real accessibility for the blind and visually impaired.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary-dark font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              aria-label="Donate now"
            >
              Donate Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-3 border-white text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-white hover:text-primary-dark transition-all duration-300"
              variants={itemVariants}
              onClick={() => setShowContact(true)}
              aria-label="Contact us"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </main>
  );
}