import Layout from '../components/layout';
import Date from '../components/date';
import Head from 'next/head'


import { getAllPageIds, getPageData } from '../lib/posts';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
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

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head >
        <div className='max-w-2xl mx-auto'>
          <h3 className='text-slate-700'>
            <Date dateString={postData.date} />
          </h3>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </Layout>
  );
}