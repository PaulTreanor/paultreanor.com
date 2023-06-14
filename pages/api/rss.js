// pages/api/rss.js

import { getSortedPagesData } from '../../lib/posts';
import RSS from 'rss';

const myDomain = 'https://paultreanor.com/';

export default async function rssFeed(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const posts = getSortedPagesData();

  const feed = new RSS({
    title: "Paul Treanor's Blog",
    description: "Where I share my thoughts, notes, and work.",

    feed_url: `${myDomain}/api/rss`,
    site_url: myDomain,
    image_url: `${myDomain}/images/me.png`,
    managingEditor: 'Paul Treanor',
    webMaster: 'Paul Treanor',
    copyright: '2023 Paul Treanor',
    language: 'en',

    id: myDomain,
    link: myDomain,
    language: 'en',
    image: `${myDomain}/images/me.png`,
    favicon: `${myDomain}/favicon.ico`,
    copyright: 'All rights reserved 2023,' + myDomain,
    updated: new Date(),
    generator: 'awesome', 
    feedLinks: {
      json: `${myDomain}/json`,
      atom: `${myDomain}/json`,
    },
  });


  posts.forEach((post) => {
    console.log({post: post});
    feed.item({
      title: post.title,
      id: `${myDomain}/${post.id}`,
      link: `${myDomain}/${post.id}`,
      description: post.short,
      // content: content,
      webMaster: 'Paul Treannor',
      date: new Date(post.date),
    });
  });

  res.setHeader('Content-Type', 'application/rss+xml');
  res.write(feed.xml());
  res.end();
}
