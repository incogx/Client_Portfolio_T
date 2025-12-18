// src/pages/Gallery.tsx
import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  const galleryImages = [
    'player-early.jpg',
    'hero-coach.png',
    'talentfc-1.jpg',
    'talentfc-2.jpg',
    'talentfc-3.jpg',
    'press-photo.jpg',
  ];

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
              Photo Gallery
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              A visual journey through the years—from playing days to coaching excellence
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20 text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                Playing Career
              </h3>
              <p className="font-inter text-charcoal/70 text-sm">
                Moments from competitive matches and state championships
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20 text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                Coaching Excellence
              </h3>
              <p className="font-inter text-charcoal/70 text-sm">
                Training sessions and mentoring young athletes
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20 text-center">
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                Talent FC
              </h3>
              <p className="font-inter text-charcoal/70 text-sm">
                Team celebrations, tournaments, and memorable victories
              </p>
            </div>
          </div>
        </motion.div>

        <GalleryGrid images={galleryImages.map((f) => `/media/${f}`)} columns={3} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-inter text-charcoal/60 text-sm mb-4">
            Click on any image to view it in full size
          </p>
        </motion.div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-ivory to-white rounded-xl shadow-lg p-8 md:p-12 border border-gold/20 text-center"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Share Your Moment
            </h3>
            <p className="font-inter text-charcoal/70 leading-relaxed mb-8">
              Have a photo from one of our training sessions or tournaments? We'd love to feature it in our gallery. Get in touch to share your memories.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
