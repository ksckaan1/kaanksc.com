import type { Post } from "$lib/models/types";

export async function GET() {
    let sitemapText = await getSitemap()

    return new Response(sitemapText, {
        headers: {
            "Content-Type": "application/xml"
        }
    })
}


const getSitemap = async () => {
    let resp: Response = await fetch("https://kaanksc.com/api/posts")

    let posts: Post[] = (await resp.json()).posts

    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://kaanksc.com/</loc>
        <lastmod>2023-09-03</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://kaanksc.com/rss</loc>
    </url>
    <url>
        <loc>https://kaanksc.com/contact</loc>
        <lastmod>2023-09-03</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.3</priority>
    </url>
    <url>
        <loc>https://kaanksc.com/projects</loc>
        <lastmod>2023-09-03</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://kaanksc.com/blog</loc>
        <lastmod>2023-09-03</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.3</priority>
    </url>
    ${posts.reverse().map((post: Post) => `<url>
        <loc>https://kaanksc.com/blog/${post.slug}</loc>
        <lastmod>${post.date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`).join('')}
</urlset>`
}