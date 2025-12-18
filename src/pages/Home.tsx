// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { Trophy, Award, Users, ArrowRight } from "lucide-react";
import pressData from "../data/press.json";

export default function Home() {
  const highlights = [
    {
      icon: Trophy,
      title: "Former State Player",
      description: "Represented Tamil Nadu in multiple interstate championships",
    },
    {
      icon: Award,
      title: "PT Teacher",
      description: "Educating and inspiring young athletes through physical education",
    },
    {
      icon: Users,
      title: "Founder of Talent FC",
      description: "Building champions on and off the field since 2020",
    },
  ];

  const featuredPress = pressData.slice(0, 2);

  return (
    <div className="min-h-screen bg-ivory">
      <Hero
        title="U. Thamimunissa"
        subtitle="Coach. Leader. Game-Changer. Empowering girls through football, discipline, and confidence."
        ctaPrimary={{ text: "View Her Journey", link: "/about" }}
        ctaSecondary={{ text: "Visit Talent FC", link: "/talent-fc" }}
        imageSrc="/media/hero-coach.png"
        imageAlt="U. Thamimunissa coaching"
        imageCaption="Thamimunissa coaching a girls' training session — Chennai"
      />

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-gradient-to-br from-ivory to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold/20 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                    {highlight.title}
                  </h3>
                  <p className="font-inter text-charcoal/70 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRESS */}
      <section className="py-20 bg-gradient-to-br from-ivory via-teal/5 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Featured Press
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal to-gold mx-auto mb-6" />
            <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
              Recognition and stories from leading publications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPress.map((press, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gold/20"
              >
                <div className="h-56 bg-gradient-to-br from-teal/20 to-gold/20 flex items-center justify-center p-6">
                  {press.image ? (
                    <img
                      src={`/media/${press.image}`}
                      alt={press.title || press.source || "press image"}
                      className="w-full h-full object-cover rounded"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="font-inter text-charcoal/60 text-sm mb-2">
                        Image Placeholder:
                      </p>
                      <p className="font-mono text-xs text-charcoal/40 break-all">
                        {press.image || "no-image"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-inter font-semibold rounded-full mb-3">
                    {press.source}
                  </span>

                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 line-clamp-2">
                    {press.title}
                  </h3>

                  <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {press.excerpt}
                  </p>

                  <a
                    href={press.read_more_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-dark font-inter font-semibold text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/press"
              className="inline-flex items-center px-8 py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Press Coverage
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* TALENT FC PROMO */}
      <section className="py-20 bg-gradient-to-br from-teal to-teal-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center h-80">
                <div className="text-center">
                  <p className="font-inter text-white/80 text-sm mb-2">Logo</p>
                  <img
                    src="/media/talentfc-logo.png"
                    alt="Talent FC logo"
                    className="mx-auto max-h-24 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Talent FC Chennai
              </h2>
              <p className="font-inter text-white/90 text-lg leading-relaxed mb-8">
                Building champions on and off the field through elite coaching,
                discipline, and teamwork. Join our growing community of young
                athletes.
              </p>
              <Link
                to="/talent-fc"
                className="inline-flex items-center px-8 py-4 bg-white text-teal font-inter font-semibold rounded-lg hover:bg-ivory transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Talent FC
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
