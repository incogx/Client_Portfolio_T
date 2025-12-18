import { motion } from 'framer-motion';
import { ExternalLink, FileText, Calendar } from 'lucide-react';

interface PressCardProps {
  title: string;
  source: string;
  date: string;
  image: string;
  pdf: string;
  excerpt: string;
  read_more_link: string;
  index?: number;
}

export default function PressCard({
  title,
  source,
  date,
  image,
  pdf,
  excerpt,
  read_more_link,
  index = 0,
}: PressCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gold/20 group"
    >
      <div className="relative h-64 bg-gradient-to-br from-teal/20 to-gold/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center">
            <p className="font-inter text-charcoal/60 text-sm mb-2">Image Placeholder:</p>
            <p className="font-mono text-xs text-charcoal/40 break-all">{image}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-inter font-semibold text-teal">{source}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-charcoal/60 text-sm font-inter mb-3">
          <Calendar size={16} className="mr-2 text-gold" />
          {formattedDate}
        </div>

        <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 line-clamp-2 group-hover:text-teal transition-colors">
          {title}
        </h3>

        <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-3">
          {read_more_link && (
            <a
              href={read_more_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-teal text-white font-inter text-sm font-semibold rounded-lg hover:bg-teal-dark transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              Read Article
            </a>
          )}
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-ivory text-charcoal font-inter text-sm font-semibold rounded-lg border border-gold/30 hover:bg-gold/10 transition-colors"
            >
              <FileText size={16} className="mr-2" />
              View PDF
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
