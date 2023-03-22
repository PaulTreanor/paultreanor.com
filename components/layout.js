import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Paul Treanor'
export const siteTitle = 'Paul Treanor'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal website where I keep my notes and thoughts."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {!home && (
          <div>
            <Link href="/">🏠</Link>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
