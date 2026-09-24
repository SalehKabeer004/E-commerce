'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'


    const slides = [
        { eyebrow: 'Back to school', title: 'Special 50% Off', subtitle: 'for our student community', text: 'Find your next favorite story and save on books made for curious minds.', color: 'from-[#eeecff] to-[#f8f7ff]' },
        { eyebrow: 'Reader favorites', title: 'Stories to stay up late for', subtitle: 'New chapters, just for you', text: 'Explore thoughtful picks from bestselling authors and fresh new voices.', color: 'from-[#edf7ff] to-[#f5fbff]' },
    ]
    

export function BookooHero() {
    const [heroSlide, setHeroSlide] = useState(0)
    const slide = slides[heroSlide]
    return (
        <>
            <section className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_242px]">
                <div className={`relative min-h-[296px] overflow-hidden rounded-xl bg-gradient-to-br ${slide.color} px-6 py-8 sm:px-10 sm:py-10`}>
                    <div className="absolute -right-16 -top-20 size-64 rounded-full bg-[#ff9b55] sm:size-72" />
                    <div className="absolute bottom-[-74px] right-28 size-48 rounded-full bg-[#d8d4fa]" />
                    <div className="relative z-10 max-w-[330px]">
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.28em] text-violet-500">{slide.eyebrow}</p>
                        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#18213d] sm:text-[34px]">{slide.title}</h1>
                        <h2 className="text-xl font-bold tracking-tight text-[#18213d]">{slide.subtitle}</h2>
                        <p className="mt-4 max-w-[275px] text-[12px] leading-4 text-slate-500">{slide.text}</p>
                        <div className="mt-6 flex gap-2">
                            <a href="#shop" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2.5 text-[12px] font-bold text-white shadow-sm transition hover:bg-violet-700">Get the deal <ArrowRight className="size-3" /></a>
                            <a href="#promos" className="rounded-md border border-slate-300 bg-white/70 px-4 py-2.5 text-[12px] font-bold text-slate-600 transition hover:border-violet-300 hover:text-violet-600">See other promos</a>
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-6 flex gap-1.5 sm:left-10" aria-label="Hero slides">
                        {slides.map((_, index) => <button key={index} type="button" onClick={() => setHeroSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`size-1.5 rounded-full ${index === heroSlide ? 'bg-violet-600' : 'bg-violet-300'}`} />)}
                    </div>
                    <div className="absolute bottom-[-10px] right-[16%] hidden rotate-[-10deg] sm:block"><div className="relative h-44 w-28 rounded-[40%_55%_12%_18%] bg-gradient-to-br from-[#f4c7a4] via-[#e69972] to-[#54372e] shadow-xl" /><div className="absolute -bottom-7 -right-16 h-32 w-28 rotate-12 rounded-[40%] bg-slate-900 shadow-xl" /></div>
                </div>

                <aside className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#15536e] to-[#123b5d] p-5 text-white">
                    <div className="absolute -right-10 -top-12 size-32 rounded-full bg-cyan-200/10" />
                    <div className="relative flex h-full flex-col items-center text-center">
                        <p className="text-lg font-black">Best Seller</p>
                        <p className="text-[12px] text-slate-300">Based sales this week</p>
                        <div className="my-4 flex h-32 w-24 rotate-[-3deg] flex-col justify-between rounded-md bg-gradient-to-br from-[#efbaa1] via-[#8eabc5] to-[#243b63] p-3 text-left shadow-xl"><span className="text-[12px] font-black uppercase text-white">Pushing<br />Clouds</span><span className="text-[12px] font-semibold text-white/80">A story about finding your way home.</span></div>
                        <p className="text-[12px] font-semibold">Pushing Clouds</p><p className="mt-1 text-[7px] uppercase text-slate-300">Adventure · Science · Courage</p>
                        <button type="button" className="mt-3 rounded-md bg-white px-4 py-2 text-[12px] font-bold text-slate-700">$6.00 <span className="ml-2 text-violet-600">USD $4.25</span></button>
                    </div>
                </aside>
            </section>
        </>
    )
}