import React, { useState } from 'react';

export default function App() {
  const [minify, setMinify] = useState(false);
  const [webp, setWebp] = useState(false);
  const [criticalCss, setCriticalCss] = useState(false);
  const [dbCache, setDbCache] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'db'>('dashboard');

  // Compute scores dynamically
  let performanceScore = 65;
  if (minify) performanceScore += 10;
  if (webp) performanceScore += 12;
  if (criticalCss) performanceScore += 12;
  
  let responseTime = 480; // ms
  if (dbCache) responseTime = 52;

  const runCleanDb = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      alert('WordPress Database Optimized! Cleaned 412 orphaned revisions and transient values.');
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400 border-emerald-500/30';
    if (score >= 50) return 'text-amber-400 border-amber-500/30';
    return 'text-rose-400 border-rose-500/30';
  };

  return (
    <div className="min-h-screen bg-[#1d2327] text-slate-100 flex flex-col font-sans select-none">
      {/* WordPress Top Admin Bar */}
      <div className="h-8 bg-[#1d2327] border-b border-[#2c3338] text-xs px-4 flex items-center justify-between text-gray-300">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-white flex items-center">
            <svg className="h-4 w-4 mr-1.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            PressSpeed Optimizer Demo
          </span>
          <span className="hover:text-teal-400 cursor-pointer">Visit Site</span>
          <span className="hover:text-teal-400 cursor-pointer">Updates (2)</span>
        </div>
        <div>
          <span className="text-gray-400 hover:text-white cursor-pointer">Howdy, WordPress Architect</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Sidebar Menu */}
        <aside className="w-full md:w-56 bg-[#1d2327] border-r border-[#2c3338] flex flex-col p-2 space-y-1">
          <div className="p-3 text-slate-400 uppercase text-[10px] font-black tracking-widest">Core Plugin Navigation</div>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-left px-3 py-2 rounded text-sm font-semibold transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-teal-500 text-slate-950 font-bold' 
                : 'text-slate-300 hover:bg-[#2c3338] hover:text-white'
            }`}
          >
            Performance Settings
          </button>
          <button 
            onClick={() => setActiveTab('db')}
            className={`w-full text-left px-3 py-2 rounded text-sm font-semibold transition-all ${
              activeTab === 'db' 
                ? 'bg-teal-500 text-slate-950 font-bold' 
                : 'text-slate-300 hover:bg-[#2c3338] hover:text-white'
            }`}
          >
            Database Clean Up
          </button>
          <div className="border-t border-[#2c3338] my-3"></div>
          <div className="px-3 py-2 text-xs text-gray-500 italic">
            Engine Version 1.4.2
          </div>
        </aside>

        {/* Right Admin Panel Canvas */}
        <main className="flex-1 bg-[#f0f0f1] text-[#2c3338] p-6 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6 max-w-4xl animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                <div>
                  <h1 className="text-2xl font-black text-[#1d2327]">PressSpeed Performance Control</h1>
                  <p className="text-sm text-gray-500">Configure speed optimization assets parsing below.</p>
                </div>
                <div className="text-xs text-teal-600 bg-teal-500/10 px-3 py-1 rounded-full font-bold border border-teal-500/20">
                  Plugin Active
                </div>
              </div>

              {/* Performance Gauges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Speed Score Gauge */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center flex flex-col items-center justify-center">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-wider">PageSpeed Score</span>
                  <div className={`mt-3 h-24 w-24 rounded-full border-8 flex items-center justify-center text-2xl font-black transition-all ${getScoreColor(performanceScore)}`}>
                    {performanceScore}
                  </div>
                  <span className="text-xs text-gray-500 mt-2">Mobile rendering profile benchmark</span>
                </div>

                {/* Response Time Gauge */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center flex flex-col items-center justify-center">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-wider">TTFB Response Time</span>
                  <div className={`mt-3 h-24 w-24 rounded-full border-8 border-slate-100 flex flex-col items-center justify-center transition-all ${responseTime < 100 ? 'text-emerald-500' : 'text-amber-500'}`}>
                    <span className="text-2xl font-black">{responseTime}</span>
                    <span className="text-[10px] -mt-1 font-bold">MS</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">Server response (Time-to-First-Byte)</span>
                </div>

                {/* Audit Status */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
                  <span className="text-xs font-black uppercase text-gray-400 tracking-wider block">Diagnostics Audit</span>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span>Unminified Assets</span>
                      <span className={`font-semibold ${minify ? 'text-emerald-600' : 'text-rose-500'}`}>{minify ? 'Optimized' : 'Warning'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next-Gen Images</span>
                      <span className={`font-semibold ${webp ? 'text-emerald-600' : 'text-rose-500'}`}>{webp ? 'Optimized' : 'Warning'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Render-Blocking CSS</span>
                      <span className={`font-semibold ${criticalCss ? 'text-emerald-600' : 'text-rose-500'}`}>{criticalCss ? 'Optimized' : 'Warning'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Database Transients</span>
                      <span className={`font-semibold ${dbCache ? 'text-emerald-600' : 'text-rose-500'}`}>{dbCache ? 'Optimized' : 'Warning'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimization Settings Toggles */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-[#1d2327] pb-2 border-b border-gray-100">Speed Optimization Switches</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Minify Toggle */}
                  <div className="flex items-start justify-between p-4 bg-slate-50 border border-gray-200 rounded-xl">
                    <div>
                      <h4 className="text-sm font-bold text-[#1d2327]">Asset Code Minification</h4>
                      <p className="text-xs text-gray-500 mt-1">Compress and strip spaces/comments from HTML, CSS, and JS payloads.</p>
                    </div>
                    <button 
                      onClick={() => setMinify(!minify)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${minify ? 'bg-teal-500' : 'bg-gray-300'}`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${minify ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* WebP Toggle */}
                  <div className="flex items-start justify-between p-4 bg-slate-50 border border-gray-200 rounded-xl">
                    <div>
                      <h4 className="text-sm font-bold text-[#1d2327]">WebP Next-Gen Converter</h4>
                      <p className="text-xs text-gray-500 mt-1">Rewrite media uploads to WebP/AVIF file extensions automatically.</p>
                    </div>
                    <button 
                      onClick={() => setWebp(!webp)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${webp ? 'bg-teal-500' : 'bg-gray-300'}`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${webp ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* Critical CSS Toggle */}
                  <div className="flex items-start justify-between p-4 bg-slate-50 border border-gray-200 rounded-xl">
                    <div>
                      <h4 className="text-sm font-bold text-[#1d2327]">Inline Critical CSS Path</h4>
                      <p className="text-xs text-gray-500 mt-1">Extract fold elements styles and defer large external stylesheets.</p>
                    </div>
                    <button 
                      onClick={() => setCriticalCss(!criticalCss)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${criticalCss ? 'bg-teal-500' : 'bg-gray-300'}`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${criticalCss ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* Object Caching Toggle */}
                  <div className="flex items-start justify-between p-4 bg-slate-50 border border-gray-200 rounded-xl">
                    <div>
                      <h4 className="text-sm font-bold text-[#1d2327]">Object & Database Cache</h4>
                      <p className="text-xs text-gray-500 mt-1">Store SQL query transients in Redis/Memcached bypass loops.</p>
                    </div>
                    <button 
                      onClick={() => setDbCache(!dbCache)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${dbCache ? 'bg-teal-500' : 'bg-gray-300'}`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${dbCache ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'db' && (
            <div className="space-y-6 max-w-4xl animate-fade-in bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-[#1d2327]">Database Table Optimizer</h2>
                <p className="text-sm text-gray-500 mt-1">Safely clean overhead tables, junk revisions, and transient database records.</p>
              </div>

              <div className="border-t border-gray-100 my-4"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 rounded-lg text-sm">
                  <div>
                    <span className="font-bold block">Orphaned Revisions (412 items)</span>
                    <span className="text-xs text-gray-500">Auto-saved post drafts stored in postmeta table logs.</span>
                  </div>
                  <span className="text-red-500 font-bold">-14.2 MB</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 rounded-lg text-sm">
                  <div>
                    <span className="font-bold block">Expired Transient Cache Tokens (88 items)</span>
                    <span className="text-xs text-gray-500">Stale plugin options metrics tables.</span>
                  </div>
                  <span className="text-red-500 font-bold">-2.1 MB</span>
                </div>
              </div>

              <button
                onClick={runCleanDb}
                disabled={isOptimizing}
                className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-sm flex items-center justify-center transition-all active:scale-[0.98]"
              >
                {isOptimizing ? (
                  <div className="h-5 w-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Optimize Database Schema Now</span>
                )}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
