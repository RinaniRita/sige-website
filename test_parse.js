const cheerio = require('cheerio');
const https = require('https');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    $('.post-item, .item-post, article, .box-item').each((i, el) => {
      posts.push({
        title: $(el).find('a').attr('title') || $(el).find('h3').text().trim(),
        dateText: $(el).text().replace(/\s+/g, ' ').trim()
      });
    });
    console.log(posts.slice(0, 3));
  });
});
