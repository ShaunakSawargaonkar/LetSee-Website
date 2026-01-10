/**
 * About Page
 * Story, NGO journey, and gallery section
 * WCAG 2.1 AA compliant
 */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';
import gallery9 from '../assets/gallery9.jpeg';



export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [storyInView, setStoryInView] = useState(false);
  const storyRef = useRef(null);

  // Ensure story section animates even if already in view on load
  useEffect(() => {
    const checkInView = () => {
      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !storyInView) {
          setStoryInView(true);
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
            setStoryInView(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [storyInView]);

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
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-light via-primary to-primary-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Heart size={300} className="absolute -top-24 -right-24 text-white opacity-10" />
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
            Our Story
          </motion.h1>
          <motion.p
            className="text-2xl text-white opacity-90"
            variants={itemVariants}
          >
            Inspired by compassion, driven by innovation
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          ref={storyRef}
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={containerVariants}
        >
          <SectionHeader
            title="Our Journey Begins"
            description=""
            align="left"
          />

          <div className="space-y-12">
            <motion.article className="prose prose-lg max-w-none" variants={containerVariants}>
              <motion.p
                className="text-xl text-dark-bg mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Letsee was born from a deeply personal experience. One of our founders witnessed his parent face late-age blindness due to a medical condition. Seeing the daily struggles firsthand and working in the technology sector, he recognized an opportunity to make a meaningful difference. Drawing on his technical expertise, he quickly developed an initial solution to address the challenges his family was experiencing.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row gap-8 items-center mb-8"
                variants={itemVariants}
              >
                <div className="flex-1">
                  <p className="text-xl text-dark-bg leading-relaxed">
                    Recognizing the potential impact, we took our application to <a href="https://maps.app.goo.gl/d8dbmJoLsePYJUUr6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">RR Baheti Vocational Training Center for the Blind</a> in Aurangabad, where we launched it free of charge to gather real-world feedback. Through direct engagement with students and faculty, we witnessed firsthand the immense challenges faced by individuals with visual impairments. More significantly, we observed their extraordinary resilience, creativity, and determination. Working collaboratively with the school community, we iterated on the application based on their feedback, refining features and improving usability. The positive response validated our approach and demonstrated the tangible value of our solution.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-[500px]">
                  <motion.div
                    className="rounded-2xl overflow-hidden border-2 border-primary shadow-lg"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)',
                    }}
                  >
                    <img
                      src={gallery1}
                      alt="RR Baheti Vocational Training Center for the Blind engagement"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8"
                variants={itemVariants}
              >
                <div className="md:col-span-5 md:col-start-1 flex justify-start">
                  <motion.div
                    className="rounded-2xl overflow-hidden border-2 border-primary shadow-lg w-full max-w-[350px]"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)',
                    }}
                  >
                    <img
                      src={gallery5}
                      alt="Taramati Bafna Blind School engagement"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="text-xl text-dark-bg leading-relaxed">
                    With a refined application that had been tested and iterated upon at one school, we sought to validate our solution in a different environment. We expanded our reach to <a href="https://maps.app.goo.gl/3jD2tYcqSAwPPw2o8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Taramati Bafna Blind School</a>, another institution in the vicinity. We conducted presentations, demonstrated the application's capabilities, and distributed it to students and staff. The school's leadership was impressed with our technology, and we received valuable feedback that further informed our development process.
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-xl text-dark-bg leading-relaxed mb-8"
                variants={itemVariants}
              >
                After multiple iterations and validation across different educational institutions, we launched our application on the Google Play Store, making it accessible to a broader user base. We have engaged with Blind Associations at both the city level in Aurangabad and the state level in Maharashtra, presenting our solution and building strategic partnerships. Our current focus is on expanding application usage across Maharashtra, with plans for broader state-wide deployment. We believe this technology has the potential to positively impact countless lives, and we are committed to ensuring it remains accessible to everyone who can benefit from it.
              </motion.p>

              <motion.div
                className="flex justify-center mt-10 mb-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(245, 166, 35, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/app-showcase"
                    className="inline-block text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center"
                    style={{ backgroundColor: '#F5A623' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#FCB853'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#F5A623'}
                  >
                    About the App
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light to-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionHeader
            title="Our Core"
            highlighted="Values"
            description=""
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: 'Accessibility',
                description: 'Making technology truly accessible to everyone, regardless of ability.',
              },
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries to create better solutions.',
              },
              {
                title: 'Inclusion',
                description: 'Building with the community, not for them.',
              },
            ].map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
                variant="default"
                hoverEffect={true}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats - Commented out as we do not have real impact data yet */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-bg to-dark-bg">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-white text-center mb-16"
            variants={itemVariants}
          >
            Our <span className="text-primary">Impact</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { icon: Heart, number: '50K+', label: 'Users Impacted' },
              { icon: Users, number: '15+', label: 'Countries' },
              { icon: Globe, number: '10K+', label: 'Lives Changed' },
              { icon: Zap, number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* Gallery Section */}
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
            Gallery
          </motion.h2>
          <motion.p
            className="text-lg text-dark-bg mb-12 text-center max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Photos and videos from our NGO visits. These images represent the inspiring individuals and organizations we've partnered with.
          </motion.p>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9].map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)',
                }}
                className="aspect-square rounded-2xl overflow-hidden group border-2 border-primary shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Expanded gallery"
                className="w-full h-full object-contain rounded-2xl"
              />
              <motion.button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} className="text-dark-bg" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
