import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';

export function Sitemap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <Helmet>
        <title>Sitemap - FitClub</title>
        <meta name="description" content="Navigate through FitClub's website easily with our HTML sitemap. Find links to all our products, blog posts, and informational pages." />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Sitemap</h1>
        <div className="w-24 h-1 bg-blue-500 mt-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Main Pages</h2>
          <ul className="space-y-3">
            <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-blue-600 hover:underline">About Us</Link></li>
            <li><Link to="/products" className="text-blue-600 hover:underline">Products</Link></li>
            <li><Link to="/blog" className="text-blue-600 hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Products</h2>
          <ul className="space-y-3">
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/products#${product.id}`} className="text-blue-600 hover:underline">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Blog Posts</h2>
          <ul className="space-y-3">
            <li><Link to="/blog" className="text-blue-600 hover:underline">10 Essential Home Gym Equipment Pieces for Beginners</Link></li>
            <li><Link to="/blog" className="text-blue-600 hover:underline">How to Choose the Right Resistance Bands</Link></li>
            <li><Link to="/blog" className="text-blue-600 hover:underline">The Benefits of Tracking Your Fitness Journey</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Legal</h2>
          <ul className="space-y-3">
            <li><span className="text-gray-500 cursor-not-allowed">Privacy Policy</span></li>
            <li><span className="text-gray-500 cursor-not-allowed">Terms of Service</span></li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
