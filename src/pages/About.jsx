/**
 * About Page
 * Story, NGO journey, and gallery section
 * WCAG 2.1 AA compliant
 */
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Zap } from 'lucide-react';

export default function About() {
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-bg mb-12"
            variants={itemVariants}
          >
            Our Journey Begins
          </motion.h2>

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
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.3)',
                  }}
                  className="bg-gradient-to-br from-primary-light to-primary p-8 rounded-2xl text-center border-2 border-primary shadow-lg"
                >
                  <Icon className="text-dark-bg mx-auto mb-4" size={40} aria-hidden="true" />
                  <p className="text-4xl font-bold text-dark-bg mb-2">{stat.number}</p>
                  <p className="text-dark-bg font-semibold">{stat.label}</p>
                </motion.div>
              );
            })}
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(252, 184, 83, 0.4)',
                }}
                className="aspect-square bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden group border-2 border-primary shadow-lg"
              >
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <p className="text-white text-2xl font-bold mb-2">📸</p>
                  <p className="text-white text-lg font-semibold">Image {item}</p>
                  <p className="text-white text-sm mt-2 opacity-80">Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.h2
            className="text-4xl font-bold text-dark-bg text-center mb-16"
            variants={itemVariants}
          >
            Our Core <span className="text-primary-dark">Values</span>
          </motion.h2>

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
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border-4 border-primary shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-dark-bg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
