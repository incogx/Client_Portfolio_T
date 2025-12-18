// src/pages/TalentFC.tsx
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import talentFCData from '../data/talentfc.json';

export default function TalentFC() {
  const { clubInfo, programs, achievements, gallery } = talentFCData;

  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 max-w-sm mx-auto mb-8">
              <div className="text-center">
                <p className="font-inter text-white/80 text-sm mb-2">Logo Placeholder:</p>
                <p className="font-mono text-xs text-white/60 break-all">{clubInfo.logo}</p>
              </div>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              {clubInfo.name}
            </h1>
            <p className="font-inter text-xl text-white/90 mb-2">
              Founded by Coach {clubInfo.founder}
            </p>
            <p className="font-inter text-lg text-white/80">
              Established {clubInfo.founded} • {clubInfo.location}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              {clubInfo.tagline}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Our Mission
              </h3>
              <p className="font-inter text-lg text-charcoal/80 leading-relaxed mb-6">
                {clubInfo.mission}
              </p>
              <h3 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Our Vision
              </h3>
              <p className="font-inter text-lg text-charcoal/80 leading-relaxed">
                {clubInfo.vision}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-ivory to-white p-8 rounded-xl shadow-lg border border-gold/20"
            >
              <h4 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                Club Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Trophy className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-inter text-charcoal/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-ivory to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Training Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
            <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
              Structured programs designed for every skill level and age group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gold/20"
              >
                <div className="bg-gradient-to-r from-teal to-teal-light p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {program.name}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm font-inter">
                    <Users size={16} className="mr-2" />
                    {program.age_group}
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-inter text-charcoal/80 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <Calendar size={18} className="text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-inter font-semibold text-charcoal">Schedule</p>
                        <p className="font-inter text-charcoal/70">{program.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock size={18} className="text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-inter font-semibold text-charcoal">Days</p>
                        <p className="font-inter text-charcoal/70">{program.days}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
              <div className="flex-1 text-center md:text-left">
                <p className="inline-flex items-center text-sm font-semibold text-emerald-100 uppercase tracking-wide mb-3">
                  <span className="w-2 h-2 rounded-full bg-gold mr-2"></span>
                  New Residential Camp
                </p>
                <h3 className="font-playfair text-3xl font-bold text-white mb-3">Chengalpat Football Camp</h3>
                <p className="font-inter text-white/85 mb-4">
                  4-day residential camp focused on discipline, fitness, and match-ready skills. Phone-free environment, inclusive meals, and guided study time.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm font-inter">
                  <div className="flex items-center gap-2"><Calendar size={16} /> Thu - Sun</div>
                  <div className="flex items-center gap-2"><Clock size={16} /> Full-day schedule</div>
                  <div className="flex items-center gap-2"><Users size={16} /> Boys 5-18</div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <Link
                  to="/talent-fc/camp"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-white text-emerald-700 font-inter font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Camp Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
            <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
              Moments from training sessions, tournaments, and team celebrations
            </p>
          </motion.div>

          <GalleryGrid images={gallery.map((f: string) => `/media/${f}`)} columns={3} />
        </div>
      </div>

      <div className="bg-gradient-to-br from-ivory to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Connect With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6"></div>
            <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
              Follow our journey and stay updated with latest news, highlights, and training tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gold/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <Youtube className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal">
                    YouTube Channel
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    Watch training videos & highlights
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal/10 to-gold/10 p-6 rounded-lg mb-6">
                <p className="font-inter text-charcoal/60 text-sm mb-2">Channel ID:</p>
                <p className="font-mono text-xs text-charcoal/40 break-all">
                  {clubInfo.youtube_channel}
                </p>
              </div>
              <a
                href={`https://www.youtube.com/channel/${clubInfo.youtube_channel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-500 text-white font-inter font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                Visit Channel
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gold/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal">Instagram</h3>
                  <p className="font-inter text-charcoal/60 text-sm">
                    Daily updates & stories
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal/10 to-gold/10 p-6 rounded-lg mb-6">
                <p className="font-inter text-charcoal/60 text-sm mb-2">Instagram Link:</p>
                <p className="font-mono text-xs text-charcoal/40 break-all">
                  {clubInfo.instagram}
                </p>
              </div>
              <a
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-inter font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors"
              >
                Follow Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal to-teal-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Talent FC?
            </h2>
            <p className="font-inter text-lg text-white/90 leading-relaxed mb-8">
              Start your journey with Chennai's premier football training academy. Whether you're a beginner or an experienced player, we have a program for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal font-inter font-semibold rounded-lg hover:bg-ivory transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Coaching Session
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
