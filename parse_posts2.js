const https = require('https');
const cheerio = require('cheerio');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    $('a[href*=".html"]').each((i, el) => {
      const href = $(el).attr('href');
      const title = $(el).attr('title') || $(el).text().trim();
      let date = '';
      
      const parentWithText = $(el).parent().parent();
      if(parentWithText.length) {
         const textContent = parentWithText.text();
         // regex for DD/MM/YYYY HH:mm:ss
         const dateMatch = textContent.match(/(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2})/);
         if (dateMatch) {
            date = dateMatch[1];
         }
      }
      
      let img = $(el).find('img').first();
      if (!img.length) {
         img = $(el).parent().parent().find('img').first();
      }
      
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
