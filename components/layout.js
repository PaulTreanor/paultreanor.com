import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Paul Treanor'
export const siteTitle = 'Paul Treanor'

export default function Layout({ children, home }) {
  return (
    <div className='mx-2 md:mx-20 lg:mx-40 font-open-sans mb-32'>
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
      <header className='max-w-2xl mx-auto'>
        {!home && (
          <div className='mt-10 mb-8'>
            
            <Link href="/">
              <div  className="text-4xl">
                🏠
              </div>
              </Link>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
