const https = require('https');
const cheerio = require('cheerio');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    $('.box-post article, .box-item').each((i, el) => {
        let titleTag = $(el).find('h3 a, .post-title a');
        if (!titleTag.length) titleTag = $(el).find('a').first();
        
        let link = titleTag.attr('href');
        let title = titleTag.attr('title') || titleTag.text().trim();
        
        let dateText = $(el).find('.date, .time, .post-date, span:contains("/")').text() || $(el).text();
        let dateMatch = dateText.match(/(\d{2}\/\d{2}\/\d{4})/);
        let date = dateMatch ? dateMatch[1] : '';

        // Let's also look globally around in the DOM logic that parsed earlier
        let imgSrc = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
        
        if (title && link && link.startsWith('https') && !posts.find(p => p.link === link)) {
            posts.push({ title, link, date, image: imgSrc });
        }
    });
    console.log(JSON.stringify(posts.slice(0, 5), null, 2));
  });
});
