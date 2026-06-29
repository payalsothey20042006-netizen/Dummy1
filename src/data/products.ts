import { Product } from '../types';
import adjustableDumbbellsImg from '../assets/images/adjustable_dumbbells_1781759634763.jpg';
import fitnessTrackerImg from '../assets/images/fitness_tracker_1781759665915.jpg';
import resistanceBandsImg from '../assets/images/resistance_bands_1781759621370.jpg';
import proteinShakerImg from '../assets/images/shaker_bottle_1781759678802.jpg';
import yogaMatImg from '../assets/images/yoga_mat_1781759651142.jpg';

export const products: Product[] = [
  {
    id: 'resistance-bands',
    name: 'FitClub Resistance Bands',
    price: '$19.99',
    numericPrice: 19.99,
    features: ['Multiple resistance levels', 'Durable latex material', 'Suitable for full-body workouts'],
    image: resistanceBandsImg
  },
  {
    id: 'adjustable-dumbbells',
    name: 'Adjustable Dumbbells',
    price: '$89.99',
    numericPrice: 89.99,
    features: ['Weight range: 5–50 lbs', 'Space-saving design', 'Easy adjustment mechanism'],
    image: adjustableDumbbellsImg
  },
  {
    id: 'premium-yoga-mat',
    name: 'Premium Yoga Mat',
    price: '$29.99',
    numericPrice: 29.99,
    features: ['Non-slip surface', 'Eco-friendly material', 'Extra cushioning'],
    image: yogaMatImg
  },
  {
    id: 'smart-fitness-tracker',
    name: 'Smart Fitness Tracker',
    price: '$59.99',
    numericPrice: 59.99,
    features: ['Heart rate monitoring', 'Step tracking', 'Sleep analysis'],
    image: fitnessTrackerImg
  },
  {
    id: 'protein-shaker-bottle',
    name: 'Protein Shaker Bottle',
    price: '$12.99',
    numericPrice: 12.99,
    features: ['Leak-proof design', 'BPA-free material', 'Easy mixing technology'],
    image: proteinShakerImg
  }
];
