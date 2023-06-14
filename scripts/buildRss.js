// scripts/buildRss.js
import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import { getSortedPagesData } from '../lib/posts.js';

const myDomain = 'https://paultreanor.com';
const publicDir = path.join(process.cwd(), 'public');

async function generateRssFeed() {
  const posts = getSortedPagesData();

  const feed = new RSS({
    title: "Paul Treanor's Blog",
    description: "Where I share my thoughts, notes, and work.",
    feed_url: `${myDomain}/rss.xml`,
    site_url: myDomain,
    image_url: `${myDomain}/images/me.png`,
    managingEditor: 'Paul Treanor',
    webMaster: 'Paul Treanor',
    copyright: '2023 Paul Treanor',
    language: 'en',
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      id: `${myDomain}/${post.id}`,
      link: `${myDomain}/${post.id}`,
      description: post.short,
      date: new Date(post.date),
    });
  });

  const rssOutput = feed.xml();
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssOutput);
}

generateRssFeed();
