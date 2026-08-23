import Head from 'next/head'
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

export default function Home({ allPagesData }) {
  const [search, setSearch] = useState('');
  const [activeTags, setActiveTags] = useState(() => Array.from(new Set(allPagesData.map((post) => post.tags[0]))));

  const allTags = Array.from(new Set(allPagesData.map((post) => post.tags[0])));

  const toggleTag = (tag) => {
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  const filteredBlogPosts = allPagesData.filter((post) => {
    const tag = post.tags[0];
    post.tag = tag;

    if (!activeTags.includes(tag)) {
      return false;
    }

    if (search === '') {
      return true;
    }

    const lowerCaseSearch = search.toLowerCase();
    return tag.toLowerCase().includes(lowerCaseSearch) || post.title.toLowerCase().includes(lowerCaseSearch);
  });

  const getTagStyles = (tag) => {
    switch(tag) {
        case 'Note':
            return 'bg-blue-100 hover:bg-blue-200 text-blue-900';
        case 'Tutorial':
            return 'bg-green-100 hover:bg-green-200 text-green-900';
        case 'Release':
            return 'bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-900';
        case 'Talk':
            return 'bg-amber-100 hover:bg-amber-200 text-amber-900';
        case 'Essay':
            return 'bg-red-100 hover:bg-red-200 text-red-900';
        default:
            return 'bg-sky-100 hover:bg-green-100 text-sky-900'; // default style
    }
  };

    const getInlineTagStyles = (tag) => {
    switch(tag) {
        case 'Note':
            return 'border border-blue-300 hover:bg-blue-200 text-blue-900';
        case 'Tutorial':
            return 'border border-green-300 hover:bg-green-200 text-green-900';
        case 'Release':
            return 'border border-fuchsia-300 hover:bg-fuchsia-200 text-fuchsia-900';
        case 'Talk':
            return 'border border-amber-300 hover:bg-amber-200 text-amber-900';
        case 'Essay':
            return 'border border-red-300 hover:bg-red-200 text-red-900';
        default:
            return 'border border-sky-300 hover:bg-sky-200 text-sky-900'; // default style
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
      <div className="flex flex-col md:flex-row md:items-start text-violet-900">
        <section className='blurb mb-6 md:my-8 md:w-72 lg:w-80 md:flex-shrink-0'>
          <img className="mt-5 mb-4" src="/images/me.png" alt="" width={100}></img>
          <h2 className="text-4xl font-open-sans font-bold">Hi, I'm Paul</h2>
          <p className="font-open-sans">I'm a fullstack dev who likes to build my own tools. This website is my digital notebook.</p>

          <p className="font-open-sans">Feel free to get in touch!</p>

          <div className="row text-xl pt-3">
            <a
              className="group mr-3 pr-2 pt-4 hover:bg-transparent transition-colors duration-200"
              href="https://github.com/PaulTreanor">
              <span className="relative inline-block w-6 h-6 align-middle">
                <img src="/images/icons/git-unfilled.svg" alt="GitHub" className="absolute inset-0 w-6 h-6 group-hover:opacity-0 transition-opacity duration-200" />
                <img src="/images/icons/git-filled.svg" alt="" aria-hidden="true" className="absolute inset-0 w-6 h-6 [filter:brightness(0)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </a>
            <a
              className="group mr-3 p-2 pt-4 hover:bg-transparent transition-colors duration-200"
              href="https://linkedin.com/in/paultreanordev">
              <span className="relative inline-block w-6 h-6 align-middle">
                <img src="/images/icons/LinkedIn-unfilled.svg" alt="LinkedIn" className="absolute inset-0 w-6 h-6 group-hover:opacity-0 transition-opacity duration-200" />
                <img src="/images/icons/LinkedIn-filled.svg" alt="" aria-hidden="true" className="absolute inset-0 w-6 h-6 [filter:brightness(0)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </a>
            <a
              className="group mr-3 p-2 pt-4 hover:bg-transparent transition-colors duration-200"
              href="https://paultreanor.com/rss.xml">
              <span className="relative inline-block w-6 h-6 align-middle">
                <img src="/images/icons/rss-unfilled.svg" alt="RSS feed" className="absolute inset-0 w-6 h-6 group-hover:opacity-0 transition-opacity duration-200" />
                <img src="/images/icons/rss-filled.svg" alt="" aria-hidden="true" className="absolute inset-0 w-6 h-6 [filter:brightness(0)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </a>
          </div>
        </section>

        {/* Dividing line between sections (add w-px to make it visible) */}
        <div className="hidden md:block bg-slate-300 self-stretch mx-10 my-11" />

        <section className="md:flex-1 md:min-w-0 md:mt-11 text-violet-900">
          <div className="home-page">
            <h2 className="text-4xl font-bold">Latest Notes</h2>
            <div className="articles pb-40">
              <div className="search-box py-2">
                <input id="searchbox" value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder=" search..." className="bg-slate-50 border border-violet-300 text-violet-900 rounded-md active:border-violet-400 active:bg-teal-50 focus:bg-teal-50 hover:border-violet-400 focus:border-violet-400 block p-1 w-96 mb-2 max-w-full"/>
              </div>
              <div className="tag-filter flex flex-wrap gap-3 pt-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-sm font-open-sans font-semibold rounded-md px-2 py-0.5 w-fit transition-colors duration-200 ${activeTags.includes(tag) ? getTagStyles(tag) : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <ul className='grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-5 my-7 max-w-2xl md:max-w-3xl lg:max-w-4xl'>
                {filteredBlogPosts.map(({ id, date, title, tag }) => (
                  <li className='contents' key={id}>
                    <small className='text-slate-500 no-underline whitespace-nowrap text-sm md:text-base justify-self-end'>
                      <span className='md:hidden'><Date dateString={date} formatString="MM/yy" className="font-mono" /></span>
                      <span className='hidden md:inline'><Date dateString={date} formatString="d MMM, yy" className="font-mono" /></span>
                    </small>
                    <div className='min-w-0 flex items-start gap-x-3'>
                      <Link href={`/${id}`} className={`font-open-sans font-medium leading-relaxed text-sm md:text-base text-slate-900 hover:underline hover:text-violet-500 no-underline min-w-0 flex-1 break-words ${getTitleAndDateColours(tag)}`}>
                        {title}
                      </Link>
                      <button onClick={() => setSearch(tag)} className={`hidden md:block text-sm font-open-sans font-semibold rounded-md px-2 py-0.5 w-fit shrink-0 self-start ${getInlineTagStyles(tag)}`}>
                        {tag}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}