const cheerio = require('cheerio');
const https = require('https');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    $('a[href*=".html"]').each((i, el) => {
      const href = $(el).attr('href');
      const title = $(el).attr('title') || $(el).text().trim();
      
      // Look for an image closely related to this link
      let img = $(el).find('img').first();
      if (!img.length) {
         img = $(el).parent().parent().find('img').first();
      }
      
      const imgSrc = img.attr('data-src') || img.attr('src');
      
      if (title && href && imgSrc && href.startsWith('https://sige.edu.vn')) {
         // Avoid duplicates
         if (!posts.find(p => p.link === href)) {
             posts.push({ title, link: href, image: imgSrc });
         }
      }
    });

    console.log(JSON.stringify(posts.slice(0, 5), null, 2));
  });
});
