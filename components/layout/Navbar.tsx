'use client'

import { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from 'lucide-react'

const categories = ['All categories', 'Books', 'Stationery', 'Gifts']
const navigation = ['Books', 'Bestsellers', 'New arrivals', 'Kids', 'Gifts']

export function BookooHeader() {
  const [category, setCategory] = useState(categories[0])
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-slate-100 bg-white text-slate-800 shadow-[0_1px_10px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-50 hover:text-violet-600 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="Bookoo home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
            <BookOpen className="size-5" strokeWidth={2.4} />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-[17px] font-bold tracking-tight text-slate-800">Bookoo</span>
            <span className="mt-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-slate-400">Book store website</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navigation.slice(0, 1).map((item) => (
            <a key={item} href="#" className="flex items-center gap-1 text-[13px] font-medium text-violet-600">
              <Menu className="size-3.5" />
              {item}
              <ChevronDown className="size-3 text-slate-400" />
            </a>
          ))}
        </nav>

        <form className="flex min-w-0 flex-1 items-center overflow-hidden rounded-lg border border-slate-200 bg-white focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100">
          <label htmlFor="book-search" className="sr-only">Search books</label>
          <select
            aria-label="Search category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="hidden h-10 border-r border-slate-200 bg-transparent px-3 text-[12px] font-medium text-slate-500 outline-none sm:block"
          >
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <input id="book-search" type="search" placeholder="Search over 30 million book titles" className="h-10 min-w-0 flex-1 bg-transparent px-3 text-xs text-slate-700 outline-none placeholder:text-slate-400" />
          <button type="submit" aria-label="Search" className="flex size-10 shrink-0 items-center justify-center text-violet-600 transition hover:bg-violet-50">
            <Search className="size-4" />
          </button>
        </form>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a href="#wishlist" aria-label="Wishlist" className="hidden items-center gap-1.5 text-slate-500 transition hover:text-violet-600 sm:flex">
            <Heart className="size-[18px]" strokeWidth={1.8} />
            <span className="hidden text-xs xl:inline">Wishlist</span>
          </a>
          <a href="#cart" aria-label="Cart, 3 items" className="relative text-slate-500 transition hover:text-violet-600">
            <ShoppingCart className="size-[18px]" strokeWidth={1.8} />
            <span className="absolute -right-2.5 -top-2 flex min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[12px] font-bold leading-4 text-white">3</span>
          </a>
          <a href="#profile" aria-label="Your profile" className="flex size-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 ring-2 ring-white">
            <UserRound className="size-4" />
          </a>
          <button type="button" className="hidden items-center gap-1 text-[12px] font-semibold text-slate-500 sm:flex" aria-label="Choose language">
            EN <ChevronDown className="size-3" />
          </button>
        </div>
      </div>

      <div className={`${mobileOpen ? 'block' : 'hidden'} border-t border-slate-100 px-5 py-4 lg:hidden`}>
        <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-violet-600">{item}</a>)}
        </nav>
      </div>

      <nav className="hidden border-t border-slate-100 lg:block" aria-label="Secondary navigation">
        <div className="mx-auto flex max-w-7xl items-center gap-7 px-4 py-3 text-xs font-medium text-slate-500 sm:px-6 lg:px-8">
          {navigation.map((item, index) => <a key={item} href="#" className={index === 0 ? 'text-violet-600' : 'transition hover:text-violet-600'}>{item}</a>)}
          <span className="ml-auto text-slate-400">Free delivery on orders over $25</span>
        </div>
      </nav>
    </header>
  )
}

export default BookooHeader
