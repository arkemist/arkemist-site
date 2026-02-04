import React, { useState } from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: service?.title || '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xeoaooap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          service: service?.title || formData.service
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', email: '', service: '', message: '' });
        }, 3000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative bg-gray-900 border border-gray-800 max-w-md w-full p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold mb-2">Book a Session</h3>
            {service && (
              <p className="text-gray-400 mb-6">
                Service: <span className="text-[#ff6b35] font-semibold">{service.title}</span> - {service.price}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-black border border-gray-700 px-4 py-3 focus:border-[#ff6b35] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff6b35] text-black px-6 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
              >
                Send Request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
            <p className="text-gray-400">I'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
