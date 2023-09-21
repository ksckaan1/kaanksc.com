import type {Post, Tag} from "$lib/models/types";

export const prepareTags = (posts: Post[]): Tag[] => {
    const allTags: string[] = [];
    const tags: Tag[] = [];

    posts.forEach((post: Post) => {
        post.tags.forEach((ptag: string) => {
            allTags.push(ptag)
        })
    })

    allTags.forEach(t => {
        let found = tags.find(tag => {
            return tag.slug === t
        })

        if (found) {
            found.count++
        } else {
            let newTag: Tag = {
                slug: t,
                count: 1
            }

            tags.push(newTag)
        }
    })

    let sorted = tags.sort((a, b) => {
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0
    })

    return sorted;
}