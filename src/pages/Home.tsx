// import { ArrowRight, CheckCircle2, ShoppingBag, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import { motion } from 'motion/react';

// export function Home() {
//   const navigate = useNavigate();

//   const schemaMarkup = {
//     "@context": "https://schema.org",
//     "@type": "SportsStore",
//     "name": "FitClub",
//     "description": "Premium fitness products, gym equipment, workout accessories, and training essentials.",
//     "url": "https://www.fitclub.netlify.app",
//     "logo": "https://www.fitclub.netlify.app/logo.png",
//     "priceRange": "$$",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "123 Fitness Avenue",
//       "addressLocality": "New York",
//       "addressRegion": "NY",
//       "postalCode": "10001",
//       "addressCountry": "US"
//     },
//     "telephone": "+1-555-123-4567"
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Helmet>
//         <title>Fitness Products, Gym Equipment & Workout Accessories | FitClub</title>
//         <meta name="description" content="Discover premium fitness products, gym equipment, workout accessories, and training essentials at FitClub. Transform your fitness journey today." />
//         <meta name="keywords" content="fitness products, gym equipment, workout accessories, home gym, fitness gear, FitClub" />
//         <script type="application/ld+json">
//           {JSON.stringify(schemaMarkup)}
//         </script>
//       </Helmet>
//       {/* Hero Section */}
//       <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32">
//         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
//             Welcome to <span className="text-blue-500">FitClub</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
//             Transform Your Fitness Journey with FitClub. At FitClub, we believe fitness is a lifestyle. Our premium fitness products and gym equipment are designed to help you achieve your health and wellness goals, whether you're a beginner or a professional athlete.
//           </p>
//           <button 
//             onClick={() => navigate('/products')}
//             className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg"
//           >
//             Start Your Fitness Journey Today!
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </button>
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">Why Choose FitClub for Workout Accessories?</h2>
//             <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'High-quality equipment', icon: Star },
//               { title: 'Affordable pricing', icon: CheckCircle2 },
//               { title: 'Expert fitness guidance', icon: CheckCircle2 },
//               { title: 'Fast & reliable shipping', icon: CheckCircle2 },
//               { title: '24/7 customer support', icon: CheckCircle2 },
//             ].map((feature, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
//               >
//                 <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
//                   <feature.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products Mini-Section */}
//       <section className="py-20 bg-white">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 focus-visible:outline-none text-center"
//         >
//            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Fitness Gear & Products</h2>
//            <p className="text-gray-600 mb-10">Discover our best-selling gym equipment and fitness accessories.</p>
           
//            <div className="flex flex-wrap justify-center gap-4 mb-10">
//               {['Resistance Bands Set', 'Adjustable Dumbbells', 'Yoga Mat Pro', 'Smart Fitness Tracker', 'Protein Shaker Bottle'].map((product, idx) => (
//                 <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200">
//                   {product}
//                 </span>
//               ))}
//            </div>
           
//            <button 
//               onClick={() => navigate('/products')}
//               className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
//             >
//               <ShoppingBag className="mr-2 h-5 w-5" />
//               Shop All Products
//             </button>
//         </motion.div>
//         <!-- FAQ Section -->
// <section class="faq-section" id="faq">
//     <div class="faq-container">

//         <h2>Frequently Asked Questions</h2>
//         <p class="faq-subtitle">
//             Find answers to the most common questions about FitClub.
//         </p>

//         <div class="faq-item">
//             <button class="faq-question">
//                 What is FitClub?
//                 <span>+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>
//                     FitClub is an online fitness platform where you can
//                     explore fitness products, gym equipment and workout
//                     accessories.
//                 </p>
//             </div>
//         </div>

//         <div class="faq-item">
//             <button class="faq-question">
//                 What type of fitness products do you offer?
//                 <span>+</span>
//             </button>
//             <div className="faq-answer">
//                 <p>
//                     We offer a variety of fitness products including workout
//                     equipment, gym accessories and fitness essentials.
//                 </p>
//             </div>
//         </div>

//         <div class="faq-item">
//             <button class="faq-question">
//                 Are the products suitable for beginners?
//                 <span>+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>
//                     Yes, our fitness products are suitable for beginners as
//                     well as experienced fitness enthusiasts.
//                 </p>
//             </div>
//         </div>

//         <div class="faq-item">
//             <button class="faq-question">
//                 How can I choose the right fitness equipment?
//                 <span>+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>
//                     Choose equipment according to your fitness goal, available
//                     space, workout type and experience level.
//                 </p>
//             </div>
//         </div>

//         <div class="faq-item">
//             <button class="faq-question">
//                 Can I use FitClub products for home workouts?
//                 <span>+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>
//                     Yes. Many of our fitness accessories and equipment are
//                     suitable for convenient home workouts.
//                 </p>
//             </div>
//         </div>

//         <div class="faq-item">
//             <button class="faq-question">
//                 How can I contact FitClub?
//                 <span>+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>
//                     You can contact FitClub through the contact section
//                     available on our website.
//                 </p>
//             </div>
//         </div>

//     </div>
//       </section>
//     </div>
//   );
// }
import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShoppingBag, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: 'What is FitClub?',
      answer:
        'FitClub is an online fitness platform where you can explore fitness products, gym equipment, workout accessories, and training essentials.'
    },
    {
      question: 'What type of fitness products do you offer?',
      answer:
        'We offer a variety of fitness products including workout equipment, gym accessories, home workout essentials, and fitness gear.'
    },
    {
      question: 'Are the products suitable for beginners?',
      answer:
        'Yes, our fitness products are suitable for beginners as well as experienced fitness enthusiasts.'
    },
    {
      question: 'How can I choose the right fitness equipment?',
      answer:
        'Choose fitness equipment according to your fitness goal, available space, workout type, and experience level.'
    },
    {
      question: 'Can I use FitClub products for home workouts?',
      answer:
        'Yes. Many of our fitness accessories and equipment are suitable for convenient and effective home workouts.'
    },
    {
      question: 'How can I contact FitClub?',
      answer:
        'You can contact FitClub through the Contact Us section available on our website.'
    }
  ];

  // SEO + Organization Schema
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'SportsStore',
    name: 'FitClub',
    description:
      'Premium fitness products, gym equipment, workout accessories, and training essentials.',
    url: 'https://fitclub-fitnessproducts.vercel.app/',
    logo: 'https://fitclub-fitnessproducts.vercel.app/logo.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fitness Avenue',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    telephone: '+1-555-123-4567'
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const features = [
    {
      title: 'High-quality equipment',
      icon: Star
    },
    {
      title: 'Affordable pricing',
      icon: CheckCircle2
    },
    {
      title: 'Expert fitness guidance',
      icon: CheckCircle2
    },
    {
      title: 'Fast & reliable shipping',
      icon: CheckCircle2
    },
    {
      title: '24/7 customer support',
      icon: CheckCircle2
    }
  ];

  const products = [
    'Resistance Bands Set',
    'Adjustable Dumbbells',
    'Yoga Mat Pro',
    'Smart Fitness Tracker',
    'Protein Shaker Bottle'
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* SEO */}
      <Helmet>
        <title>
          Fitness Products, Gym Equipment & Workout Accessories | FitClub
        </title>

        <meta
          name="description"
          content="Discover premium fitness products, gym equipment, workout accessories, and training essentials at FitClub. Transform your fitness journey today."
        />

        <meta
          name="keywords"
          content="fitness products, gym equipment, workout accessories, home gym, fitness gear, FitClub"
        />

        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32">

        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')"
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        >

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to{' '}
            <span className="text-blue-500">
              FitClub
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Transform Your Fitness Journey with FitClub. At FitClub, we
            believe fitness is a lifestyle. Our premium fitness products and
            gym equipment are designed to help you achieve your health and
            wellness goals, whether you're a beginner or a professional
            athlete.
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose FitClub for Workout Accessories?
            </h2>

            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {features.map((feature, idx) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >

                  <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">

                    <Icon className="h-6 w-6" />

                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-20 bg-white">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Fitness Gear & Products
          </h2>

          <p className="text-gray-600 mb-10">
            Discover our best-selling gym equipment and fitness accessories.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">

            {products.map((product, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
              >
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

      {/* ================= FAQ SECTION ================= */}
      <section
        id="faq"
        className="py-20 bg-gray-50"
      >

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* FAQ Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />

            <p className="text-gray-600 mt-5">
              Find answers to the most common questions about FitClub.
            </p>

          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >

                {/* Question Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenFAQ(
                      openFAQ === index ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-expanded={openFAQ === index}
                >

                  <span>
                    {faq.question}
                  </span>

                  <span className="text-2xl text-blue-600 ml-4 flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>

                </button>

                {/* Answer */}
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5"
                  >

                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>

                  </motion.div>
                )}

              </motion.div>

            ))}

          </div>

        </div>
      </section>

    </div>
  );
}