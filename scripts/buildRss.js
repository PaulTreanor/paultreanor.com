// scripts/buildRss.js
const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const myDomain = 'https://paultreanor.com';
const publicDir = path.join(process.cwd(), 'public');
const pagesDirectory = path.join(process.cwd(), 'pages');

// Recreate the getSortedPagesData function from lib/posts.js
function getSortedPagesData() {
  // Get md file names under /pages
  const fileNames = fs
    .readdirSync(pagesDirectory)
    .filter((fileName) => /\.md$/.test(fileName));
  
  const allPagesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(pagesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  
  // Sort posts by date
  return allPagesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

function generateRssFeed() {
  try {
    const posts = getSortedPagesData();
    const currentYear = new Date().getFullYear();

    const feed = new RSS({
      title: "Paul Treanor's Blog",
      description: "Where I share my thoughts, notes, and work.",
      feed_url: `${myDomain}/rss.xml`,
      site_url: myDomain,
      image_url: `${myDomain}/images/me.png`,
      managingEditor: 'Paul Treanor',
      webMaster: 'Paul Treanor',
      copyright: `${currentYear} Paul Treanor`,
      language: 'en',
    });

    posts.forEach((post) => {
      // Skip if missing required fields
      if (!post.title || !post.id || !post.date) {
        console.warn(`Skipping RSS entry for ${post.id || 'unknown post'} due to missing required fields`);
        return;
      }

      feed.item({
        title: post.title,
        guid: `${myDomain}/${post.id}`,
        url: `${myDomain}/${post.id}`,
        link: `${myDomain}/${post.id}`,
        description: post.short || `Read more at ${myDomain}/${post.id}`,
        date: new Date(post.date),
        categories: post.tags || [],
      });
    });

    const rssOutput = feed.xml();
    fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssOutput);
    console.log('RSS feed generated successfully at public/rss.xml');
  } catch (err) {
    console.error('Error generating RSS feed:', err);
    process.exit(1);
  }
}

// Execute the feed generation
generateRssFeed();