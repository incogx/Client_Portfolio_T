// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get in Touch
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about coaching, Talent FC, or want to schedule a session? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gold/20">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
                >
                  <p className="font-inter text-sm">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter font-medium text-charcoal mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all font-inter"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter font-medium text-charcoal mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all font-inter"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-inter font-medium text-charcoal mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all font-inter"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter font-medium text-charcoal mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all font-inter resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gold/20">
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-charcoal mb-1">Email</h4>
                    <p className="font-inter text-charcoal/70 text-sm">
                      contact@talentfc.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-charcoal mb-1">Phone</h4>
                    <p className="font-inter text-charcoal/70 text-sm">
                      +91 9791351655
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-charcoal mb-1">Location</h4>
                    <p className="font-inter text-charcoal/70 text-sm">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal to-teal-dark rounded-xl shadow-lg p-8 text-white">
              <h3 className="font-playfair text-xl font-bold mb-4">
                Book a Coaching Session
              </h3>
              <p className="font-inter text-white/90 text-sm leading-relaxed mb-6">
                Interested in personalized training or group sessions with Talent FC? Reach out to schedule your first session.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-teal font-inter font-semibold rounded-lg hover:bg-ivory transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold/20">
            <div className="aspect-[16/9] bg-gradient-to-br from-teal/20 to-gold/20 flex items-center justify-center p-12">
              <div className="text-center">
                <MapPin size={48} className="text-charcoal/40 mx-auto mb-4" />
                <p className="font-inter text-charcoal/60 text-lg mb-2">
                  Map Placeholder
                </p>
                <p className="font-inter text-charcoal/40 text-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
