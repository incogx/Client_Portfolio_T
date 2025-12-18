// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTABtn {
  text: string;
  link: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: CTABtn;
  ctaSecondary?: CTABtn;
  /**
   * Provide a public path to an image (e.g. "/media/hero-coach.png").
   * If omitted, component renders a graceful placeholder box with the provided label.
   */
  imageSrc?: string;
  imageAlt?: string;
  /**
   * Optional small caption under the image (e.g. "Photo: Times of India / 2018")
   */
  imageCaption?: string;
}

/**
 * Hero component — displays title, subtitle, CTAs and hero image (or placeholder).
 * Paste this file to: src/components/Hero.tsx
 */
export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt = "Hero image",
  imageCaption,
}: HeroProps): JSX.Element {
  return (
    <section
      aria-label="Hero"
      className="relative bg-gradient-to-br from-ivory via-teal/5 to-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              {title}
            </h1>

            <p className="font-inter text-lg md:text-xl text-charcoal/70 leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  {ctaPrimary.text}
                  <ArrowRight className="ml-2 -mr-1 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              )}

              {ctaSecondary && (
                <a
                  href={ctaSecondary.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal font-inter font-semibold rounded-lg border-2 border-teal hover:bg-teal hover:text-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-100"
                >
                  {ctaSecondary.text}
                </a>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-sm">
                <div className="text-xs text-teal-600">Role</div>
                <div className="font-semibold">PT Teacher & Head Coach</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-sm">
                <div className="text-xs text-teal-600">Years Active</div>
                <div className="font-semibold">1997 — Present</div>
              </div>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {imageSrc ? (
                <figure className="aspect-[4/5] bg-gray-100 w-full h-full">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                  {imageCaption && (
                    <figcaption className="text-xs text-slate-500 p-3 bg-white/70">
                      {imageCaption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div className="aspect-[4/5] bg-gradient-to-br from-teal/20 to-gold/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="font-inter text-charcoal/60 text-sm mb-2">Image placeholder</p>
                    <p className="font-mono text-xs text-charcoal/40 break-all">{imageAlt}</p>
                  </div>
                </div>
              )}
            </div>

            {/* subtle decorative blobs */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-teal/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
