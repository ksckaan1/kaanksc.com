<script lang="ts">
    import type { Post } from "$lib/models/types";
    import { onMount } from "svelte";
    import { ripple } from "svelte-ripple-action";
    import Icon from "@iconify/svelte";
    import PostCard from "$lib/components/PostCard.svelte";
    import SkeletonPostCard from "$lib/components/SkeletonPostCard.svelte";
    let posts: Post[] = $state([]);
    let isLoaded = $state(false);
    let isLoadingAnimationEnded = $state(false);

    onMount(async () => {
        setTimeout(() => {
            isLoadingAnimationEnded = true;
        }, 1000);

        const response = await fetch("/api/posts");
        const body = await response.json();
        posts = body.posts;
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

    {#if !isLoaded || !isLoadingAnimationEnded}
        <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative h-[calc(100dvh-20rem)] overflow-y-hidden"
        >
            {#each Array(20) as a}
                <SkeletonPostCard />
            {/each}
            <div
                class="bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full"
            ></div>
        </div>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each posts as post}
                <PostCard {post} />
            {/each}
        </div>
    {/if}
</div>
