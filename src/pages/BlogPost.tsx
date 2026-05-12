import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>{post.title} | Vibrant Web Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="author" content={post.author} />
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-electric-blue transition-colors mb-8 font-bold text-sm uppercase tracking-widest cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
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

          <div className="rounded-3xl overflow-hidden mb-12 border border-white/10 bg-dark-secondary">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-contain block mx-auto"
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
                className="w-full sm:w-auto bg-electric-blue text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link 
                to="/get-started"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 active:scale-95 transition-all text-center cursor-pointer"
              >
                Get Started
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
