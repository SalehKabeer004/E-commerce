import BookArchive from '@/components/product/BooksArchive'
import { BookooHeader } from '@/components/layout/Navbar'
import { BookooFooter } from '@/components/layout/Footer'

export default function books() {
    return(
        <>
        <BookooHeader />
        <BookArchive />
        <BookooFooter/>
        </>
    )
}