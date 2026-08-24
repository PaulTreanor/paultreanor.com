import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Paul Treanor'
export const siteTitle = 'Paul Treanor'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal website where I keep my notes and thoughts."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed for paultreanor.com" href="/rss.xml" />

      </Head>
      <div className='relative'>
        {!home && (
          /* Desktop: sits in the left margin gutter (md:mx-20 = 80px, lg:mx-40 = 160px),
             so it never overlaps content and needs no reserved space above it. */
          <div className='md:absolute md:top-0 md:left-3 lg:left-8'>
            <Link href="/">
              <img src="/images/icons/home.svg" alt="Home" className="w-16 h-16 md:w-14 md:h-14 lg:w-24 lg:h-24 hover:scale-110 active:scale-95 transition-transform duration-200" />
            </Link>
          </div>
        )}
        <div className='mx-2 md:mx-20 lg:mx-40 font-open-sans mb-32'>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}
