// src/pages/About.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';

export default function About() {
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
              About U. Thamimunissa
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              A journey of passion, dedication, and unwavering commitment to excellence in football
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Professional Biography
              </h2>
              <div className="space-y-4 text-charcoal/80 font-inter leading-relaxed">
                <p>
                  U. Thamimunissa is a respected football coach and educator from Chennai, Tamil Nadu. Her career
                  began as a talented youth player and progressed to representing Tamil Nadu at the state level.
                  Over the years she transitioned into coaching and physical education, always maintaining a focus on
                  developing young athletes both on and off the field.
                </p>
                <p>
                  As a PT Teacher and later as the founder of Talent FC in 2020, Thamimunissa combined her practical
                  playing experience with structured training methods to create programs that build technical skill,
                  physical fitness, and mental resilience. Her emphasis on discipline, teamwork, and character has
                  directly contributed to the growth of girls' football in Chennai.
                </p>
                <p>
                  Today she mentors players across multiple age groups, preparing many athletes for district and state
                  level competition while fostering a strong community built on respect, hard work, and opportunity.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Early Life & Football Journey
              </h2>
              <div className="space-y-4 text-charcoal/80 font-inter leading-relaxed">
                <p>
                  From an early age, Thamimunissa showed a love for sport and leadership. Growing up in Tamil Nadu,
                  she quickly rose through district competitions and secured a place on the state squad. Those playing
                  years instilled in her the values of discipline, resilience, and teamwork which later defined her
                  coaching approach.
                </p>
                <p>
                  Her university years included captaincy and leadership roles that strengthened her tactical understanding
                  and commitment to athlete development — experiences she continues to draw upon in her work at Talent FC.
                </p>
                <p>
                  Beyond trophies, her career has been marked by a desire to use football as a tool for empowerment,
                  especially for girls who might otherwise lack access to organized sport.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Coaching Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mb-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                    Discipline & Dedication
                  </h3>
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Success comes from consistent effort, structured training, and a long-term commitment to growth.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                    Teamwork & Unity
                  </h3>
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Individual talent grows strongest within a supportive team environment that values collective success.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mb-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                    Character Building
                  </h3>
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Technical training is paired with life skills—discipline, humility, and leadership—that serve players off the pitch too.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gold/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                    Excellence Mindset
                  </h3>
                  <p className="text-charcoal/70 font-inter text-sm leading-relaxed">
                    Strive to improve every day—small gains compound into meaningful progress on match day.
                  </p>
                </div>
              </div>
              <p className="text-charcoal/80 font-inter leading-relaxed">
                Thamimunissa believes football is a powerful vehicle for transformation: technical coaching plus a focus on character prepares athletes for success both in sport and in life.
              </p>
            </motion.section>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="bg-gradient-to-br from-white to-ivory p-8 rounded-xl shadow-lg border border-gold/30 mb-8">
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                  Faith & Values
                </h3>
                <div className="space-y-4 text-charcoal/80 font-inter text-sm leading-relaxed">
                  <p>
                    Her coaching is grounded in values of discipline, respect, and service. She encourages athletes to pursue excellence while remaining humble.
                  </p>
                  <p>
                    Her faith and community focus drive efforts to expand opportunities for girls in sport, creating a safe and supportive environment for learning.
                  </p>
                  <div className="pt-4 border-t border-gold/20">
                    <p className="font-arabic text-base text-center text-gold italic">
                      "Excellence is a journey, not a destination"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal to-teal-dark p-8 rounded-xl shadow-lg text-white">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Explore Her Journey
                </h3>
                <p className="font-inter text-white/90 text-sm leading-relaxed mb-6">
                  Discover the milestones, achievements, and defining moments that shaped her remarkable career.
                </p>
                <Link
                  to="/achievements"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal font-inter font-semibold rounded-lg hover:bg-ivory transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  View Timeline
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
