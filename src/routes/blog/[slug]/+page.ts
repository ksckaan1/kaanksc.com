import { error } from '@sveltejs/kit'
import { type Data } from '$lib/models/types'

// @ts-ignore
export async function load({ params }): Data {
    try {
        const post = await import(`../../../posts/${params.slug}.svx`)
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}