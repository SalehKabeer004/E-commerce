import { BookooHeader } from '@/components/layout/Navbar'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BookooHeader />
      <section className="mx-auto flex min-h-[calc(100vh-132px)] max-w-7xl items-center justify-center px-6 py-20 text-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Your next chapter starts here</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Find a story worth keeping.</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">A clean, responsive bookstore header inspired by the supplied design reference.</p>
        </div>
      </section>
    </main>
  )
}
