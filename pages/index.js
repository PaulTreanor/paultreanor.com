import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPagesData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useState } from 'react';
import EmailHover from '../components/EmailHover';

export async function getStaticProps() {
  const allPagesData = getSortedPagesData();
  return {
    props: {
      allPagesData,
    },
  };
}

export default function Home({ allPagesData }) {
  const [search, setSearch] = useState('');

  const filteredBlogPosts = allPagesData.filter((post) => {
    
    const lowerCaseSearch = search.toLowerCase();
    console.log(search.toLowerCase())
    console.log(post.tag)
    // console.log(post.tag.toLowerCase())

    const lowerCaseTagsString = post.tags[0].toLowerCase()
    if (search === '') {
      post.tag = post.tags[0]
      return post;
    }
    if (lowerCaseTagsString.includes(lowerCaseSearch) || post.title.toLowerCase().includes(lowerCaseSearch)) {
      post.tag = post.tags[0]
      return post;
    }
  });

  const getTagStyles = (tag) => {
    switch(tag) {
        case 'Note':
            return 'bg-blue-100 hover:bg-blue-200 text-blue-800';
        case 'Tutorial':
            return 'bg-green-100 hover:bg-green-200 text-green-800';
        case 'Release':
            return 'bg-fuchsia-100 hover:bg-fucshia-200 text-fucshia-800';
        case 'Talk':
            return 'bg-amber-100 hover:bg-amber-200 text-amber-800';
        case 'Essay':
            return 'bg-red-100 hover:bg-red-200 text-red-800';
        default:
            return 'bg-sky-100 hover:bg-green-100 text-sky-800'; // default style
    }
  };

  const getTitleAndDateColours = (tag) => {
    switch(tag) {
        case 'Note':
            return 'hover:bg-blue-50';
        case 'Tutorial':
            return 'hover:bg-green-50';
        case 'Release':
            return 'hover:bg-fuchsia-50';
        case 'Talk':
            return 'hover:bg-amber-50';
        case 'Essay':
            return 'hover:bg-red-50';
        default:
            return 'hover:bg-green-100'; // default style
    }
  };



  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='blurb my-11'>
        <img className="mt-5 mb-7" src="/images/me.png" alt="" width={100}></img>
        <h2 className="text-4xl font-open-sans font-bold py-4 ">Hi, I'm Paul 🐮</h2>
        <p className="text-lg font-open-sans">I'm a fullstack indie developer until I run out of money. This website is my digital notebook.</p>
        <p className="text-lg font-open-sans">Feel free to get in touch!</p>

        <div className="row text-2xl pt-3">
          <a 
            className="mr-3 pr-2 pt-4 rounded-full hover:bg-green-100 transition-colors duration-200" 
            href="https://github.com/PaulTreanor">
            <ion-icon name="logo-github" />
          </a>
          <a 
            className="mr-3 p-2 pt-4 rounded-full hover:bg-green-100 transition-colors duration-200" 
            href="https://linkedin.com/in/paultreanordev">
            <ion-icon name="logo-linkedin" />
          </a>

          <a 
            className="mr-3 p-2 pt-4 rounded-full hover:bg-green-100 transition-colors duration-200" 
            href="https://paultreanor.com/rss.xml">
            <ion-icon name="logo-rss" />
          </a>
          <EmailHover> <ion-icon name="mail" /> </EmailHover>
        </div>
      </section>
      <section >
        <div className="home-page">
          <h2 className="text-4xl font-open-sans font-bold py-4">📝 Latest Notes</h2>
          <div className="articles pb-40">
            <div className="search-box py-2">
              <input id="searchbox" value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search for tags or post titles 🔎" className="bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 active:bg-teal-50 focus:bg-teal-50 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full"/>
            </div>
            <ul className='my-7 max-w-2xl list-none'>
              {filteredBlogPosts.map(({ id, date, title, tag }) => (
                <li className='border-slate-300 border-b-2 border-solid pb-8 mt-4 no-underline ml-0' key={id}>
                  <Link href={`/${id}`}>
                    <h5 className={`font-open-sans text-xl font-medium text-slate-900 hover:underline ${getTitleAndDateColours(tag)} active:focus:bg-sky-400 pb-4 w-fit no-underline`}>
                      {title}
                    </h5>
                  </Link>                  
                  <div className='flex flex-wrap'>
                    <small className={`pt-1 font-open-sans text-slate-600 ${getTitleAndDateColours(tag)} active:focus:bg-sky-400 w-fit no-underline pr-4`}>
                      <Date dateString={date} />
                    </small>
                        <button onClick={() => setSearch(tag)} className={`text-sm font-open-sans font-semibold rounded-full px-3 py-1 mr-2 w-fit ${getTagStyles(tag)}`}>
                            {tag}
                        </button>
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