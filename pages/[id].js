import Layout from '../components/layout';
import Date from '../components/date';
import Head from 'next/head'
import { renderToStaticMarkup } from 'react-dom/server'

import 'highlight.js/styles/qtcreator-light.css';


import { getAllPageIds, getPageData } from '../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPageData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPageIds();
  return {
    paths,
    fallback: false,
  };
}

function getInlineTagStyles(tag) {
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
}

export default function Post({ postData }) {
  const tags = postData.tags ?? [];

  return (
    <Layout>
      <Head>
        <title>{postData.title }</title>
      </Head >
        <div className='max-w-2xl mx-auto md:mt-6'>
          <div className='flex flex-wrap items-center gap-2 mb-4'>
            <Date dateString={postData.date} className="font-mono text-sm text-slate-600 pr-3" />
            {tags.map((tag) => (
              <span key={tag} className={`text-sm font-semibold rounded-md p-2 py-0.5 w-fit ${getInlineTagStyles(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </Layout>
  );
}
