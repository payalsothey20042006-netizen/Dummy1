import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Contact() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FitClub",
    "image": "https://www.fitclub.netlify.app/logo.png",
    "@id": "https://www.fitclub.netlify.app",
    "url": "https://www.fitclub.netlify.app/contact",
    "telephone": "+15551234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fitness Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Contact Us - FitClub | Gym Equipment & Fitness Products Support</title>
        <meta name="description" content="Get in touch with FitClub. We'd love to hear from you. Contact our fitness experts with any questions about our products, gym equipment, and workout accessories." />
        <meta name="keywords" content="contact FitClub, fitness support, gym equipment help, workout accessories support" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">We'd love to hear from you!</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">FitClub Headquarters</h3>
                <p className="mt-1 text-gray-600">123 Fitness Avenue<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a href="mailto:support@fitclub.com" className="mt-1 text-blue-600 hover:underline">support@fitclub.com</a>
              </div>
            </div>

            <div className="flex items-start pt-4 border-t border-gray-200">
              <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-slate-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <div className="mt-1 space-y-1 text-gray-600">
                  <p>Monday - Friday: <span className="font-medium">9:00 AM - 6:00 PM</span></p>
                  <p>Saturday: <span className="font-medium">10:00 AM - 4:00 PM</span></p>
                  <p>Sunday: <span className="text-red-500 font-medium">Closed</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="John Doe" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="How can we help?" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your message here..."></textarea>
            </div>
            
            <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
