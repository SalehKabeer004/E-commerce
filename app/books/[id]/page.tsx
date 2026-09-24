import BookDetails from '@/components/product/BookDetails'
import { BookooHeader } from '@/components/layout/Navbar'
import { BookooFooter } from '@/components/layout/Footer'

export default function books() {
    return(
        <>
        <BookooHeader />
        <BookDetails />
        <BookooFooter/>
        </>
    )
}