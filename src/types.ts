export type PageType = 'home' | 'about' | 'products' | 'blog' | 'contact';

export interface Product {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  features: string[];
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
