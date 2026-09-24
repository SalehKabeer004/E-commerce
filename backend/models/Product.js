import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide product title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: 0,
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['Editor Picks', 'Best Sales', 'Most Commented', 'Newest', 'General'],
      default: 'General',
    },
    coverImage: {
      type: String,
      required: [true, 'Please provide cover image URL'],
    },
    digitalFileUrl: {
      type: String,
      required: [true, 'Please provide digital file download link/key'],
      select: false, // Security: Direct fetch par expose nahi hoga Jab tak select na kiya jaye
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      default: 'Unknown Author',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', productSchema);