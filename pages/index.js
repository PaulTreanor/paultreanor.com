import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPagesData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useState } from 'react';

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
  const [search, setSearch] = useState('');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='blurb my-11'>
        <img className="mt-5 mb-7" src="/images/me.png" alt="" width={100}></img>
        <h2 className="text-4xl font-open-sans font-bold py-4 ">Hi, I'm Paul 🐮</h2>
        <p className="text-lg font-open-sans">I'm a fullstack developer making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>. This website is where I keep my notes and thoughts.</p>
        <p className="text-lg font-open-sans">Feel free to get in touch!</p>

        <div className="row pt-4 text-2xl">
          <a className='mr-3' href="https://github.com/PaulTreanor"><ion-icon name="logo-github" /></a>
          <a className='mr-3' href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss" /></a>
          <a className='mr-3 emailCopy' onClick={copyEmailToClipboard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ion-icon name="mail" />
            <span className="tooltip">Copy email to clipboard</span>
          </a>
        </div>
      </section>
      <section >
        <div className="home-page">
          <h2 className="text-4xl font-open-sans font-bold py-4">📝 Latest Notes</h2>
          <div className="articles pb-40">
            <div className="search-box py-2">
              <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search for tags or post titles 🔎" className="bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full"/>
            </div>
            <ul className='my-7 max-w-2xl list-none'>
              {allPagesData.map(({ id, date, title, tags }) => (
                <li className='border-slate-300 border-b-2 border-solid pb-8 mt-4 no-underline ml-0' key={id}>
                  <Link href={`/${id}`}>
                    <h5 className='font-open-sans text-xl font-medium text-slate-900 hover:bg-sky-200 active:focus:bg-sky-400 pb-4 w-fit no-underline'>
                      {title}
                    </h5>
                  </Link>                  
                  <div className='flex flex-wrap'>
                    <small className='pt-1 font-open-sans text-slate-600 hover:bg-sky-200 active:focus:bg-sky-400 w-fit no-underline pr-4'>
                      <Date dateString={date} />
                    </small>
                    { tags.map(tag => (
                      <button key={tag} onClick={() => setSearch(tag)} className="bg-sky-100 text-sky-800 text-sm font-open-sans font-semibold rounded-full px-3 py-1 mr-2 w-fit">
                        {tag}
                      </button>
                    ))}
                  </div>
                <br />
              </li>
              ))}
            </ul>
          </div>
        </div>
        
      </section>
    </Layout>
  );
}