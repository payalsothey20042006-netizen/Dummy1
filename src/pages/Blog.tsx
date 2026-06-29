import { BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Blog() {
  const posts = [
    {
      title: '5 Benefits of Daily Exercise',
      content: 'Regular exercise improves cardiovascular health, boosts energy levels, reduces stress, and helps maintain a healthy weight.',
      category: 'Health',
      date: 'Oct 12, 2023'
    },
    {
      title: "Beginner's Guide to Strength Training",
      content: 'Strength training helps build muscle, improve posture, and increase metabolism. Start with light weights and proper form.',
      category: 'Training',
      date: 'Oct 15, 2023'
    },
    {
      title: 'Best Nutrition Tips for Fitness Enthusiasts',
      content: '• Stay hydrated\n• Eat balanced meals\n• Include protein in every meal\n• Avoid excessive processed foods',
      category: 'Nutrition',
      date: 'Oct 18, 2023'
    },
    {
      title: 'How to Stay Motivated During Your Fitness Journey',
      content: 'Set realistic goals, track your progress, celebrate small achievements, and find a workout partner.',
      category: 'Mindset',
      date: 'Oct 22, 2023'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "FitClub Blog",
    "description": "Fitness Tips & Articles",
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": new Date(post.date).toISOString(),
      "articleSection": post.category
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Blog - Fitness Tips & Articles | FitClub</title>
        <meta name="description" content="Read our latest blog posts for fitness tips, nutrition advice, and motivation guides from the experts at FitClub." />
        <meta name="keywords" content="fitness blog, workout tips, gym advice, health and wellness articles, FitClub blog" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
          <BookOpen className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Fitness Tips & Articles</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="space-y-10">
        {posts.map((post, index) => (
          <motion.article 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
            <button className="mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center">
              Read more <span className="ml-1">→</span>
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
