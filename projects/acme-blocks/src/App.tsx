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
      case 'teal': return 'from-slate-900 to-teal-950/60 border-teal-500/20';
      case 'purple': return 'from-slate-900 to-purple-950/60 border-purple-500/20';
      case 'indigo': return 'from-slate-900 to-indigo-950/60 border-indigo-500/20';
    }
  };

  const getButtonClass = () => {
    switch (bgGradient) {
      case 'teal': return 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/10';
      case 'purple': return 'bg-purple-500 hover:bg-purple-400 text-white shadow-purple-500/10';
      case 'indigo': return 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/10';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none">
      {/* Top Header Mocking WordPress Editor Header */}
      <header className="h-14 border-b border-slate-800 bg-slate-900/40 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-slate-400">
            <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </span>
          <span className="font-bold text-sm text-white">Acme Blocks Editor Studio</span>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded ${device === 'desktop' ? 'bg-slate-800 text-teal-400' : 'text-slate-400 hover:text-white'}`}
            title="Desktop View"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded ${device === 'mobile' ? 'bg-slate-800 text-teal-400' : 'text-slate-400 hover:text-white'}`}
            title="Mobile View"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
          <div className="border-l border-slate-800 h-6 mx-2"></div>
          <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-3 py-1.5 rounded text-xs transition-all">
            Save Block
          </button>
        </div>
      </header>

      {/* Editor Body */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar Control Inspector */}
        <aside className="w-full lg:w-80 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col p-5 space-y-6 overflow-y-auto">
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
                      ? 'bg-slate-800 border-teal-500 text-teal-400 shadow-md' 
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 my-2"></div>

          {/* Block Attributes */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Block Attributes</span>
            
            {/* Title Input */}
            <div>
              <label className="block text-xs text-slate-400 mb-1">Block Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500" 
              />
            </div>

            {/* Description/Subtitle Input */}
            <div>
              <label className="block text-xs text-slate-400 mb-1">Block Subtitle</label>
              <textarea 
                value={subtitle} 
                rows={3}
                onChange={e => setSubtitle(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500" 
              />
            </div>

            {/* Gradient Selector */}
            <div>
              <label className="block text-xs text-slate-400 mb-2">Block Accent Theme</label>
              <div className="flex space-x-2">
                {(['teal', 'purple', 'indigo'] as const).map(color => (
                  <button
                    key={color}
                    onClick={() => setBgGradient(color)}
                    className={`h-7 w-7 rounded-full border-2 transition-all ${
                      bgGradient === color 
                        ? 'border-white scale-110 shadow-lg' 
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
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <label>Border Radius</label>
                <span>{borderRadius}px</span>
              </div>
              <input 
                type="range" 
                min={0} 
                max={24} 
                value={borderRadius} 
                onChange={e => setBorderRadius(Number(e.target.value))} 
                className="w-full accent-teal-500" 
              />
            </div>
          </div>
        </aside>

        {/* Right Canvas Frame */}
        <main className="flex-1 bg-slate-950 flex flex-col p-6 overflow-y-auto space-y-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Editor Canvas Viewport</span>
          
          {/* Canvas Viewport Frame */}
          <div className="flex-1 flex items-center justify-center p-2 bg-slate-900/30 border border-slate-800 rounded-2xl relative min-h-[350px]">
            <div 
              className={`bg-slate-900 border rounded-2xl p-8 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden bg-gradient-to-br ${getGradientClass()} ${
                device === 'mobile' ? 'max-w-xs w-full min-h-[380px]' : 'max-w-xl w-full min-h-[260px]'
              }`}
              style={{ borderRadius: `${borderRadius}px` }}
            >
              {selectedBlock === 'cta' && (
                <div className="space-y-4 my-auto">
                  <h3 className="text-2xl font-black text-white leading-tight">{title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">{subtitle}</p>
                  <button className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-lg ${getButtonClass()}`}>
                    Call to Action Button
                  </button>
                </div>
              )}

              {selectedBlock === 'accordion' && (
                <div className="space-y-4 my-auto">
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{subtitle}</p>
                  <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                      className="w-full p-4 flex justify-between items-center text-sm font-semibold text-white hover:bg-slate-950/20"
                    >
                      <span>How do custom block themes work?</span>
                      <svg className={`h-4 w-4 text-teal-400 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isAccordionOpen && (
                      <div className="p-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                        Acme Gutenberg blocks are written in React in the WordPress admin panel and automatically render server-side fallback templates on page load.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedBlock === 'pricing' && (
                <div className="space-y-5 my-auto text-center">
                  <div>
                    <h3 className="text-xl font-black text-white">{title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
                  </div>
                  <div className="bg-slate-950/40 border border-slate-800/50 p-6 rounded-xl inline-block max-w-[200px] w-full mx-auto">
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Standard</span>
                    <span className="text-3xl font-black text-white mt-1 block">$19</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Per Site / Month</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* JSON Block Schema Code Inspector */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 relative">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">Saved block.json Attributes</span>
            <pre className="font-mono text-xs text-amber-300 whitespace-pre-wrap leading-relaxed">
              {getJSONSchema()}
            </pre>
            <div className="absolute top-4 right-4 bg-slate-850 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800 select-none">
              JSON Output
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
