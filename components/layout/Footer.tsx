import { BookOpen, Globe2, Heart, Mail, MapPin, Phone, Star } from 'lucide-react'

const footerLinks = {
  Shop: ['Books', 'Bestsellers', 'New arrivals', 'Kids books', 'Gifts'],
  Help: ['Shipping & delivery', 'Returns', 'Track your order', 'Contact us', 'FAQs'],
  About: ['Our story', 'Bookoo journal', 'Careers', 'Sustainability', 'Become a partner'],
}

export function BookooFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)_1.3fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2" aria-label="Bookoo home">
              <span className="flex size-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
                <BookOpen className="size-5" strokeWidth={2.4} />
              </span>
              <span className="leading-none">
                <span className="block text-[17px] font-bold tracking-tight text-slate-800">Bookoo</span>
                <span className="mt-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-slate-400">Book store website</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">Find your next favorite story, discover thoughtful gifts, and make room for more good books.</p>
            <div className="mt-5 flex items-center gap-2">
              {[{ label: 'Readers club', icon: Heart }, { label: 'Bookoo picks', icon: Star }, { label: 'Website', icon: Globe2 }].map(({ label, icon: Icon }) => (
                <a key={label} href={`#${label.toLowerCase()}`} aria-label={label} className="flex size-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-violet-50 hover:text-violet-600">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-800">{title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => <li key={link}><a href="#" className="text-sm transition hover:text-violet-600">{link}</a></li>)}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-800">Stay in the loop</h2>
            <p className="mt-4 text-sm leading-6 text-slate-500">New releases, curated picks, and bookish inspiration in your inbox.</p>
            <form className="mt-4 flex overflow-hidden rounded-lg border border-slate-200 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-slate-400" />
              <button type="submit" aria-label="Subscribe to newsletter" className="flex size-10 shrink-0 items-center justify-center bg-violet-600 text-white transition hover:bg-violet-700"><Mail className="size-4" /></button>
            </form>
            <div className="mt-5 flex flex-col gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-2"><MapPin className="size-3.5 text-violet-600" /> 14 Paper Lane, Portland</span>
              <span className="flex items-center gap-2"><Phone className="size-3.5 text-violet-600" /> (555) 014-BOOK</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Bookoo. Made for curious readers.</p>
          <div className="flex gap-5"><a href="#privacy" className="transition hover:text-violet-600">Privacy</a><a href="#terms" className="transition hover:text-violet-600">Terms</a><a href="#accessibility" className="transition hover:text-violet-600">Accessibility</a></div>
        </div>
      </div>
    </footer>
  )
}

export default BookooFooter
