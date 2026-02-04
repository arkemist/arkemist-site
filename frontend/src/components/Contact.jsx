import React, { useState } from 'react';
import { artistInfo } from '../data/mockData';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xeoaooap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">DROP THE BASS</h2>
          <p className="text-gray-400 text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-wider">Email</h3>
                <p className="text-gray-400">{artistInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-wider">Location</h3>
                <p className="text-gray-400">{artistInfo.location}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="font-bold mb-4 uppercase tracking-wider">Response Time</h3>
              <p className="text-gray-400">Usually within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-900 border border-gray-800 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff6b35] text-black px-6 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]"
                >
                  Drop The Bass
                </button>
              </form>
            ) : (
              <div className="bg-gray-900 border border-[#ff6b35] p-8 text-center">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
