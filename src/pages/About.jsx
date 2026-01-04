/**
 * About Page
 * Story, NGO journey, and gallery section
 * WCAG 2.1 AA compliant
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Globe, Zap, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

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
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionHeader
            title="Our Journey Begins"
            description="Let's See was born from a transformative experience. Our founders visited multiple NGOs dedicated to helping the blind and visually impaired, and what they witnessed changed their perspective forever."
            align="left"
          />

          <div className="space-y-8">
            <motion.article className="prose prose-lg max-w-none" variants={containerVariants}>
              <motion.p
                className="text-xl text-dark-bg mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Let's See was born from a transformative experience. Our founders visited multiple NGOs dedicated to helping the blind and visually impaired, and what they witnessed changed their perspective forever.
              </motion.p>

              <motion.div
                className="bg-primary-light p-8 rounded-2xl border-4 border-primary my-8"
                variants={itemVariants}
                whileHover={{ boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)' }}
              >
                <p className="text-lg text-dark-bg leading-relaxed italic">
                  "In conversations with individuals living with visual impairment, we discovered the immense challenges faced in daily life. But more importantly, we saw the incredible resilience, creativity, and potential of this community."
                </p>
              </motion.div>

              <motion.p
                className="text-xl text-dark-bg mb-6 leading-relaxed"
                variants={itemVariants}
              >
                This sparked an idea: What if we could leverage modern technology to remove barriers and create opportunities? What if assistive technology could be not just functional, but empowering?
              </motion.p>

              <motion.p
                className="text-xl text-dark-bg leading-relaxed"
                variants={itemVariants}
              >
                That question led to Let's See — a platform built with and for the blind community, combining AI, computer vision, and thoughtful design to make the digital world more accessible.
              </motion.p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-bg to-dark-bg">
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
      </section>

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
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((image, index) => (
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
    </main>
  );
}
