import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPagesData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPagesData = getSortedPagesData();
  return {
    props: {
      allPagesData,
    },
  };
}

export default function Home({ allPagesData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          priority
          src="/images/me.png"
          className={utilStyles.borderCircle}
          height={144}
          width={140}
          alt={'Paul Treanor'}
        />
        <h1 className={utilStyles.heading2Xl}>Paul Treanor</h1>
        <p>I'm a fullstack developer making serverless things at fourTheorem. This website is where I keep my notes and thoughts.</p>
        <p>Feel free to get in touch!</p>

        <div className="row pt-4 text-2xl">
          <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github" /></a>
          <a href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss" /></a>
          <a className="emailCopy">
            <ion-icon name="mail" />
            <span className="tooltip font-open-sans text-sm italic">copy email to clipboard</span>
          </a>
        </div>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPagesData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}