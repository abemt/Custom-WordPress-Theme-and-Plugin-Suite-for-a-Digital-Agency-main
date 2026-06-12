
import React, { useState } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here.
    // For this demo, we'll just show a success message.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section id="contact" className="bg-slate-50 border-t border-slate-100">
        <div className="text-center">
          <SectionTitle>Thank You!</SectionTitle>
          <p className="mt-4 text-lg leading-6 text-slate-600 font-light">Your message has been sent. We'll get back to you shortly.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-slate-50 border-t border-slate-100">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mx-auto max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-700">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-900 shadow-sm ring-0 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-700">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-900 shadow-sm ring-0 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-700">
              Message
            </label>
            <div className="mt-2">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3.5 text-slate-900 shadow-sm ring-0 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-sm hover:bg-slate-800 transition-all duration-150 ease-in-out active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
