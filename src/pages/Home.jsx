import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb, Shield, Zap, Heart } from 'lucide-react';
import { containerVariants, itemVariants } from '../hooks/useAnimations';
import mobileAppPromo from '../assets/mobile_app_promo.jpg';
import logo from '../assets/logo_color.png';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Community First',
      description: 'Built by and for the visually impaired community',
    },
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Dedicated to creating real-world impact',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge AI and assistive technology',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Privacy and data protection guaranteed',
    },
  ];

  return (
    <main id="main-content" className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light flex items-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full opacity-20"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-dark rounded-full opacity-20"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-20 w-full">
          {/* Logo Visual Element at Top - Centered */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-8 md:mb-18 relative z-10"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl px-6 py-4 md:px-8 md:py-6 flex items-center gap-4 md:gap-6">
                <motion.img
                  src={logo}
                  alt="Letsee Logo"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-40 lg:h-40 flex-shrink-0"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Letsee</p>
                  <p className="text-white text-sm md:text-base lg:text-lg mt-1 opacity-90">Your Vision, Our Mission</p>
                </div>
              </div>
            </motion.div>
          </motion.div> */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-bg mb-6 leading-tight"
                variants={itemVariants}
              >
                Empowering Vision Through <span className="text-primary-dark">Technology</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-dark-bg mb-8 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                Letsee is dedicated to creating innovative assistive technology that helps the blind and visually impaired navigate and experience the world with confidence and independence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-xl"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(245, 166, 35, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg flex items-center gap-2 justify-center shadow-lg"
                  style={{ backgroundColor: '#F5A623' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#FCB853'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F5A623'}
                  onClick={() => navigate('/about')}
                  aria-label="Learn more about our app"
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(245, 166, 35, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
                  style={{ borderWidth: '3px', borderColor: '#F5A623', color: '#F5A623' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#FDD89B'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.letsee.letsee', '_blank')}
                  aria-label="Download the Letsee app"
                >
                  Download App
                </motion.button>
              </motion.div>

              {/* Stats */}
              {/* <motion.div
                className="grid grid-cols-3 gap-6 mt-12 max-w-xl"
                variants={itemVariants}
              >
                {[
                  { number: '50K+', label: 'Users' },
                  { number: '15+', label: 'Countries' },
                  { number: '10K+', label: 'Lives Changed' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white bg-opacity-60 backdrop-blur-sm p-4 rounded-xl" style={{ borderWidth: '2px', borderColor: '#FCB853' }}>
                    <p className="text-3xl font-bold" style={{ color: '#F5A623' }}>{stat.number}</p>
                    <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>{stat.label}</p>
                  </div>
                ))}
              </motion.div> */}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <motion.div
                className="relative w-full max-w-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <motion.img
                  src={mobileAppPromo}
                  alt="Letsee Mobile App Promotional Image"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-bg mb-6 text-center"
            variants={itemVariants}
          >
            Why Choose <span className="text-primary-dark">Letsee</span>?
          </motion.h2>

          <motion.p
            className="text-xl text-dark-bg text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We believe in creating technology that truly makes a difference in people's lives.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.3)',
                  }}
                  className="p-8 rounded-2xl transition-all duration-300 shadow-md"
                  style={{ background: 'linear-gradient(to bottom right, #FDD89B, #FFFFFF)', borderWidth: '2px', borderColor: '#FCB853' }}
                  onMouseEnter={(e) => e.style.borderColor = '#F5A623'}
                  onMouseLeave={(e) => e.style.borderColor = '#FCB853'}
                >
                  <Icon size={48} className="mb-4" style={{ color: '#F5A623' }} aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#1A1A1A' }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-bg to-dark-bg relative overflow-hidden">
        {/* Background Decoration */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Heart size={200} className="absolute top-0 right-0 text-primary" />
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Our <span style={{ color: '#FCB853' }}>Mission</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-200 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                At Letsee, we believe that vision impairment should not limit anyone's ability to explore, learn, and thrive. Our mission is to develop cutting-edge assistive technology that bridges the gap between the digital and physical world.
              </motion.p>

              <motion.p
                className="text-xl text-gray-200 leading-relaxed mb-8"
                variants={itemVariants}
              >
                Through our flagship app and ongoing innovation, we're committed to creating a more inclusive world where everyone can access information and navigate their environment with confidence and independence.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6"
                variants={containerVariants}
              >
                {[
                  { icon: Zap, text: 'Fast' },
                  { icon: Shield, text: 'Secure' },
                  { icon: Users, text: 'Community' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 px-6 py-4 rounded-full"
                      style={{ backgroundColor: 'rgba(252, 184, 83, 0.2)', borderWidth: '2px', borderColor: '#FCB853' }}
                    >
                      <Icon size={24} style={{ color: '#FCB853' }} />
                      <span className="text-gray-700 font-semibold">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <motion.div
                className="relative w-64 h-64 md:w-96 md:h-96"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.img
                      src={logo}
                      alt="Letsee Logo"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-32 h-32 mb-4 mx-auto"
                    />
                    <p className="text-white text-2xl font-bold">Letsee</p>
                    <p className="text-white text-sm mt-2">Your Vision, Our Mission</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to right, #FDD89B, #FCB853, #F5A623)' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to See the Difference?
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of users experiencing independence and confidence with Letsee.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="font-bold py-4 px-10 rounded-xl text-lg shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF', color: '#F5A623' }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
              variants={itemVariants}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.letsee.letsee', '_blank')}
              aria-label="Get started with Letsee"
            >
              Get Started Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 text-white"
              style={{ backgroundColor: 'transparent', borderWidth: '3px', borderColor: '#FFFFFF' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#F5A623'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#FFFFFF'; }}
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
