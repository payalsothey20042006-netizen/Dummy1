import { ArrowRight, CheckCircle2, ShoppingBag, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": "FitClub",
    "description": "Premium fitness products, gym equipment, workout accessories, and training essentials.",
    "url": "https://www.fitclub.netlify.app",
    "logo": "https://www.fitclub.netlify.app/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fitness Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Fitness Products, Gym Equipment & Workout Accessories | FitClub</title>
        <meta name="description" content="Discover premium fitness products, gym equipment, workout accessories, and training essentials at FitClub. Transform your fitness journey today." />
        <meta name="keywords" content="fitness products, gym equipment, workout accessories, home gym, fitness gear, FitClub" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to <span className="text-blue-500">FitClub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Transform Your Fitness Journey with FitClub. At FitClub, we believe fitness is a lifestyle. Our premium fitness products and gym equipment are designed to help you achieve your health and wellness goals, whether you're a beginner or a professional athlete.
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            Start Your Fitness Journey Today!
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose FitClub for Workout Accessories?</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'High-quality equipment', icon: Star },
              { title: 'Affordable pricing', icon: CheckCircle2 },
              { title: 'Expert fitness guidance', icon: CheckCircle2 },
              { title: 'Fast & reliable shipping', icon: CheckCircle2 },
              { title: '24/7 customer support', icon: CheckCircle2 },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Mini-Section */}
      <section className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 focus-visible:outline-none text-center"
        >
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Fitness Gear & Products</h2>
           <p className="text-gray-600 mb-10">Discover our best-selling gym equipment and fitness accessories.</p>
           
           <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Resistance Bands Set', 'Adjustable Dumbbells', 'Yoga Mat Pro', 'Smart Fitness Tracker', 'Protein Shaker Bottle'].map((product, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200">
                  {product}
                </span>
              ))}
           </div>
           
           <button 
              onClick={() => navigate('/products')}
              className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop All Products
            </button>
        </motion.div>
      </section>
    </div>
  );
}
