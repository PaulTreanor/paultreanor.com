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
      <section className='blurb my-11'>
        <img class="mt-5 mb-7" src="/images/me.png" alt="" width={100}></img>
        <h2 class="text-4xl font-open-sans font-bold py-4 ">Hi, I'm Paul 🐮</h2>
        <p class="text-lg font-open-sans">I'm a fullstack developer making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>. This website is where I keep my notes and thoughts.</p>
        <p class="text-lg font-open-sans">Feel free to get in touch!</p>

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
        <div class="home-page">
          <h2 class="text-4xl font-open-sans font-bold py-4">📝 Latest Notes</h2>
          <div class="articles pb-40">
            <div class="search-box py-2">
              <input type="text" placeholder="Search for tags or post titles 🔎" v-model="search" class="bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full"/>
            </div>
            <ul className='my-7 max-w-2xl'>
              {allPagesData.map(({ id, date, title }) => (
                <li className='border-slate-300 border-b-2 border-solid pb-5 no-underline' key={id}>
                  <small className='font-open-sans text-slate-600 hover:bg-sky-200 active:focus:bg-sky-400 w-fit no-underline pr-4'>
                    <Date dateString={date} />
                  </small>
                  <Link href={`/${id}`}>
                    <h5 className='font-open-sans text-xl text-slate-900 hover:bg-sky-200 active:focus:bg-sky-400 pb-2 w-fit no-underline'>
                      {title}
                    </h5>
                  </Link>
                <br />
                {/* tag css - bg-sky-100 text-sky-800 text-sm font-open-sans font-semibold rounded-full px-3 py-1 mr-2 mb-2 */}
              </li>
              ))}
            </ul>
          </div>
        </div>
        
      </section>
    </Layout>
  );
}