import { BookooHeader } from '@/components/layout/Navbar'
import { BookooFooter } from '@/components/layout/Footer'
import {BookooHome} from '@/components/home/Front'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BookooHeader />
      <BookooHome />
      <BookooFooter />
    </main>
  )
}
