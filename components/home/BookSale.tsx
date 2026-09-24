'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const saleBooks = [
  { title: 'Terrible Madness', author: 'Lillian D. Harper', genre: 'Thriller, Drama', discount: '30%', price: '$4.54', oldPrice: '$6.49', rating: '4.7', cover: 'from-[#25262a] via-[#77787b] to-[#111215]' },
  { title: 'Battle Drive', author: 'Marcus Reid', genre: 'Action, Sports', discount: '50%', price: '$4.54', oldPrice: '$9.08', rating: '4.7', cover: 'from-[#c7ad83] via-[#3c5065] to-[#162337]' },
  { title: 'Take Out Tango', author: 'Sofia Grant', genre: 'Sports, Drama', discount: '40%', price: '$5.56', oldPrice: '$9.26', rating: '4.8', cover: 'from-[#79b8a0] via-[#bb7137] to-[#744329]' },
  { title: 'The Missadventure', author: 'Nora Wells', genre: 'Adventure, Summer', discount: '50%', price: '$4.70', oldPrice: '$9.40', rating: '4.7', cover: 'from-[#162b55] via-[#5e2c72] to-[#120f32]' },
]

export function BookooBookSale() {
  return (
    <BookooSaleShelf />
  )
}

function BookooSaleShelf() {
  const [offset, setOffset] = useState(0)
  const books = [...saleBooks.slice(offset), ...saleBooks.slice(0, offset)]
  return <section className="relative mb-5 overflow-hidden rounded-xl bg-[#f8f7ff] px-6 py-5">
    <div className="absolute right-8 top-[-80px] size-44 rounded-full bg-[#e5e2ff]" />
    <div className="relative z-10 flex items-center justify-between"><div><h2 className="text-sm font-black text-[#1b2440]">Books on Sale</h2><p className="mt-1 text-[12px] text-slate-500">Great stories, better prices.</p></div>
      <div className="flex gap-1"><button type="button" aria-label="Previous sale books" onClick={() => setOffset((offset + saleBooks.length - 1) % saleBooks.length)} className="rounded-full bg-white/80 p-1.5 text-slate-500 hover:text-violet-600"><ChevronLeft className="size-3" /></button><button type="button" aria-label="Next sale books" onClick={() => setOffset((offset + 1) % saleBooks.length)} className="rounded-full bg-white/80 p-1.5 text-slate-500 hover:text-violet-600"><ChevronRight className="size-3" /></button></div>
    </div>
    <div className="relative mt-5 flex gap-4 overflow-hidden pb-1">{books.map((book) => <article key={book.title} className="w-[108px] shrink-0"><div className={`relative flex h-40 flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br p-2.5 text-white shadow-[0_8px_14px_rgba(28,30,70,0.16)] ${book.cover}`}><span className="absolute left-0 top-2 rounded-r-md bg-[#ff775e] px-2 py-1 text-[12px] font-black">{book.discount}</span>
      <div className="absolute inset-x-3 top-12 h-12 rounded-full bg-white/10 blur-md" /><p className="relative text-[13px] font-black uppercase leading-[1.05] tracking-tight">{book.title}</p><p className="relative mt-1 text-[12px] font-semibold uppercase tracking-wide text-white/75">A story worth finding</p>
    </div><h3 className="mt-2 truncate text-[12px] font-bold text-slate-700">{book.title}</h3><p className="truncate text-[12px] uppercase text-violet-400">{book.genre}</p>
      <div className="mt-1 flex items-center justify-between"><span className="flex items-center gap-0.5 text-[11px] font-bold text-[#ff775e]"><Star className="size-2.5 fill-current" />{book.rating}</span><span className="text-[12px] font-black text-slate-700">{book.price} <del className="ml-0.5 text-[12px] font-normal text-slate-400">{book.oldPrice}</del></span></div></article>)}</div>
  </section>
}