import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <div className="bg-offwhite pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="font-display text-5xl md:text-6xl text-navy mb-4">
            
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            
            Whether you have a question about our products, need help with an
            order, or want to discuss wholesale opportunities, we're here for
            you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="space-y-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-display text-2xl text-blue mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-green mt-1" size={24} />
                  <div>
                    <p className="font-bold text-navy font-body">Email Us</p>
                    <p className="text-gray-600 font-body">
                      support@hangzest.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-green mt-1" size={24} />
                  <div>
                    <p className="font-bold text-navy font-body">Call Us</p>
                    <p className="text-gray-600 font-body">1-800-HANGZEST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-green mt-1" size={24} />
                  <div>
                    <p className="font-bold text-navy font-body">
                      Response Time
                    </p>
                    <p className="text-gray-600 font-body">
                      We aim to respond to all inquiries within 24 hours during
                      business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-green mt-1" size={24} />
                  <div>
                    <p className="font-bold text-navy font-body">
                      Headquarters
                    </p>
                    <p className="text-gray-600 font-body">
                      123 Hydration Way
                      <br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.3
            }}>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              {isSubmitted ?
              <div className="text-center py-12 space-y-4">
                  <motion.div
                  initial={{
                    scale: 0
                  }}
                  animate={{
                    scale: 1
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/10 text-green mb-4">
                  
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="font-display text-3xl text-navy">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 font-body">
                    Thanks for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}>
                  
                    Send Another Message
                  </Button>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-navy font-body">
                      
                        First Name
                      </label>
                      <input
                      required
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all font-body" />
                    
                    </div>
                    <div className="space-y-2">
                      <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-navy font-body">
                      
                        Last Name
                      </label>
                      <input
                      required
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all font-body" />
                    
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                    htmlFor="email"
                    className="block text-sm font-bold text-navy font-body">
                    
                      Email Address
                    </label>
                    <input
                    required
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all font-body" />
                  
                  </div>
                  <div className="space-y-2">
                    <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-navy font-body">
                    
                      Subject
                    </label>
                    <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all font-body bg-white">
                    
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Wholesale</option>
                      <option>Press/Media</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                    htmlFor="message"
                    className="block text-sm font-bold text-navy font-body">
                    
                      Message
                    </label>
                    <textarea
                    required
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all font-body resize-none">
                  </textarea>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              }
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}