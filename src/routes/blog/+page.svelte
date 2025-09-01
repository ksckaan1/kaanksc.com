<script lang="ts">
    import type { Post } from "$lib/models/types";
    import { onMount } from "svelte";
    import { ripple } from "svelte-ripple-action";
    import Icon from "@iconify/svelte";
    import PostCard from "$lib/components/PostCard.svelte";
    import SkeletonPostCard from "$lib/components/SkeletonPostCard.svelte";
    let posts: Post[] = $state([]);
    let count = $state(0);
    let isLoaded = $state(false);
    let isLoadingAnimationEnded = $state(false);

    onMount(async () => {
        setTimeout(() => {
            isLoadingAnimationEnded = true;
        }, 500);

        const response = await fetch("/api/posts");
        const body = await response.json();
        posts = body.posts;
        count = body.count;
        isLoaded = true;
    });
</script>

<svelte:head>
    <title>Blog | Kaan Kuscu</title>
    <meta
        name="description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
    />
    <meta
        name="keywords"
        content="kaan, kuscu, blog, go, programlama, linux, blog, yazılım"
    />
    <meta property="og:title" content="Yazılar | Kaan Kuscu" />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
    />
    <meta property="og:image" content="https://kaanksc.com/og/main.webp" />
    <meta name="twitter:title" content="Blog | Kaan Kuscu" />
    <meta
        name="twitter:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
    />
    <meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-5">
    <div class="flex items-center justify-between text-primary">
        <h1 class="section-title">YAZILAR</h1>
        <a
            href="/rss/"
            class="p-3 rounded-full"
            target="_blank"
            use:ripple={{ center: true }}
        >
            <Icon icon="line-md:rss" width="32" height="32" />
        </a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if !isLoaded || !isLoadingAnimationEnded}
            {#each Array(10) as a}
                <SkeletonPostCard />
            {/each}
        {:else}
            {#each posts as post}
                <PostCard {post} />
            {/each}
        {/if}
    </div>
</div>
