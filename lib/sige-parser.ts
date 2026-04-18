import * as cheerio from "cheerio";

export interface SigePost {
  title: string;
  link: string;
  image: string;
  excerpt?: string;
  date?: string;
}

// Fallback data in case the website is unreachable
const FALLBACK_POSTS: SigePost[] = [
  {
    title: "Hướng dẫn xin học bổng du học Đài Loan 2025",
    link: "https://sige.edu.vn",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "Tìm hiểu các bước chuẩn bị hồ sơ và xin học bổng du học Đài Loan năm 2025.",
    date: new Date().toLocaleDateString("vi-VN"),
  },
  {
    title: "Kinh nghiệm sống và học tập tại Đài Loan",
    link: "https://sige.edu.vn",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "Chia sẻ từ sinh viên Việt Nam về cuộc sống và học tập tại Đài Loan.",
    date: new Date().toLocaleDateString("vi-VN"),
  },
  {
    title: "Top 10 trường đại học hàng đầu Đài Loan",
    link: "https://sige.edu.vn",
    image: "/placeholder.svg?height=300&width=400",
    excerpt: "Khám phá các trường đại học uy tín và chương trình đào tạo chất lượng cao.",
    date: new Date().toLocaleDateString("vi-VN"),
  },
];

let cachedPosts: SigePost[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour cache in memory

export async function getLatestPosts(): Promise<SigePost[]> {
  // Return cached data if available and hasn't expired
  if (cachedPosts && Date.now() - lastFetchTime < CACHE_TTL) {
    console.log("[v0] Returning cached SIGE posts");
    return cachedPosts;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch("https://sige.edu.vn", {
      next: { revalidate: 3600 },
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`SIGE website returned status ${res.status}, using fallback data`);
      return FALLBACK_POSTS;
    }

    const html = await res.text();
    const $ = cheerio.load(html);
    const posts: SigePost[] = [];

    $(".post-item, article, .box-item").each((i, el) => {
      let titleTag = $(el).find("h3 a, .post-title a");
      if (!titleTag.length) titleTag = $(el).find("a").first();

      const href = titleTag.attr("href");
      const title = titleTag.attr("title") || titleTag.text().trim();

      const textContext = $(el).text();
      const dateMatch = textContext.match(/(\d{2}\/\d{2}\/\d{4})/);
      const date = dateMatch ? dateMatch[1] : new Date().toLocaleDateString("vi-VN");

      let img = $(el).find("img").first();
      let imgSrc = img.attr("data-src") || img.attr("src");

      if (imgSrc && !imgSrc.startsWith("http")) {
        imgSrc = `https://sige.edu.vn${imgSrc.startsWith("/") ? "" : "/"}${imgSrc}`;
      }

      if (title && href && imgSrc && href.startsWith("https://sige.edu.vn")) {
        if (!posts.find((p) => p.link === href)) {
          posts.push({
            title,
            link: href,
            image: imgSrc,
            excerpt: "Đọc thêm để biết các thông tin chi tiết về kinh nghiệm và bài học bổ ích từ SIGE.",
            date,
          });
        }
      }
    });

    posts.sort((a, b) => {
      const parseDate = (d?: string) => {
        if (!d) return 0;
        const [day, month, year] = d.split("/");
        if (day && month && year) {
          return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)).getTime();
        }
        return 0;
      };
      return parseDate(b.date) - parseDate(a.date);
    });

    const result = posts.slice(0, 3);
    
    if (result.length === 0) {
      console.warn("No posts found on SIGE website, using fallback data");
      cachedPosts = FALLBACK_POSTS;
      lastFetchTime = Date.now();
      return FALLBACK_POSTS;
    }

    cachedPosts = result;
    lastFetchTime = Date.now();
    return result;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn("SIGE website request timed out, using fallback data");
    } else {
      console.error("Error fetching SIGE posts:", error);
    }
    
    // Cache the fallback so we don't spam failing requests
    cachedPosts = FALLBACK_POSTS;
    lastFetchTime = Date.now();
    return FALLBACK_POSTS;
  }
}
