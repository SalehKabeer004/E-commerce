import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md rounded-2xl bg-slate-50 p-8 text-center shadow-lg border border-slate-100">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="mb-2 text-3xl font-black text-[#1b2440]">Payment Successful! 🎉</h1>
        <p className="mb-8 text-slate-500">
          Thank you for your purchase. Aapki digital book jaldi hi aapke email par bhej di jayegi.
        </p>

        <Link 
          href="/books" 
          className="inline-block w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700 sm:w-auto"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}