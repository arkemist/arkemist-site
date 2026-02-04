import React, { useState } from 'react';
import { services } from '../data/mockData';
import { Check, X } from 'lucide-react';
import BookingModal from './BookingModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBooking = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">RATES & SERVICES</h2>
          <p className="text-gray-400 text-lg">Professional audio services for your next project</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black border border-gray-800 p-8 hover:border-[#ff6b35] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Grain texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-3xl font-bold text-[#ff6b35] mb-4">{service.price}</p>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Turnaround: {service.turnaround}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={16} className="text-[#ff6b35] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBooking(service)}
                  className="w-full bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#ff6b35] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
