import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className='flex flex-col items-center justify-center min-h-screen bg-slate-50 text-violet-900'>
        <h1 className='text-6xl font-bold mb-4 text-violet-700'>404</h1>
        <p className='text-2xl mb-6 text-violet-700'>Not Found</p>
        <Link href="/" className='hover:bg-transparent flex flex-col items-center'>
          <img
            src="/images/icons/back-home.svg"
            alt="Go back home"
            className='w-32 h-32 hover:scale-110 active:scale-95 transition-transform duration-200 mb-2 cursor-pointer'
          />
          <p className='text-lg text-violet-700'>Click to go back home</p>
        </Link>
      </div>
    </>
  );
}
