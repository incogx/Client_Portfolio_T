// src/pages/Achievements.tsx
import { motion } from 'framer-motion';
import TimelineVertical from '../components/TimelineVertical';
import achievementsData from '../data/achievements.json';

export default function Achievements() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Career Timeline
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              A journey of dedication, perseverance, and triumph spanning decades of excellence in football
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="font-inter text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
              From her early days as a promising young player to founding Talent FC and shaping the next generation of athletes, this timeline chronicles the milestones that define U. Thamimunissa's remarkable career.
            </p>
          </motion.div>
        </div>
      </div>

      <TimelineVertical achievements={achievementsData} />

      <div className="bg-gradient-to-br from-ivory to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
              The Journey Continues
            </h2>
            <p className="font-inter text-lg text-charcoal/70 leading-relaxed mb-8">
              With each passing year, new chapters are written, new records are set, and more young athletes are inspired to pursue their dreams through football.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/talent-fc"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Talent FC
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal font-inter font-semibold rounded-lg border-2 border-teal hover:bg-teal hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
