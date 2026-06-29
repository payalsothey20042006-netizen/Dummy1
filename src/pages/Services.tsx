import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Users, Clock } from 'lucide-react';

export function Services() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gym & Fitness Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FitClub"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Our Services | FitClub - Personal Training & Classes</title>
        <meta name="description" content="Discover our range of fitness services including personal training, group classes, and customized workout plans at FitClub." />
        <meta name="keywords" content="fitness services, personal training, group classes, fitness club, gym services" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Premium Fitness Services</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <Users className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Personal Training</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Get personalized guidance from our certified expert trainers. We create custom workout and nutrition plans tailored to your specific fitness goals.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <Activity className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Group Classes</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Join our high-energy group fitness classes. From HIIT to Yoga and Pilates, we offer a wide variety of classes designed for all fitness levels.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <Clock className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">24/7 Gym Access</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Workout on your own schedule. Our facilities are open 24/7 with state-of-the-art equipment, secure access, and a clean environment.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <ShieldCheck className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Nutrition Coaching</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Fuel your body properly with expert nutrition advice. Our nutrition coaches help you build sustainable eating habits to complement your training.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
