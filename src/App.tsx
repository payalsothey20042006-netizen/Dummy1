import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { CartDrawer } from './components/CartDrawer';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Sitemap } from './pages/Sitemap';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
