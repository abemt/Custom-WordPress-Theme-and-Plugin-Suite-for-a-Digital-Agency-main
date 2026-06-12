import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  category: 'Themes' | 'Plugins';
  price: number;
  image: string;
  desc: string;
}

const PRODUCTS: Product[] = [
  { id: 1, title: 'FlexPress Premium Block Theme', category: 'Themes', price: 59, image: 'https://picsum.photos/seed/flex/400/300', desc: 'Full Site Editing (FSE) block theme designed for 100/100 PageSpeed scores.' },
  { id: 2, title: 'PressSpeed Asset Optimizer', category: 'Plugins', price: 49, image: 'https://picsum.photos/seed/press/400/300', desc: 'Bespoke assets optimizer with critical CSS generation engine.' },
  { id: 3, title: 'Acme Gutenberg Blocks Suite', category: 'Plugins', price: 29, image: 'https://picsum.photos/seed/acme/400/300', desc: 'Premium editorial block integrations with custom React customizer panels.' },
  { id: 4, title: 'WP-EventHub Event Theme', category: 'Themes', price: 79, image: 'https://picsum.photos/seed/hub/400/300', desc: 'Complete booking event portal with interactive calendar templates.' },
];

export default function App() {
  const [filter, setFilter] = useState<'All' | 'Themes' | 'Plugins'>('All');
  const [cart, setCart] = useState<Array<{ product: Product; qty: number }>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'shop' | 'checkout' | 'success'>('shop');
  
  // Checkout Form State
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCheckoutStep('success');
      setCart([]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-white">WooCommerce React SPA</h1>
            <p className="text-xs text-slate-400">Decoupled WooCommerce Storefront</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-teal-500 text-xs font-bold text-slate-950 flex items-center justify-center animate-bounce">
                {cart.reduce((a, b) => a + b.qty, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        {checkoutStep === 'shop' && (
          <div className="space-y-8 animate-fade-in">
            {/* Filter buttons & Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Developer Suite Marketplace</h2>
                <p className="text-sm text-slate-400">High-performance WordPress files, built decoupled, delivered instantly.</p>
              </div>
              <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
                {(['All', 'Themes', 'Plugins'] as const).map(c => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      filter === c 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-slate-900/50 border border-slate-800/80 rounded-xl overflow-hidden shadow-lg hover:border-indigo-500/50 transition-colors flex flex-col">
                  <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-indigo-400">{product.category}</span>
                      <h3 className="text-base font-bold text-white mt-1">{product.title}</h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">{product.desc}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-lg font-black text-white">${product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all hover:shadow-lg hover:shadow-indigo-600/25 active:scale-95"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {checkoutStep === 'checkout' && (
          <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl animate-fade-in space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h2 className="text-xl font-bold text-white">Checkout Integration</h2>
              <button 
                onClick={() => setCheckoutStep('shop')}
                className="text-xs text-slate-400 hover:text-white font-semibold"
              >
                Back to Shop
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Billing Email</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Test Card Details</label>
                <input 
                  type="text" 
                  required 
                  value={card}
                  onChange={e => setCard(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" 
                />
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-400">Total Order Amount:</span>
                <span className="text-lg font-black text-white">${total}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-sm text-white flex items-center justify-center transition-all hover:shadow-lg hover:shadow-indigo-600/25 active:scale-95"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Purchase & Download</span>
                )}
              </button>
            </form>
          </div>
        )}

        {checkoutStep === 'success' && (
          <div className="max-w-md mx-auto text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl animate-fade-in space-y-5">
            <div className="mx-auto h-16 w-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Order Confirmed!</h2>
              <p className="text-sm text-slate-400">Thank you for your purchase. We sent a receipt to {email} with download keys.</p>
            </div>
            <button
              onClick={() => setCheckoutStep('shop')}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </main>

      {/* Cart Sidebar Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fade-in" onClick={() => setIsCartOpen(false)}>
          <div 
            className="w-full max-w-md h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">Your Cart</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-20 text-center text-slate-400 text-sm">
                  Your cart is empty.
                </div>
              ) : (
                <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh] pr-1">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.product.title}</h4>
                        <span className="text-xs text-indigo-400 font-semibold mt-0.5 block">${item.product.price} &times; {item.qty}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-xs text-red-400 hover:text-red-300 font-semibold p-1 hover:bg-red-500/10 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="flex justify-between text-base font-bold text-white">
                  <span>Subtotal:</span>
                  <span>${total}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('checkout');
                  }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-bold text-white flex items-center justify-center transition-all hover:shadow-lg hover:shadow-indigo-600/25"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
