import { Heart, ShieldCheck, Target, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function About() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FitClub",
    "description": "Learn about FitClub's mission to make fitness accessible and enjoyable for everyone with premium health products.",
    "publisher": {
      "@type": "Organization",
      "name": "FitClub"
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>About FitClub - Our Mission and Vision</title>
        <meta name="description" content="Learn about FitClub's mission to make fitness accessible and enjoyable for everyone with premium health products, gym equipment, and workout accessories." />
        <meta name="keywords" content="about FitClub, fitness mission, gym equipment company, fitness products vision" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">About FitClub</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg prose-blue mx-auto text-gray-600 mb-16 text-center"
      >
        <p className="text-xl leading-relaxed">
          FitClub was founded with a simple mission: to make fitness accessible and enjoyable for everyone. Since our beginning, we have helped thousands of customers improve their health through innovative fitness products, gym equipment, and workout accessories.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <Target className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-600">
            To become a trusted global fitness brand that inspires healthier lifestyles by providing the best gym equipment and workout accessories.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center text-blue-600 mb-4">
            <Heart className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0">•</span>
              Deliver premium fitness products and gear.
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0">•</span>
              Promote physical and mental wellness.
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0">•</span>
              Support customers in achieving their fitness goals.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Quality Gym Equipment', 'Innovation', 'Customer Satisfaction', 'Integrity', 'Community'].map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-full border border-blue-100 flex items-center"
            >
              <ShieldCheck className="h-5 w-5 mr-2 opacity-70" />
              {value}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white p-12 rounded-3xl text-center relative overflow-hidden"
      >
        <Users className="absolute -right-10 -bottom-10 h-64 w-64 text-slate-800 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team consists of fitness enthusiasts, certified trainers, and product specialists dedicated to helping you succeed with the right workout accessories and equipment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
