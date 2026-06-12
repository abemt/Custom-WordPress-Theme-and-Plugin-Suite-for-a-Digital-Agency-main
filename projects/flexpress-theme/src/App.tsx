import React, { useState } from 'react';

type Palette = 'emerald' | 'slate' | 'amber';
type FontStyle = 'sans' | 'serif' | 'mono';
type Template = 'home' | 'blog';

export default function App() {
  const [palette, setPalette] = useState<Palette>('slate');
  const [font, setFont] = useState<FontStyle>('sans');
  const [template, setTemplate] = useState<Template>('home');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  const getThemeColors = () => {
    switch (palette) {
      case 'emerald':
        return {
          bg: 'bg-emerald-50/30 text-slate-900 border-emerald-100',
          accent: 'text-emerald-700 bg-emerald-100/60 hover:bg-emerald-200/60 border-emerald-500/10',
          accentBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white',
          card: 'bg-white border-slate-200/80 shadow-sm',
          subtext: 'text-slate-500'
        };
      case 'slate':
        return {
          bg: 'bg-slate-50/50 text-slate-900 border-slate-200/60',
          accent: 'text-teal-700 bg-teal-50 hover:bg-teal-100 border-teal-500/10',
          accentBtn: 'bg-teal-600 hover:bg-teal-550 text-white',
          card: 'bg-white border-slate-200/80 shadow-sm',
          subtext: 'text-slate-500 font-light'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50/20 text-slate-900 border-amber-100',
          accent: 'text-amber-700 bg-amber-100/60 hover:bg-amber-200/60 border-amber-500/10',
          accentBtn: 'bg-amber-600 hover:bg-amber-500 text-slate-950',
          card: 'bg-white border-slate-200/80 shadow-sm',
          subtext: 'text-slate-550'
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-none">
      {/* WP Header */}
      <header className="h-14 border-b border-slate-200/80 bg-white px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <span className="text-slate-500">
            <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </span>
          <span className="font-black text-sm text-slate-900">FlexPress Global Style Editor</span>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded text-xs font-semibold ${device === 'desktop' ? 'bg-slate-100 text-teal-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded text-xs font-semibold ${device === 'mobile' ? 'bg-slate-100 text-teal-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Mobile
          </button>
        </div>
      </header>

      {/* Editor layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar Styles Customizer */}
        <aside className="w-full md:w-72 bg-white border-b md:border-b-0 md:border-r border-slate-200/60 p-5 space-y-6 overflow-y-auto">
          {/* Palette Selector */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">Style Palette</span>
            <div className="grid grid-cols-3 gap-2">
              {(['slate', 'emerald', 'amber'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`py-2 text-[10px] uppercase font-bold rounded-lg border transition-all ${
                    palette === p 
                      ? 'bg-slate-50 border-teal-500 text-teal-600 shadow-sm font-bold' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 my-2"></div>

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
                      ? 'bg-slate-50 border-teal-500 text-teal-600 font-bold' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 my-2"></div>

          {/* Template Select */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">FSE Page Template</span>
            <div className="space-y-2">
              {(['home', 'blog'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTemplate(t)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold border transition-all ${
                    template === t 
                      ? 'bg-slate-50 border-teal-500 text-teal-600' 
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t === 'home' ? 'Homepage Core Template' : 'Single Blog Archives'}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right FSE Workspace */}
        <main className="flex-1 bg-slate-50/50 p-6 overflow-y-auto flex flex-col space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Gutenberg Block Canvas Frame</span>
            <div className="flex items-center space-x-1.5 text-xs text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100/100 Core Web Vitals score</span>
            </div>
          </div>

          {/* Render Webpage */}
          <div className="flex-1 flex items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl relative min-h-[350px] shadow-sm">
            <div 
              className={`border transition-all duration-300 shadow-md p-6 rounded-2xl ${colors.bg} ${getFontFamily()} ${
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
                <div className="space-y-4 animate-fade-in text-left">
                  <span className={`inline-block border px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.accent}`}>
                    Archives Feed
                  </span>
                  <h2 className="text-2xl font-black text-slate-900">Headless Blog Archives</h2>
                  
                  <div className="space-y-3 mt-4">
                    {[1, 2].map(id => (
                      <div key={id} className={`p-4 rounded-xl border ${colors.card}`}>
                        <span className="text-[10px] font-bold text-teal-600 block">June 10, 2026</span>
                        <h4 className="font-bold text-sm mt-0.5 text-slate-900">Optimizing Next.js headless sites with WPGraphQL</h4>
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
