import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Award, ExternalLink } from 'lucide-react';

interface Achievement {
  year: string;
  title: string;
  role: string;
  result: string;
  organizer: string;
  location: string;
  description: string;
  media: string[];
  external_link: string;
}

interface TimelineVerticalProps {
  achievements: Achievement[];
}

export default function TimelineVertical({ achievements }: TimelineVerticalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal via-gold to-teal hidden md:block"></div>

      {achievements.map((achievement, index) => {
        const isLeft = index % 2 === 0;
        const isExpanded = expandedIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-16 md:mb-24 ${
              isLeft ? 'md:pr-1/2' : 'md:pl-1/2'
            }`}
          >
            <div className={`md:flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gold/20">
                  <div className="bg-gradient-to-r from-teal to-teal-light p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-playfair text-3xl font-bold text-white">
                        {achievement.year}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-inter font-medium">
                        {achievement.role}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm font-inter">
                      <Award size={16} className="mr-2" />
                      {achievement.result}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start text-charcoal/70 text-sm font-inter mb-4">
                      <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gold" />
                      <div>
                        <p className="font-semibold text-charcoal">{achievement.organizer}</p>
                        <p>{achievement.location}</p>
                      </div>
                    </div>

                    <p className="text-charcoal/80 font-inter leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-gold/20 pt-4 mt-4">
                          <h4 className="font-inter font-semibold text-charcoal mb-3 text-sm">
                            Media & Documents
                          </h4>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {achievement.media.map((mediaItem, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-ivory rounded border border-gold/20 text-xs font-mono text-charcoal/60 break-all"
                              >
                                {mediaItem}
                              </div>
                            ))}
                          </div>
                          {achievement.external_link && (
                            <a
                              href={achievement.external_link}
                              className="inline-flex items-center text-teal hover:text-teal-dark font-inter text-sm font-medium"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              View External Link
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}

                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 flex items-center text-teal hover:text-teal-dark font-inter text-sm font-medium transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={18} className="mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={18} className="mr-1" />
                          View Details
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-ivory shadow-lg hidden md:block"></div>
          </motion.div>
        );
      })}
    </div>
  );
}
