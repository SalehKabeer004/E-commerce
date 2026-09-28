'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Grid2X2, Heart, List, Search, SlidersHorizontal, Star } from 'lucide-react'

// Product Interface according to MongoDB Schema
interface Product {
  _id: string
  title: string
  author: string
  category: string
  rating: number
  price: number
  coverImage: string
}

const groups = [
  ['Best Sellers', ['Alone Here', 'Alien Nation', 'Battle Drive', 'Cat That Hat', 'Dragon of the King']],
  ['Most Commented', []], ['Newest Books', []], ['Featured', []], ['Watch History', []], ['Best Books', []],
] as const

export default function BookooArchive() {
  const [activeTab, setActiveTab] = useState('Today')
  const [favorites, setFavorites] = useState<string[]>([])
  const [filtersOpen, setFiltersOpen] = useState(true)
  const [search, setSearch] = useState('')

  // API State Handling
  const [books, setBooks] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // 1. Fetch products from Express Backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products')
        const data = await response.json()
        setBooks(data)
      } catch (error) {
        console.error('Error fetching books from backend:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  // 2. Filter logic updated for dynamic objects
  const filtered = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-500">Explore the collection</p>
          <h1 className="mt-1 text-4xl font-black tracking-tight text-[#1b2440]">Books</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 sm:flex">
            <Search className="size-3 text-slate-400" />
            <input
              aria-label="Search books"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search books"
              className="w-28 bg-transparent text-[10px] outline-none placeholder:text-slate-400"
            />
          </div>
          <button type="button" aria-label="Grid view" className="rounded-md bg-violet-100 p-2 text-violet-600">
            <Grid2X2 className="size-3" />
          </button>
          <button type="button" aria-label="List view" className="rounded-md p-2 text-slate-400 hover:bg-white">
            <List className="size-3" />
          </button>
          <button type="button" className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-sm font-bold text-slate-600">
            Newest <ChevronDown className="size-3" />
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-black text-[#1b2440]">Filter Option</h2>
            <SlidersHorizontal className="size-3 text-violet-500" />
          </div>
          <div className="mt-5 border-b border-slate-100 pb-4">
            <button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className="flex w-full items-center justify-between text-sm font-bold text-slate-600">
              Editor Picks <ChevronDown className={`size-3 transition ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>
            {filtersOpen && (
              <div className="mt-4 border-l border-slate-200 pl-3 text-xs text-slate-500">
                <p className="mb-2 font-bold text-violet-500">Best Sellers (105)</p>
                {groups[0][1].map((item) => <p key={item} className="mb-1">{item}</p>)}
                {groups.slice(1).map(([label]) => (
                  <p key={label} className="mt-2 font-semibold text-slate-600">+ {label} <span className="font-normal text-slate-400">(22)</span></p>
                ))}
                <button type="button" className="mt-4 text-xs font-bold text-violet-500">View more</button>
              </div>
            )}
          </div>
          {['Choose Publisher', 'Select Year', 'Shop by Category'].map((label) => (
            <button type="button" key={label} className="flex w-full items-center justify-between border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-600">
              {label}<ChevronDown className="size-3 text-slate-400" />
            </button>
          ))}
          <div className="pt-4">
            <p className="mb-3 text-sm font-bold text-slate-600">Popular categories</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
              {['Action', 'Fantasy', 'Adventure', 'History', 'Education', 'Horror', 'Biography', 'Mystery', 'Comedy', 'Romance'].map((item) => (
                <label key={item} className="flex items-center gap-1">
                  <input type="checkbox" className="size-2 accent-violet-500" />{item}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-4 flex items-center justify-between border-b border-slate-200">
            <div className="flex gap-5">
              {['Today', 'This Week', 'This Month'].map((tab) => (
                <button type="button" key={tab} onClick={() => setActiveTab(tab)} className={`border-b-2 pb-3 text-sm font-bold ${activeTab === tab ? 'border-violet-500 text-violet-600' : 'border-transparent text-slate-400'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-sm text-slate-400">{filtered.length} books</span>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="py-20 text-center text-sm text-slate-400">Loading collection from database...</div>
          ) : (
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 xl:grid-cols-4">
              {filtered.map((book, index) => {
                const liked = favorites.includes(book._id)
                return (
                  <a key={book._id} href={`${window.location.href}/${book._id}`}>
                    <article  className="group relative min-w-0">
                      <div
                        className="relative flex h-64 flex-col justify-end overflow-hidden rounded-md bg-cover bg-center p-3 text-white shadow-[0_8px_16px_rgba(28,30,70,0.14)] transition group-hover:-translate-y-1"
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${book.coverImage})` }}
                      >
                        <span className="absolute left-0 top-3 rounded-r-md bg-[#ff775e] px-2 py-1 text-xs font-black">
                          {index % 3 === 0 ? '30%' : index % 3 === 1 ? '50%' : '40%'}
                        </span>
                        <button
                          type="button"
                          aria-label={`${liked ? 'Remove' : 'Add'} ${book.title} wishlist`}
                          onClick={() => setFavorites(liked ? favorites.filter((id) => id !== book._id) : [...favorites, book._id])}
                          className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-violet-500"
                        >
                          <Heart className={`size-3 ${liked ? 'fill-current' : ''}`} />
                        </button>
                        <p className="relative text-[13px] font-black uppercase leading-[1.05] tracking-tight">{book.title}</p>
                        <p className="relative mt-1 text-[8px] font-semibold uppercase tracking-wider text-white/90">{book.author}</p>
                      </div>

                      <h3 className="mt-2 truncate text-xs font-bold text-slate-700">{book.title}</h3>
                      <p className="truncate text-[8px] uppercase text-violet-500 font-semibold">{book.category}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-[#ff775e]">
                          <Star className="size-2.5 fill-current" />{book.rating}
                        </span>
                        <span className="text-xs font-black text-slate-700">${book.price}</span>
                      </div>
                    </article>
                  </a>
                )
              })}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <p className="py-16 text-center text-xs text-slate-400">No books found in the database.</p>
          )}

          <div className="mt-8 flex justify-center gap-1">
            <button type="button" aria-label="Previous page" className="rounded-md border border-slate-200 bg-white p-2 text-slate-400">
              <ChevronLeft className="size-3" />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button type="button" key={page} className={`size-7 rounded-md text-sm font-bold ${page === 1 ? 'bg-violet-600 text-white' : 'bg-white text-slate-500'}`}>
                {page}
              </button>
            ))}
            <button type="button" aria-label="Next page" className="rounded-md border border-slate-200 bg-white p-2 text-slate-400">
              <ChevronRight className="size-3" />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}