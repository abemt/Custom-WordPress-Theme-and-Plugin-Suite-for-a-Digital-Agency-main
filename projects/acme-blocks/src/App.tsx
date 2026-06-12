import React, { useState } from 'react';

type BlockType = 'cta' | 'accordion' | 'pricing';

export default function App() {
  const [selectedBlock, setSelectedBlock] = useState<BlockType>('cta');
  const [title, setTitle] = useState('Build Faster with Headless Blocks');
  const [subtitle, setSubtitle] = useState('An enterprise Gutenberg custom builder suite built with React and JSON configurations.');
  const [bgGradient, setBgGradient] = useState<'teal' | 'purple' | 'indigo'>('teal');
  const [borderRadius, setBorderRadius] = useState(12);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const getGradientClass = () => {
    switch (bgGradient) {
      case 'teal': return 'from-teal-50 to-emerald-50/20 border-teal-200/60';
      case 'purple': return 'from-purple-50 to-fuchsia-50/20 border-purple-200/60';
      case 'indigo': return 'from-indigo-50 to-blue-50/20 border-indigo-200/60';
    }
  };

  const getButtonClass = () => {
    switch (bgGradient) {
      case 'teal': return 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/10';
      case 'purple': return 'bg-purple-650 hover:bg-purple-500 text-white shadow-purple-600/10';
      case 'indigo': return 'bg-indigo-650 hover:bg-indigo-500 text-white shadow-indigo-600/10';
    }
  };

  const getJSONSchema = () => {
    return JSON.stringify({
      blockName: `acme/${selectedBlock}`,
      attrs: {
        title,
        subtitle,
        bgGradient,
        borderRadius: `${borderRadius}px`,
      },
      innerBlocks: []
    }, null, 2);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-none">
      {/* Top Header */}
      <header className="h-14 border-b border-slate-200/80 bg-white px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <span className="text-slate-500">
            <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </span>
          <span className="font-black text-sm text-slate-900">Acme Blocks Editor Studio</span>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded text-xs font-semibold ${device === 'desktop' ? 'bg-slate-100 text-teal-600' : 'text-slate-500 hover:text-slate-900'}`}
            title="Desktop View"
          >
            Desktop
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded text-xs font-semibold ${device === 'mobile' ? 'bg-slate-100 text-teal-600' : 'text-slate-500 hover:text-slate-900'}`}
            title="Mobile View"
          >
            Mobile
          </button>
          <div className="border-l border-slate-200 h-6 mx-2"></div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-1.5 rounded text-xs transition-all">
            Save Block
          </button>
        </div>
      </header>

      {/* Editor Body */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar Control Inspector */}
        <aside className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/60 flex flex-col p-5 space-y-6 overflow-y-auto">
          {/* Block Selector */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Select Active Block</span>
            <div className="grid grid-cols-3 gap-1.5">
              {(['cta', 'accordion', 'pricing'] as const).map(b => (
                <button
                  key={b}
                  onClick={() => {
                    setSelectedBlock(b);
                    if (b === 'cta') {
                      setTitle('Build Faster with Headless Blocks');
                      setSubtitle('An enterprise Gutenberg custom builder suite built with React and JSON configurations.');
                    } else if (b === 'accordion') {
                      setTitle('Frequently Asked Queries');
                      setSubtitle('Configure questions accordion dropdown blocks.');
                    } else if (b === 'pricing') {
                      setTitle('Flexible Licensing Plans');
                      setSubtitle('Simple, robust, and transparent pricing structures.');
                    }
                  }}
                  className={`py-2 text-[10px] uppercase font-bold rounded-lg border transition-all ${
                    selectedBlock === b 
                      ? 'bg-slate-50 border-teal-500 text-teal-600 shadow-sm' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 my-2"></div>

          {/* Block Attributes */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Block Attributes</span>
            
            {/* Title Input */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">Block Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white" 
              />
            </div>

            {/* Description/Subtitle Input */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">Block Subtitle</label>
              <textarea 
                value={subtitle} 
                rows={3}
                onChange={e => setSubtitle(e.target.value)} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-500 focus:bg-white" 
              />
            </div>

            {/* Gradient Selector */}
            <div>
              <label className="block text-xs text-slate-500 mb-2">Block Accent Theme</label>
              <div className="flex space-x-2">
                {(['teal', 'purple', 'indigo'] as const).map(color => (
                  <button
                    key={color}
                    onClick={() => setBgGradient(color)}
                    className={`h-7 w-7 rounded-full border-2 transition-all ${
                      bgGradient === color 
                        ? 'border-slate-800 scale-115 shadow-md' 
                        : 'border-transparent hover:scale-105'
                    } ${
                      color === 'teal' ? 'bg-teal-500' : color === 'purple' ? 'bg-purple-500' : 'bg-indigo-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Border Radius Slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <label>Border Radius</label>
                <span>{borderRadius}px</span>
              </div>
              <input 
                type="range" 
                min={0} 
                max={24} 
                value={borderRadius} 
                onChange={e => setBorderRadius(Number(e.target.value))} 
                className="w-full accent-teal-600" 
              />
            </div>
          </div>
        </aside>

        {/* Right Canvas Frame */}
        <main className="flex-1 bg-slate-50/50 flex flex-col p-6 overflow-y-auto space-y-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Editor Canvas Viewport</span>
          
          {/* Canvas Viewport Frame */}
          <div className="flex-1 flex items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl relative min-h-[350px] shadow-sm">
            <div 
              className={`bg-white border rounded-2xl p-8 transition-all duration-300 shadow-lg flex flex-col justify-between overflow-hidden bg-gradient-to-br ${getGradientClass()} ${
                device === 'mobile' ? 'max-w-xs w-full min-h-[380px]' : 'max-w-xl w-full min-h-[260px]'
              }`}
              style={{ borderRadius: `${borderRadius}px` }}
            >
              {selectedBlock === 'cta' && (
                <div className="space-y-4 my-auto">
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{subtitle}</p>
                  <button className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-md ${getButtonClass()}`}>
                    Call to Action Button
                  </button>
                </div>
              )}

              {selectedBlock === 'accordion' && (
                <div className="space-y-4 my-auto text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 font-light">{subtitle}</p>
                  <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                      className="w-full p-4 flex justify-between items-center text-sm font-bold text-slate-800 hover:bg-slate-50"
                    >
                      <span>How do custom block themes work?</span>
                      <svg className={`h-4 w-4 text-teal-600 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isAccordionOpen && (
                      <div className="p-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-light">
                        Acme Gutenberg blocks are written in React in the WordPress admin panel and automatically render server-side fallback templates on page load.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedBlock === 'pricing' && (
                <div className="space-y-5 my-auto text-center">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{title}</h3>
                    <p className="text-xs text-slate-500 mt-1 font-light">{subtitle}</p>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-xl inline-block max-w-[200px] w-full mx-auto shadow-sm">
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block font-bold">Standard</span>
                    <span className="text-3xl font-black text-slate-900 mt-1 block">$19</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5 font-light">Per Site / Month</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* JSON Block Schema Code Inspector */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 relative shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Saved block.json Attributes</span>
            <pre className="font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed shadow-inner bg-slate-50/50 p-4 rounded-lg">
              {getJSONSchema()}
            </pre>
            <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-250 select-none">
              JSON Output
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
