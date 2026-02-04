import React, { useState } from 'react';
import { Check } from 'lucide-react';
import BookingModal from './BookingModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBooking = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const ServiceCard = ({ service }) => (
    <div className="bg-black border border-gray-800 p-8 hover:border-[#ff6b35] transition-all duration-300 group relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-3xl font-bold text-[#ff6b35] mb-4">{service.price}</p>
        <p className="text-gray-400 mb-6">{service.description}</p>

        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Turnaround: {service.turnaround}</p>
        </div>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-[#ff6b35] mt-1 flex-shrink-0" />
            <span>{service.features[0]}</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-[#ff6b35] mt-1 flex-shrink-0" />
            <span>{service.features[1]}</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-[#ff6b35] mt-1 flex-shrink-0" />
            <span>{service.features[2]}</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-[#ff6b35] mt-1 flex-shrink-0" />
            <span>{service.features[3]}</span>
          </li>
        </ul>

        <button
          onClick={() => handleBooking(service)}
          type="button"
          className="w-full bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#ff6b35] transition-all duration-300"
        >
          Book Session
        </button>
      </div>
    </div>
  );

  const service1 = {
    id: 1,
    title: "Mixing",
    description: "Professional mixing services for trap, hip-hop, and rap tracks. Get that radio-ready sound.",
    price: "Starting at $150",
    turnaround: "3-5 days",
    features: [
      "Unlimited revisions",
      "Stems delivery",
      "Reference track matching",
      "Professional consultation"
    ]
  };

  const service2 = {
    id: 2,
    title: "Mastering",
    description: "Final polish for your tracks. Optimized for all streaming platforms.",
    price: "Starting at $75",
    turnaround: "24-48 hours",
    features: [
      "Streaming optimization",
      "Multiple format delivery",
      "LUFS normalization",
      "Free test master"
    ]
  };

  const service3 = {
    id: 3,
    title: "Production",
    description: "Custom beat production with that signature Arkemist sound.",
    price: "Starting at $300",
    turnaround: "1-2 weeks",
    features: [
      "Custom instrumentation",
      "Unlimited revisions",
      "Stems included",
      "Exclusive or lease options"
    ]
  };

  return (
    <React.Fragment>
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">RATES &amp; SERVICES</h2>
            <p className="text-gray-400 text-lg">Professional audio services for your next project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard service={service1} />
            <ServiceCard service={service2} />
            <ServiceCard service={service3} />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      )}
    </React.Fragment>
  );
};

export default Services;
