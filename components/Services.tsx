
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-slate-800">
      <SectionTitle>What We Do</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex flex-col items-center text-center p-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-teal-500/20 transition-shadow duration-300">
            <div className="flex-shrink-0 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-base text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
