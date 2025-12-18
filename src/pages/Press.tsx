// src/pages/Press.tsx
import { motion } from 'framer-motion';
import PressCard from '../components/PressCard';
import pressData from '../data/press.json';

export default function Press() {
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
              Press & Media
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              Recognition, features, and stories from leading publications highlighting the impact and achievements
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
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
            Featured Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
          <p className="font-inter text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Explore the stories that chronicle U. Thamimunissa's journey, her impact on women's football, and the success of Talent FC in empowering young athletes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressData.map((press, index) => (
            <PressCard
              key={index}
              title={press.title}
              source={press.source}
              date={press.date}
              image={press.image}
              pdf={press.pdf}
              excerpt={press.excerpt}
              read_more_link={press.read_more_link}
              index={index}
            />
          ))}
        </div>

        {pressData.length === 0 && (
          <div className="text-center py-20">
            <p className="font-inter text-charcoal/60 text-lg">
              No press articles available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-white to-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gold/20"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-4 text-center">
              Media Inquiries
            </h3>
            <p className="font-inter text-charcoal/70 text-center leading-relaxed mb-8">
              For press inquiries, interviews, or media collaborations, please reach out through our contact page.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact for Media
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
