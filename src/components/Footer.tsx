import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl text-white tracking-tight">FitClub</span>
            <p className="text-sm mt-1">Your Partner in Health and Fitness. 💪🏋️‍♂️</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FitClub. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
