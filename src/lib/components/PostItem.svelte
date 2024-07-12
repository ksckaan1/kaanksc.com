<script lang="ts">
    import type { Post } from "$lib/models/types";
    import { fade } from "svelte/transition";
    import { formatDate } from "../../utils/format";

    export let post: Post;
</script>

<a href={`/blog/${post.slug}`} out:fade={{ duration: 200 }}>
    <div
        class="border hover:bg-black/40 transition-all border-kWhite/20 bg-black/20 rounded-lg p-5 h-full flex flex-col"
    >
        <div class="text-kYellow text-lg font-bold">
            {post.title}
        </div>
        <div class="text-kWhite/50 flex-1 font-light">
            {formatDate(post.date)}
        </div>
        <div class="flex flex-row flex-wrap gap-x-2 gap-y-1">
            {#each post.tags as tag}
                <span class="text-kWhite/50">#{tag}</span>
            {/each}
        </div>
    </div>
</a>
