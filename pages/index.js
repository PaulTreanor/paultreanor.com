import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
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

function copyEmailToClipboard () {
  navigator.clipboard.writeText('example.email@gmail.com');
  // add visual feedback to show that email has been added to clipboard
  const tooltip = document.querySelector('.tooltip');
  const originalText = tooltip.innerText;
  tooltip.innerText = 'Email copied!';
  tooltip.style.display = 'block';
  setTimeout(() => {
    tooltip.innerText = originalText;
  }, 1200);
}

function handleMouseLeave () {
  const tooltip = document.querySelector('.tooltip');
  tooltip.style.display = 'none';
}

const handleMouseEnter = () => {
  const tooltip = document.querySelector('.tooltip');
  tooltip.style.display = 'block';
}

export default function Home({ allPagesData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Image
          priority
          src="/images/me.png"
          height={144}
          width={140}
          alt={'Paul Treanor'}
        />
        <h1 className='text-slate-500'>Paul Treanor</h1>
        <p>I'm a fullstack developer making serverless things at fourTheorem. This website is where I keep my notes and thoughts.</p>
        <p>Feel free to get in touch!</p>

        <div className="row pt-4 text-2xl">
          <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github" /></a>
          <a href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss" /></a>
          <a className="emailCopy" onClick={copyEmailToClipboard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ion-icon name="mail" />
            <span className="tooltip">Copy email to clipboard</span>
          </a>
        </div>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section >
        <h2 >Blog</h2>
        <ul >
          {allPagesData.map(({ id, date, title }) => (
            <li  key={id}>
            <Link href={`/${id}`}>{title}</Link>
            <br />
            <small >
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}