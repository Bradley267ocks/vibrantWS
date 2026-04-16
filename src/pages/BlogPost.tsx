import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../blog/posts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%20just%20read%20your%20blog%20post%20about%20" + encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-dark-primary text-white font-sans selection:bg-electric-blue selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-electric-blue transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-6 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2 bg-dark-secondary px-3 py-1 rounded-full border border-white/10"><Tag size={14} className="text-electric-blue" /> {post.category}</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight text-white">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 p-4 border-y border-white/10">
              <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center text-black font-black">
                V
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author}</p>
                <p className="text-xs text-text-secondary">Expert Web Strategist</p>
              </div>
            </div>
          </motion.div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div 
            className="prose prose-invert prose-neon max-w-none mb-16 blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="bg-dark-secondary rounded-[2.5rem] p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4 text-white">Ready to grow your business?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We've helped hundreds of South African businesses get online and attract more customers. Let's do the same for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-electric-blue text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link 
                to="/#contact"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
