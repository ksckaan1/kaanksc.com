export type Post = {
    title: string
    slug: string
    description: string
    date: string
    tags: string[]
    authors: string[]
    published: boolean
}

export type Tag = {
    slug: string
    count: number
}

export type Data = {
    content: any
    meta: Post
}
