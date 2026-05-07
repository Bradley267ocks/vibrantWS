import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../blog/posts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white font-sans selection:bg-electric-blue selection:text-black">
      <Helmet>
        <title>Business Growth Blog | Web Design & SEO Tips South Africa</title>
        <meta name="description" content="Expert insights on website design, local SEO, Google Maps ranking, and digital marketing strategies for South African entrepreneurs." />
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6 text-white"
            >
              Vibrant <span className="text-electric-blue">Insights</span>
            </motion.h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Expert advice on web design, digital marketing, and business growth for South African entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-dark-secondary border border-white/10 rounded-3xl overflow-hidden hover:border-electric-blue/30 transition-all shadow-sm"
              >
                <Link to={`/blog/${post.id}`} className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-text-secondary mb-4 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1"><Tag size={12} className="text-electric-blue" /> {post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors leading-tight text-white">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-electric-blue font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
