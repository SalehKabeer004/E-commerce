'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronDown, Heart, Minus, Plus, ShoppingCart, Star, Truck, ArrowLeft } from 'lucide-react'

interface Product {
  _id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  category: string
  coverImage: string
  rating: number
  reviewCount?: number
  author: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function Stars({ rating = 4.5 }: { rating?: number }) {
  return (
    <span className="flex items-center gap-1 text-sm font-bold text-[#ff775e]">
      <span className="tracking-[2px]">★★★★★</span>
      <span className="text-slate-500">{rating}</span>
    </span>
  )
}

export default function BookooDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  // 1. Fetch Dynamic Book from Express Backend
  useEffect(() => {
    if (!id) return
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  // 2. Direct Stripe Payment Session Trigger
  const handleCheckout = async () => {
    if (!product) return;
    setCheckoutLoading(true);
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/checkout/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: [
            {
              _id: product._id,
              title: product.title || product.title,
              price: product.price,
              coverImage: product.coverImage,
              quantity: quantity,
            },
          ],
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server returned non-JSON error:', errorText);
        alert('Backend endpoint missing ya server error hai.');
        return;
      }
  
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading || !product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-400">
        Loading book details...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-slate-500">
        <p className="text-lg font-bold">Product not found.</p>
        <Link href="/books" className="mt-4 text-sm font-bold text-violet-600 hover:underline">
          Return to Collection
        </Link>
      </div>
    )
  }

  return (
    <main className="mx-auto max-w-[1240px] px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
        <Link className="text-violet-500" href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link className="text-violet-500" href="/books">Books</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{product.title}</span>
      </nav>

      <section className="grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* Book Cover Image */}
        <div className="relative mx-auto flex h-[430px] w-[300px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_35px_rgba(27,36,64,0.2)] sm:h-[500px] sm:w-[350px] lg:mx-0 lg:h-[500px] lg:w-[350px]">
          <Image
            src={product.coverImage || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'}
            alt={product.title || 'Book Cover'}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details Info */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500">{product.category}</span>
              <h1 className="mt-1 text-4xl font-black tracking-tight text-[#1b2440] sm:text-5xl">{product.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Stars rating={product.rating} />
                <span className="text-sm font-medium text-slate-400">{product.reviewCount || 120} Reviews</span>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-4xl text-base leading-7 text-slate-500">
            {product.description}
          </p>

          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-5 border-b border-dashed border-slate-200 pb-7 sm:grid-cols-4">
            <div>
              <p className="text-sm text-slate-400">Written by</p>
              <p className="mt-1 text-base font-bold text-[#1b2440]">{product.author}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Publisher</p>
              <p className="mt-1 text-base font-bold text-[#1b2440]">Printarea Studios</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Year</p>
              <p className="mt-1 text-base font-bold text-[#1b2440]">2026</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Format</p>
              <p className="mt-1 text-base font-bold text-[#1b2440]">Digital PDF</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="text-3xl font-black text-[#1b2440]">
              ${product.price}
              {product.originalPrice && product.originalPrice > product.price && (
                <del className="ml-2 text-sm font-medium text-slate-400">${product.originalPrice}</del>
              )}
            </p>
            <span className="ml-auto inline-flex items-center gap-2 rounded-lg bg-violet-100 px-4 py-2 text-sm font-bold text-violet-600">
              <Truck className="size-4" /> INSTANT DOWNLOAD
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
              <Check className="size-4" /> IN STOCK
            </span>
          </div>

          {/* Quantity & Buy Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-xl border border-slate-200 p-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 text-violet-600"
              >
                <Minus className="size-4" />
              </button>
              <span className="min-w-10 text-center text-base font-bold">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 text-violet-600"
              >
                <Plus className="size-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="flex items-center gap-3 rounded-xl bg-violet-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-200 hover:bg-violet-700 transition disabled:opacity-50"
            >
              <ShoppingCart className="size-5" />
              {checkoutLoading ? 'Redirecting to Stripe...' : 'Buy Now'}
            </button>

            <button
              type="button"
              aria-label="Add to wishlist"
              onClick={() => setLiked(!liked)}
              className="rounded-xl border border-slate-200 p-4 text-violet-500"
            >
              <Heart className={`size-5 ${liked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}