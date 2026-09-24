import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const sampleProducts = [
  {
    title: "Thunder Stunt",
    description: "An action-packed adventure book with high-velocity story progression.",
    price: 54.78,
    originalPrice: 70.00,
    category: "Best Sales",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    digitalFileUrl: "https://example.com/files/thunder-stunt.pdf",
    rating: 4.8,
    reviewCount: 120,
    author: "Thunder Author",
    isFeatured: true
  },
  {
    title: "All Good News",
    description: "Inspiring stories and motivational literature for developers and creators.",
    price: 15.63,
    originalPrice: 16.00,
    category: "Editor Picks",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    digitalFileUrl: "https://example.com/files/all-good-news.pdf",
    rating: 4.5,
    reviewCount: 85,
    author: "Kevin Smiley",
    isFeatured: true
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Sample Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();