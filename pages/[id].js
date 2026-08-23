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
      postData: {
        ...postData,
        contentHtml: contentHtmlWithComponents,
      },
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

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title }</title>
      </Head >
        <div className='max-w-2xl mx-auto'>
          <h5 className='text-slate-600 font-normal mb-5'>
          <Date dateString={postData.date} />
          </h5>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </Layout>
  );
}
