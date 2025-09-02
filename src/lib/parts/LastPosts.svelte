<script lang="ts">
    import { onMount } from "svelte";
    import { ripple } from "svelte-ripple-action";
    import type { Post } from "$lib/models/types";

    import PostCard from "$lib/components/PostCard.svelte";
    import SkeletonPostCard from "$lib/components/SkeletonPostCard.svelte";

    interface Props {
        limit?: number;
        offset?: number;
    }

    let { limit = 5, offset = 0 }: Props = $props();

    let posts: Post[] = $state([]);
    let isLoaded = $state(false);
    let isLoadingAnimationEnded = $state(false);

    onMount(async () => {
        setTimeout(() => {
            isLoadingAnimationEnded = true;
        }, 500);
        const response = await fetch(
            `/api/posts?limit=${limit}&offset=${offset}`,
        );
        const body = await response.json();
        posts = body.posts;
        isLoaded = true;
    });
</script>

<div class="flex flex-col gap-5">
    <h1 class="section-title !text-3xl">SON 5 YAZI</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if !isLoaded || !isLoadingAnimationEnded}
            {#each Array(5) as a}
                <SkeletonPostCard />
            {/each}
        {:else}
            {#each posts as post}
                <PostCard {post} />
            {/each}
        {/if}
        <a
            href="/blog/"
            use:ripple
            class="border flex justify-center p-5 items-center bg-white/5 border-white/20 text-primary rounded"
        >
            <h2 class="text-primary text-xl font-light">
                Tüm yazıları gör &rightarrow;
            </h2>
        </a>
    </div>
</div>
