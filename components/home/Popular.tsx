'use client'
import { useState } from 'react'
import { Star } from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const popular = [
    { title: 'Emily and the\nDeep Blue', author: 'A. G. Slatter', color: 'bg-[#098e7b]', accent: 'bg-[#66d9c0]' },
    { title: 'ABRACADABRA', author: 'M. Carter', color: 'bg-[#ef6b29]', accent: 'bg-[#ffb072]' },
    { title: 'NORMAL\nPEOPLE', author: 'Sally Rooney', color: 'bg-[#66bd65]', accent: 'bg-[#b7eb9b]' },
    { title: 'The After\nDark', author: 'Haruki Murakami', color: 'bg-[#571447]', accent: 'bg-[#a14c87]' },
  ]

  function BookCover({ title, author, color, accent }: (typeof popular)[number]) {
    return (
        <div className={`relative flex h-36 w-[92px] shrink-0 flex-col justify-between overflow-hidden rounded-md p-3 text-white shadow-[0_8px_14px_rgba(28,30,70,0.18)] ${color}`}>
            <div className={`absolute -right-5 -top-5 size-16 rounded-full ${accent} opacity-60`} />
            <div className="relative text-[12px] font-black uppercase leading-[1.05] tracking-tight whitespace-pre-line">{title}</div>
            <div className="relative flex items-end justify-between gap-1 text-[7px] font-semibold uppercase tracking-wide"><span>{author}</span><Star className="size-3 fill-current" /></div>
        </div>
    )
}

export function BookooPopular() {
    return (
        <BookooShelf title="Popular in 2026" subtitle="Readers loved these stories then, and they still do." books={popular} tone="cool" />
    )
}

function BookooShelf({ title, subtitle, books, tone }: { title: string; subtitle: string; books: typeof popular; tone: 'warm' | 'cool' }) {
    const [offset, setOffset] = useState(0)
    const visibleBooks = [...books.slice(offset), ...books.slice(0, offset)]
    return <section className={`relative mb-5 overflow-hidden rounded-xl px-6 py-5 ${tone === 'warm' ? 'bg-[#fff0e9]' : 'bg-[#e7f3ff]'}`}><div className={`absolute right-10 top-[-60px] size-36 rounded-full ${tone === 'warm' ? 'bg-[#ffdaca]' : 'bg-[#cde5ff]'}`} /><div className="relative z-10 flex items-start justify-between"><div><h2 className="text-sm font-black text-[#1b2440]">{title}</h2><p className="mt-1 max-w-md text-[12px] text-slate-500">{subtitle}</p></div><div className="flex gap-1"><button type="button" aria-label="Previous books" onClick={() => setOffset((offset + books.length - 1) % books.length)} className="rounded-full bg-white/70 p-1.5 text-slate-500 hover:text-violet-600"><ChevronLeft className="size-3" /></button><button type="button" aria-label="Next books" onClick={() => setOffset((offset + 1) % books.length)} className="rounded-full bg-white/70 p-1.5 text-slate-500 hover:text-violet-600"><ChevronRight className="size-3" /></button></div></div><div className="relative mt-5 flex gap-4 overflow-hidden pb-1">{visibleBooks.map((book) => <BookCover key={book.title} {...book} />)}</div></section>
}