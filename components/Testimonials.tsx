import React, { useState, useEffect, useCallback } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { TESTIMONIALS } from '../constants';

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);


const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <Section id="testimonials">
      <SectionTitle>What Our Clients Say</SectionTitle>
      <div className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden">
          <div className="min-h-[250px] md:min-h-[200px] flex items-center justify-center">
            <figure key={currentIndex} className="rounded-lg bg-slate-800 p-8 shadow-lg w-full animate-fade-in">
              <blockquote className="text-center text-gray-300">
                <p className="text-lg italic">“{currentTestimonial.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex justify-center items-center gap-x-4">
                <div>
                  <div className="font-semibold text-white text-center">{currentTestimonial.author}</div>
                  <div className="text-gray-400 text-center">{currentTestimonial.company}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        
        <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors"
            aria-label="Previous testimonial"
        >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors"
            aria-label="Next testimonial"
        >
            <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>

        <div className="flex justify-center gap-x-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-teal-400' : 'bg-slate-600 hover:bg-slate-500'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;