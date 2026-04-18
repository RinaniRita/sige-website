const https = require('https');
const cheerio = require('cheerio');

https.get('https://sige.edu.vn', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const posts = [];
    $('.post-item').each((i, el) => {
        const aTag = $(el).find('h3 a');
        if (aTag.length) {
            const title = aTag.attr('title') || aTag.text();
            const link = aTag.attr('href');
            let img = $(el).find('img').first();
            const image = img.attr('data-src') || img.attr('src');
            
            // Try to find the date next to calendar icon
            // e.g. <span class="d-inline-block text-muted text-sm"><i class="far fa-calendar"></i> 21/02/2025</span>
            let date = '';
            const calSpan = $(el).find('i.fa-calendar').parent();
            if (calSpan.length) {
                date = calSpan.text().trim();
            } else {
                const textContext = $(el).text();
                const match = textContext.match(/(\d{2}\/\d{2}\/\d{4})/);
                if (match) date = match[1];
            }
            
            if (link && !posts.find(p => p.link === link)) {
                posts.push({ title, link, image, date });
            }
        }
    });

    console.log(JSON.stringify(posts.slice(0, 5), null, 2));
  });
});
