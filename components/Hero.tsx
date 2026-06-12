
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative z-10 max-w-3xl px-4 animate-fade-in">
        <span className="inline-flex items-center rounded-full bg-teal-400/10 px-4 py-1.5 text-sm font-semibold text-teal-400 ring-1 ring-inset ring-teal-400/20 mb-6">
          Lead WordPress Architect (React & PHP)
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-100 to-teal-400 bg-clip-text text-transparent">
          Headless WordPress & React.js Portal
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 font-light">
          A custom headless WordPress (PHP) platform utilizing GraphQL and a React.js frontend, bridging the power of WordPress content management with the performance and interactivity of a modern React single-page app.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-all duration-150 ease-in-out active:scale-95"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;