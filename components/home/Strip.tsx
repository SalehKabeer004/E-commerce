'use client'

import {
    Crown,
    ShieldCheck,
    Sparkles,
    Truck,
} from 'lucide-react'

const benefits = [
    { icon: Truck, title: 'Quick Delivery', text: 'Get your next read delivered with care and speed.' },
    { icon: ShieldCheck, title: 'Secure Payment', text: 'Checkout safely with a protected payment experience.' },
    { icon: Sparkles, title: 'Best Quality', text: 'Thoughtfully selected books in excellent condition.' },
    { icon: Crown, title: 'Return Guarantee', text: 'Changed your mind? Returns are simple and stress-free.' },
]

export function BookooStrip() {

    return (
        <section className="grid grid-cols-2 gap-x-5 gap-y-5 py-8 sm:grid-cols-4 sm:gap-5" aria-label="Store benefits">
            {benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-violet-100 text-violet-600"><Icon className="size-4" /></span><div><h3 className="text-[12px] font-bold text-slate-700">{title}</h3><p className="mt-1 text-[12px] leading-3 text-slate-400">{text}</p></div></div>)}
        </section>
    )
}
