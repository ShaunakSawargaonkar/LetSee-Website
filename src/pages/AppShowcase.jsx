import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  MessageCircle, 
  FileText, 
  Zap, 
  Vibrate, 
  Shield, 
  Radio, 
  Share2, 
  Search, 
  Video, 
  Sparkles,
  Accessibility
} from 'lucide-react';
import { containerVariants, itemVariants } from '../hooks/useAnimations';
import appImage1 from '../assets/app_image1.jpeg';
import appImage2 from '../assets/app_image2.jpeg';
import appImage3 from '../assets/app_image3.jpeg';
import appImage4 from '../assets/app_image4.jpeg';

export default function AppShowcase() {
  const appImages = [appImage1, appImage2, appImage3, appImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [featuresInView, setFeaturesInView] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % appImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [appImages.length]);

  // Ensure features section animates even if already in view on load
  useEffect(() => {
    const checkInView = () => {
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !featuresInView) {
          setFeaturesInView(true);
        }
      }
    };

    // Check immediately and after a short delay
    checkInView();
    const timeout = setTimeout(checkInView, 100);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFeaturesInView(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [featuresInView]);
  const features = [
    { 
      icon: MessageCircle, 
      title: 'Visual Q&A', 
      description: 'Ask any question about your surroundings with real-time AI-powered answers. Get instant insights about what you see.', 
      color: 'from-blue-400 to-blue-600' 
    },
    { 
      icon: FileText, 
      title: 'Text-to-Speech', 
      description: 'Read text out loud from any image, even translated to your native language. Perfect for documents, signs, and messages.', 
      color: 'from-purple-400 to-purple-600' 
    },
    { 
      icon: Search, 
      title: 'Smart Assistant', 
      description: 'Capability to perform web searches and respond to user queries. Get answers to any question, anytime.', 
      color: 'from-cyan-400 to-cyan-600' 
    },
    { 
      icon: Video, 
      title: 'Live Video Analysis', 
      description: 'Ask questions about your surroundings based on live video input. Real-time visual understanding through your camera.', 
      color: 'from-red-400 to-red-600' 
    },
    { 
      icon: Share2, 
      title: 'Share & Ask', 
      description: 'Have questions about what you see on your phone or any image you receive on WhatsApp? Just share it to the app and ask.', 
      color: 'from-teal-400 to-teal-600' 
    },
    { 
      icon: Accessibility, 
      title: 'Blind-First Design', 
      description: 'Simple layout with intuitive TalkBack responses and adjustable speech rate. Every design decision prioritizes the blind and visually impaired community.', 
      color: 'from-emerald-400 to-emerald-600' 
    },
    { 
      icon: Radio, 
      title: 'Voice-Based Interaction',
      description: 'Ask questions and get answers with voice input and output.', 
      color: 'from-orange-400 to-orange-600' 
    },
    { 
      icon: Smartphone, 
      title: 'Intuitive Interface', 
      description: 'Voice-guided navigation with haptic feedback. Quick access buttons for the most useful cases make everyday tasks effortless.', 
      color: 'from-indigo-400 to-indigo-600' 
    },
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      description: 'Lightning-fast processing for real-time feedback. Experience seamless performance with instant results.', 
      color: 'from-yellow-400 to-yellow-600' 
    },
    { 
      icon: Vibrate, 
      title: 'Haptic and Voice Feedback', 
      description: 'Haptic and voice feedback on image capture, voice input, and output. Designed to be highly intuitive for blind users.', 
      color: 'from-pink-400 to-pink-600' 
    },
    { 
      icon: Shield, 
      title: 'Complete Privacy', 
      description: 'No data is saved on our servers. Everything is processed client-side, ensuring your privacy and security.', 
      color: 'from-green-400 to-green-600' 
    },
    { 
      icon: Sparkles, 
      title: 'And Many More', 
      description: 'We\'re constantly adding new features and improvements. Stay tuned for exciting upcoming capabilities.', 
      color: 'from-violet-400 to-violet-600' 
    },
  ];

  return (
    <main id="main-content" className="w-full">
      <section className="bg-gradient-to-br from-dark-bg to-primary-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 0.1 }} transition={{ duration: 1 }} className="absolute inset-0">
          <Smartphone size={400} className="absolute -top-24 -right-24 text-primary" />
        </motion.div>
        <motion.div className="max-w-4xl mx-auto relative z-10" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-4" variants={itemVariants}>Letsee App</motion.h1>
          <motion.p className="text-2xl text-white opacity-90" variants={itemVariants}>Revolutionary assistive technology for the visually impaired</motion.p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          ref={featuresRef}
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
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
            {/* Image Carousel */}
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-xs mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ 
                backgroundColor: '#1A1A1A',
                padding: '0.75rem',
                borderRadius: '2rem',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div className="relative w-full rounded-2xl overflow-hidden" style={{ 
                  maxHeight: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={appImages[currentImageIndex]}
                      alt={`App interface screenshot ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                  </AnimatePresence>
                </div>
                
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {appImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'w-3 h-3 bg-white'
                          : 'w-2 h-2 bg-white opacity-50 hover:opacity-75'
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
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
                  'Advance AI Features',
                  'Voice-first interaction model',
                  'Haptic feedback for confirmation',
                  'High contrast visual elements',
                  'Fully screen reader compatible',
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

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.letsee.letsee"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  marginTop: '2rem',
                  backgroundColor: '#F5A623',
                  color: '#1A1A1A',
                  fontWeight: 'bold',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.125rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FCB853';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F5A623';
                }}
                aria-label="Download the app from Google Play Store"
              >
                Download Now
              </motion.a>
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
                  { tech: 'Google ADK', desc: 'AI-powered Assistant' },
                  { tech: 'Flutter SDK', desc: 'Cross-platform app' },
                  { tech: 'Web TTS APIs', desc: 'Text-to-Speech' },
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
