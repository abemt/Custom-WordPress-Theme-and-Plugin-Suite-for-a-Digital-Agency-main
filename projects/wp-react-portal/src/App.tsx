import React, { useState } from 'react';

interface MockResponse {
  query: string;
  json: string;
  render: React.ReactNode;
}

export default function App() {
  const [selectedTab, setSelectedTab] = useState<'preview' | 'json'>('preview');
  const [loading, setLoading] = useState(false);
  const [activeQueryKey, setActiveQueryKey] = useState<string>('posts');

  const mockQueries: Record<string, MockResponse> = {
    posts: {
      query: `query GetRecentPosts {
  posts(first: 3) {
    nodes {
      id
      title
      excerpt
      date
      author {
        node {
          name
        }
      }
    }
  }
}`,
      json: JSON.stringify({
        data: {
          posts: {
            nodes: [
              {
                id: "post-1",
                title: "Next.js 15 and Headless WordPress",
                excerpt: "Explore how Next.js 15 Incremental Static Regeneration combines with WPGraphQL...",
                date: "2026-06-10",
                author: { node: { name: "Alex Johnson" } }
              },
              {
                id: "post-2",
                title: "Optimizing GraphQL Queries in WordPress",
                excerpt: "Deep dive into query batching, persisted queries, and cache-control headers in WP...",
                date: "2026-06-08",
                author: { node: { name: "Maria Garcia" } }
              },
              {
                id: "post-3",
                title: "React Server Components inside Gutenberg",
                excerpt: "Translating static block layouts into fully interactive React components at runtime...",
                date: "2026-06-05",
                author: { node: { name: "Priya Patel" } }
              }
            ]
          }
        }
      }, null, 2),
      render: (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Decoupled Blog Feed</h2>
          <div className="grid gap-4">
            {[
              { title: "Next.js 15 and Headless WordPress", date: "June 10, 2026", author: "Alex Johnson", excerpt: "Explore how Next.js 15 Incremental Static Regeneration combines with WPGraphQL to deliver millisecond page rendering speeds globally." },
              { title: "Optimizing GraphQL Queries in WordPress", date: "June 8, 2026", author: "Maria Garcia", excerpt: "Deep dive into query batching, persisted queries, and cache-control headers in WP to bypass local database bottlenecks." },
              { title: "React Server Components inside Gutenberg", date: "June 5, 2026", author: "Priya Patel", excerpt: "Translating static block layouts into fully interactive React components at runtime via standard block-to-component parser pipelines." }
            ].map((p, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-teal-500/50 transition-colors shadow-sm">
                <div className="flex justify-between items-center text-xs text-teal-600 font-semibold mb-2">
                  <span>{p.date}</span>
                  <span>By {p.author}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-500 font-light mt-2 leading-relaxed">{p.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    blocks: {
      query: `query GetGutenbergBlocks($id: ID!) {
  page(id: $id, idType: DATABASE_ID) {
    title
    blocks {
      name
      attributesJSON
      innerBlocks {
        name
        attributesJSON
      }
    }
  }
}`,
      json: JSON.stringify({
        data: {
          page: {
            title: "Homepage Layout",
            blocks: [
              {
                name: "core/cover",
                attributesJSON: "{\"url\":\"https://picsum.photos/seed/hero/800/400\",\"overlayColor\":\"slate-900\",\"dimRatio\":70}",
                innerBlocks: [
                  {
                    name: "core/heading",
                    attributesJSON: "{\"content\":\"Build Decoupled Frontends\",\"level\":1}"
                  }
                ]
              },
              {
                name: "acf/features-grid",
                attributesJSON: "{\"columns\":3}",
                innerBlocks: []
              }
            ]
          }
        }
      }, null, 2),
      render: (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Dynamic Block Renderer</h2>
          <div className="relative rounded-xl overflow-hidden border border-slate-250 bg-white shadow-sm">
            {/* Mock Cover Block */}
            <div className="relative h-48 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/800/400')" }}>
              <div className="absolute inset-0 bg-slate-900/70"></div>
              <h3 className="relative z-10 text-2xl font-black text-white">Build Decoupled Frontends</h3>
            </div>
            {/* Mock ACF Features Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50">
              {['Gutenberg Integration', 'GraphQL Query Cache', 'Tailwind Utilities'].map((feat, idx) => (
                <div key={idx} className="p-4 bg-white border border-slate-200/60 rounded-lg text-center shadow-sm">
                  <h4 className="text-sm font-bold text-teal-600 mb-1">{feat}</h4>
                  <p className="text-xs text-slate-500 font-light">Parsed block element rendering dynamically.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    seo: {
      query: `query GetSEOMetadata($uri: String!) {
  nodeByUri(uri: $uri) {
    ... on Page {
      seo {
        title
        metaDesc
        canonical
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
}`,
      json: JSON.stringify({
        data: {
          nodeByUri: {
            seo: {
              title: "Headless Portal - The Future of WordPress Architectures",
              metaDesc: "Leverage Next.js and Gutenberg to deploy fully custom digital portals at scale with optimized site speeds.",
              canonical: "https://wp-react-portal.abemt.dev",
              opengraphImage: {
                sourceUrl: "https://picsum.photos/seed/ogimage/1200/630"
              }
            }
          }
        }
      }, null, 2),
      render: (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">RankMath/Yoast SEO Parser</h2>
          <div className="p-6 bg-white border border-slate-200/80 rounded-xl space-y-4 shadow-sm">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">Browser Title</span>
              <span className="text-sm text-teal-600 font-bold">Headless Portal - The Future of WordPress Architectures</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">Meta Description</span>
              <p className="text-sm text-slate-600 font-light mt-1">Leverage Next.js and Gutenberg to deploy fully custom digital portals at scale with optimized site speeds.</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">OpenGraph Banner</span>
              <img src="https://picsum.photos/seed/ogimage/600/315" alt="OG Preview" className="mt-2 w-full h-36 object-cover rounded-lg border border-slate-100" />
            </div>
          </div>
        </div>
      )
    }
  };

  const handleExecute = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1.071c3.407.13 6.071 2.795 6.071 6.202v2.727A2 2 0 0119.273 16H4.727A2 2 0 013 14V11.27c0-3.407 2.664-6.071 6.071-6.202V4z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight text-slate-900">WP-GraphQL React Portal</h1>
            <p className="text-xs text-slate-500 font-light">Headless WordPress & Next.js client demo</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="https://github.com/abemt/Custom-WordPress-Theme-and-Plugin-Suite-for-a-Digital-Agency-main" className="text-sm font-bold text-slate-500 hover:text-teal-600 flex items-center transition-colors">
            Back to Hub
          </a>
        </div>
      </header>

      {/* Main Sandbox */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 overflow-hidden">
        {/* Left pane: Query Selector & Code */}
        <div className="p-6 bg-white flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">GraphQL Endpoint Query</h2>
            <div className="flex space-x-1.5">
              {(['posts', 'blocks', 'seo'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveQueryKey(key);
                    handleExecute();
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                    activeQueryKey === key
                      ? 'bg-slate-50 border-teal-500 text-teal-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[300px] bg-slate-50 rounded-xl border border-slate-200/80 p-4 font-mono text-sm overflow-auto text-slate-800 relative shadow-inner">
            <pre className="whitespace-pre-wrap">{mockQueries[activeQueryKey].query}</pre>
            <div className="absolute top-4 right-4 bg-teal-50 text-teal-600 text-xs px-2.5 py-1 rounded-full font-bold border border-teal-200/30 select-none">
              Query Editor
            </div>
          </div>

          <button
            onClick={handleExecute}
            disabled={loading}
            className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-slate-900/10"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Run GraphQL Query</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Right pane: Results Renderer */}
        <div className="p-6 bg-slate-50/70 backdrop-blur-sm flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedTab('preview')}
                className={`pb-3 px-1 text-sm font-bold border-b-2 transition-all ${
                  selectedTab === 'preview'
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                React Preview UI
              </button>
              <button
                onClick={() => setSelectedTab('json')}
                className={`pb-3 px-1 text-sm font-bold border-b-2 transition-all ${
                  selectedTab === 'json'
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                JSON Payload Response
              </button>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Sub-second load times</span>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-slate-200/80 p-5 overflow-auto relative min-h-[300px] shadow-sm">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50/20 backdrop-blur-sm">
                <div className="h-8 w-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : selectedTab === 'preview' ? (
              <div className="animate-fade-in">{mockQueries[activeQueryKey].render}</div>
            ) : (
              <pre className="font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed animate-fade-in">
                {mockQueries[activeQueryKey].json}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
