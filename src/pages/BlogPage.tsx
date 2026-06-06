import { Route } from '../types';
import { blogPosts } from '../data/blog';
import { Calendar, Clock, Bookmark, ArrowRight, BookOpen } from 'lucide-react';
import { assets } from '../utils/images';

interface BlogPageProps {
  onNavigate: (route: Route) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <div className="w-full">
      {/* Blog Page Header */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase">Contractor Advisory & News</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Plumbing Tips & News
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Homeowner tips, DIY winterizing guides, and technical insights from Travis Zohner on maintaining flawless peak performance.
          </p>
        </div>
      </section>

      {/* Grid listing of posts */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    />
                    <div className="absolute top-4 right-4 bg-brand-navy/90 text-brand-amber text-[9px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow">
                      {post.category}
                    </div>
                  </div>

                  {/* Metadata and Title */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex gap-4 text-[10px] text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg uppercase text-brand-navy leading-snug font-bold group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read item */}
                <div className="p-6 pt-0">
                  <div className="border-t border-gray-200/50 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
                      <BookOpen className="w-4 h-4 text-brand-orange" />
                      <span>Post Placeholder</span>
                    </div>
                    <button
                      onClick={() => alert(`This is a demo placeholder for the full "${post.title}" blog post. In a deployed environment, this would load the complete article page.`)}
                      className="text-brand-orange group-hover:text-brand-navy text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action panel */}
      <section className="bg-brand-navy text-white py-16 px-6 md:px-8 text-center border-t border-brand-orange">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-medium uppercase text-xl sm:text-2xl text-white tracking-wider">
            Do You Need Proactive Maintenance Today?
          </h2>
          <p className="text-xs text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
            Don’t wait for a freezing winter burst before scheduling lines inspections. Save yourself time and money by booking a checkup with Travis.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy font-display uppercase font-bold tracking-widest text-xs rounded transition-all cursor-pointer uppercase"
            >
              Get a Free Line Inspection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
