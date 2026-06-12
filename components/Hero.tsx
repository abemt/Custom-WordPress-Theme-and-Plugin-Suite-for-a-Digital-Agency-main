
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-white bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-3xl px-4 animate-fade-in">
        <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20 mb-6">
          Abem Tadele — Lead WordPress Architect (React & PHP)
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          Headless WordPress & React.js Portal
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 font-light max-w-2xl mx-auto">
          A custom headless WordPress (PHP) platform utilizing GraphQL and a React.js frontend, bridging the power of WordPress content management with the performance and interactivity of a modern React single-page app.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all duration-150 ease-in-out active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;