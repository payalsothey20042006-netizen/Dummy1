import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Products() {
  const { addToCart } = useCart();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.fitclub.netlify.app/products#${product.id}`,
      "name": product.name
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Premium Fitness Products & Gym Equipment | FitClub</title>
        <meta name="description" content="Shop our premium selection of fitness equipment, workout accessories, resistance bands, dumbbells, and smart trackers to boost your training." />
        <meta name="keywords" content="fitness products, gym equipment, workout accessories, buy dumbbells, resistance bands, smart tracker" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Premium Fitness Products</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className="h-48 overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={`${product.name} - fitness product`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">{product.name}</h3>
                <span className="text-lg font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">{product.price}</span>
              </div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-600 flex items-start text-sm">
                    <span className="text-blue-400 mr-2 font-bold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => addToCart(product)}
                className="w-full mt-auto flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
