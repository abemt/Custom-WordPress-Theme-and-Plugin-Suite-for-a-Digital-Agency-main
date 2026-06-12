import React, { useState } from 'react';

type Palette = 'emerald' | 'dark' | 'amber';
type FontStyle = 'sans' | 'serif' | 'mono';
type Template = 'home' | 'blog';

export default function App() {
  const [palette, setPalette] = useState<Palette>('dark');
  const [font, setFont] = useState<FontStyle>('sans');
  const [template, setTemplate] = useState<Template>('home');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const getThemeColors = () => {
    switch (palette) {
      case 'emerald':
        return {
          bg: 'bg-slate-50 text-slate-900 border-slate-200',
          accent: 'text-emerald-600 bg-emerald-100 hover:bg-emerald-200 border-emerald-500/10',
          accentBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white',
          card: 'bg-white border-slate-200/80',
          subtext: 'text-slate-500'
        };
      case 'dark':
        return {
          bg: 'bg-slate-950 text-slate-100 border-slate-900',
          accent: 'text-teal-400 bg-teal-400/5 hover:bg-teal-400/10 border-teal-400/20',
          accentBtn: 'bg-teal-500 hover:bg-teal-400 text-slate-950',
          card: 'bg-slate-900/60 border-slate-800/80',
          subtext: 'text-slate-400'
        };
      case 'amber':
        return {
          bg: 'bg-stone-950 text-stone-100 border-stone-900',
          accent: 'text-amber-500 bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20',
          accentBtn: 'bg-amber-500 hover:bg-amber-400 text-stone-950',
          card: 'bg-stone-900/60 border-stone-800/80',
          subtext: 'text-stone-400'
        };
    }
  };

  const getFontFamily = () => {
    switch (font) {
      case 'sans': return 'font-sans';
      case 'serif': return 'font-serif';
      case 'mono': return 'font-mono';
    }
  };

  const colors = getThemeColors();

  return (
    <div className="min-h-screen bg-[#101524] text-slate-200 flex flex-col font-sans select-none">
      {/* WP Header */}
      <header className="h-14 border-b border-slate-800 bg-[#141b2e] px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-slate-400">
            <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </span>
          <span className="font-bold text-sm text-white">FlexPress Global Style Editor</span>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded ${device === 'desktop' ? 'bg-slate-800 text-teal-400' : 'text-slate-400 hover:text-white'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded ${device === 'mobile' ? 'bg-slate-800 text-teal-400' : 'text-slate-400 hover:text-white'}`}
          >
            Mobile
          </button>
        </div>
      </header>

      {/* Editor layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar Styles Customizer */}
        <aside className="w-full md:w-72 bg-[#141b2e] border-b md:border-b-0 md:border-r border-slate-800 p-5 space-y-6 overflow-y-auto">
          {/* Palette Selector */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">Style Palette</span>
            <div className="grid grid-cols-3 gap-2">
              {(['dark', 'emerald', 'amber'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`py-2 text-[10px] uppercase font-bold rounded-lg border transition-all ${
                    palette === p 
                      ? 'bg-slate-800 border-teal-500 text-teal-400 shadow-md' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 my-2"></div>

          {/* Typography */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">Typography Font</span>
            <div className="grid grid-cols-3 gap-2">
              {(['sans', 'serif', 'mono'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFont(f)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                    font === f 
                      ? 'bg-slate-800 border-teal-500 text-teal-400' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 my-2"></div>

          {/* Template Select */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">FSE Page Template</span>
            <div className="space-y-2">
              {(['home', 'blog'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTemplate(t)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-semibold border transition-all ${
                    template === t 
                      ? 'bg-slate-800 border-teal-500 text-teal-400' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {t === 'home' ? 'Homepage Core Template' : 'Single Blog Archives'}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right FSE Workspace */}
        <main className="flex-1 bg-[#0b0f19] p-6 overflow-y-auto flex flex-col space-y-6">
          <div className="flex items-center justify-between border-b border-slate-850 pb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Gutenberg Block Canvas Frame</span>
            <div className="flex items-center space-x-1.5 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100/100 Core Web Vitals score</span>
            </div>
          </div>

          {/* Render Webpage */}
          <div className="flex-1 flex items-center justify-center p-2 bg-[#0d1222] border border-slate-800 rounded-2xl relative min-h-[350px]">
            <div 
              className={`border transition-all duration-300 shadow-2xl p-6 ${colors.bg} ${getFontFamily()} ${
                device === 'mobile' ? 'max-w-xs w-full min-h-[420px]' : 'max-w-2xl w-full min-h-[300px]'
              }`}
            >
              {template === 'home' ? (
                <div className="space-y-6 animate-fade-in">
                  {/* Hero Block */}
                  <div className="space-y-3 text-center py-4">
                    <span className={`inline-block border px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.accent}`}>
                      Theme Customization
                    </span>
                    <h1 className="text-3xl font-black tracking-tight leading-tight">FlexPress FSE Builder</h1>
                    <p className={`text-sm max-w-md mx-auto ${colors.subtext}`}>
                      Fully responsive layout patterns configured directly inside standard block themes.
                    </p>
                    <div className="pt-2">
                      <button className={`px-5 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 ${colors.accentBtn}`}>
                        Explore Patterns
                      </button>
                    </div>
                  </div>

                  {/* Core Blocks Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${colors.card} space-y-2`}>
                      <h3 className="font-bold text-sm">Decoupled Caching</h3>
                      <p className={`text-xs leading-relaxed ${colors.subtext}`}>Zero CSS files generated outside system utilities.</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${colors.card} space-y-2`}>
                      <h3 className="font-bold text-sm">Gutenberg Editor JSON</h3>
                      <p className={`text-xs leading-relaxed ${colors.subtext}`}>Synchronized styling schemas via unified declarations.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <span className={`inline-block border px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.accent}`}>
                    Archives Feed
                  </span>
                  <h2 className="text-2xl font-black">Headless Blog Archives</h2>
                  
                  <div className="space-y-3 mt-4">
                    {[1, 2].map(id => (
                      <div key={id} className={`p-4 rounded-xl border ${colors.card}`}>
                        <span className="text-[10px] font-semibold text-teal-400">June 10, 2026</span>
                        <h4 className="font-bold text-sm mt-0.5">Optimizing Next.js headless sites with WPGraphQL</h4>
                        <p className={`text-xs mt-2 leading-relaxed ${colors.subtext}`}>
                          Understand layout styling performance strategies utilizing Tailwind CSS CDN in Next.js server components.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
