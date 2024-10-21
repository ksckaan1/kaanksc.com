import type { Post } from '$lib/models/types'
import { json } from '@sveltejs/kit'

async function getPosts(limit: number, offset: number): Promise<Object> {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.svx', { eager: true })

    for (const path in paths) {
        const file: any = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svx', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return {
        posts: posts.slice(offset, limit),
        limit,
        offset,
        count: posts.length
    }
}

export async function GET({ url }) {
    const limit = Number(url.searchParams.get('limit') ?? 100)
    const offset = Number(url.searchParams.get('offset') ?? 0)
    const posts = await getPosts(limit, offset)
    return json(posts)
}
