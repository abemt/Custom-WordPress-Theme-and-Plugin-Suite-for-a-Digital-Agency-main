import React, { useState } from 'react';

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  price: number;
}

const EVENTS: EventItem[] = [
  { id: 1, title: 'Headless WordPress Conference 2026', date: 'June 20, 2026', location: 'San Francisco, CA & Online', price: 99, description: 'The premier conference for developers building decoupled frontends on top of WordPress.' },
  { id: 2, title: 'React Server Components Meetup', date: 'July 15, 2026', location: 'Seattle, WA', price: 49, description: 'Learn to render custom Gutenberg block nodes using Next.js server actions.' },
  { id: 3, title: 'Advanced PHP Core Development', date: 'August 08, 2026', location: 'Chicago, IL & Online', price: 129, description: 'Deep dive into object-oriented PHP patterns, Gutenberg block-json schemas, and REST custom routes.' }
];

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem>(EVENTS[0]);
  const [ticketType, setTicketType] = useState<'standard' | 'vip'>('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsBooked(true);
    }, 1200);
  };

  const getPrice = () => {
    return ticketType === 'vip' ? selectedEvent.price + 100 : selectedEvent.price;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-white">WP-EventHub Portal</h1>
            <p className="text-xs text-slate-400">Wordpress Ticketing & Scheduling</p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Events List */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-white">Available Conferences</h2>
            <p className="text-xs text-slate-400 mt-1">Select an event below to configure your ticketing registration.</p>
          </div>

          <div className="space-y-4">
            {EVENTS.map(event => (
              <div 
                key={event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setIsBooked(false);
                }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedEvent.id === event.id 
                    ? 'bg-slate-900 border-teal-500/50 shadow-lg shadow-teal-500/5' 
                    : 'bg-slate-900/40 border-slate-850 hover:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">{event.date}</span>
                  <span className="text-sm font-bold text-white">${event.price} starting</span>
                </div>
                <h3 className="text-base font-bold text-white mt-1.5">{event.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{event.description}</p>
                <div className="mt-4 flex items-center text-xs text-slate-500">
                  <svg className="h-4 w-4 mr-1 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Ticket Booking Panel */}
        <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl shadow-xl">
          {!isBooked ? (
            <form onSubmit={handleBook} className="space-y-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Active Event Selection</span>
                <h3 className="text-sm font-bold text-white mt-1 truncate">{selectedEvent.title}</h3>
              </div>

              <div className="border-t border-slate-850 my-2"></div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Alex Johnson"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-850 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-teal-500" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="alex@wp-architect.com"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-850 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-teal-500" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Ticket Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTicketType('standard')}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      ticketType === 'standard' 
                        ? 'bg-slate-800 border-teal-500 text-teal-400' 
                        : 'bg-slate-950 border-slate-850 text-slate-400'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    type="button"
                    onClick={() => setTicketType('vip')}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      ticketType === 'vip' 
                        ? 'bg-slate-800 border-teal-500 text-teal-400' 
                        : 'bg-slate-950 border-slate-850 text-slate-400'
                    }`}
                  >
                    VIP (+ $100)
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">Total Price:</span>
                <span className="text-base font-black text-white">${getPrice()}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-teal-500 hover:bg-teal-400 rounded-xl font-bold text-xs text-slate-950 flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-teal-500/10"
              >
                {loading ? (
                  <div className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Register for Event</span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-5 animate-fade-in">
              <div className="mx-auto h-12 w-12 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center border border-teal-500/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-black text-white">Ticket Confirmed</h3>
                <p className="text-xs text-slate-400 mt-1">Order receipt sent to {email}</p>
              </div>

              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-xl inline-block border border-slate-200">
                <svg className="h-32 w-32 text-slate-950" viewBox="0 0 100 100" fill="currentColor">
                  {/* Mock QR code layout */}
                  <rect x="10" y="10" width="20" height="20" />
                  <rect x="15" y="15" width="10" height="10" fill="white" />
                  <rect x="70" y="10" width="20" height="20" />
                  <rect x="75" y="15" width="10" height="10" fill="white" />
                  <rect x="10" y="70" width="20" height="20" />
                  <rect x="15" y="75" width="10" height="10" fill="white" />
                  <rect x="40" y="40" width="20" height="20" />
                  <rect x="45" y="45" width="10" height="10" fill="white" />
                  <rect x="40" y="10" width="10" height="20" />
                  <rect x="10" y="40" width="20" height="10" />
                  <rect x="70" y="40" width="20" height="20" />
                  <rect x="40" y="70" width="20" height="20" />
                </svg>
              </div>

              <div className="text-xs space-y-1 bg-slate-950 border border-slate-850 p-3.5 rounded-xl text-left">
                <span className="block text-slate-400 font-semibold"><span className="text-slate-500">Attendee:</span> {name}</span>
                <span className="block text-slate-400 font-semibold"><span className="text-slate-500">Access Tier:</span> {ticketType.toUpperCase()} PASS</span>
                <span className="block text-slate-400 font-semibold truncate"><span className="text-slate-500">Event:</span> {selectedEvent.title}</span>
              </div>

              <button
                onClick={() => setIsBooked(false)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-all"
              >
                Book Another Ticket
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
