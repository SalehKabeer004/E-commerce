'use client'

import { BookooHero } from './Hero'
import { BookooStrip } from './Strip'
import { BookooRecommended } from './Recomended'
import { BookooPopular } from './Popular'
import { BookooBookSale } from './BookSale'

export function BookooHome() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <BookooHero />
      <BookooStrip />
      <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 ">
      <BookooRecommended />
      <BookooPopular />
      </div>
      <BookooBookSale />
    </div>
  )
}

export default BookooHome