const https = require('https');
const cheerio = require('cheerio');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    
    // Fallback: look at ALL article links again, but properly traverse to their ancestors to find the date string
    $('a[href*=".html"]').each((i, el) => {
      const href = $(el).attr('href');
      const title = $(el).attr('title') || $(el).text().trim();
      let parentText = $(el).parent().parent().text();
      let dateMatch = parentText.match(/(\d{2}\/\d{2}\/\d{4})/);
      let date = dateMatch ? dateMatch[1] : '';

      // Try one level higher if needed
      if (!date) {
        parentText = $(el).parent().parent().parent().text();
        dateMatch = parentText.match(/(\d{2}\/\d{2}\/\d{4})/);
        date = dateMatch ? dateMatch[1] : '';
      }

      let img = $(el).find('img').first();
      if (!img.length) img = $(el).parent().parent().find('img').first();
      if (!img.length) img = $(el).parent().parent().parent().find('img').first();
      
      const imgSrc = img.attr('data-src') || img.attr('src');
      
      if (title && href && imgSrc && href.startsWith('https://sige.edu.vn')) {
         if (!posts.find(p => p.link === href)) {
             posts.push({ title, link: href, image: imgSrc, date });
         }
      }
    });

    console.log(JSON.stringify(posts.slice(0, 5), null, 2));
  });
});
