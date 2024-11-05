import type { Post } from "$lib/models/types";

export async function GET() {
    let rssText = await getPostRSS()

    return new Response(rssText, {
        headers: {
            "Content-Type": "application/xml"
        }
    })
}


const getPostRSS = async () => {
    let resp: Response = await fetch("https://kaanksc.com/api/posts")

    let posts: Post[] = (await resp.json()).posts

    return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://kaanksc.com/rss" rel="self" type="application/rss+xml" />
<title>Kaan Kuscu</title>
<link>https://kaanksc.com</link>
<description>Backend Developer</description>
${posts
            .map(
                (post: Post) => `<item>
<guid>https://kaanksc.com/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://kaanksc.com/blog/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
            )
            .join('')}
</channel>
</rss>
`
}