<script lang="ts">
    import type {Post} from "$lib/models/types";
    import {onDestroy, onMount} from "svelte";
    import {fade, fly} from "svelte/transition";
    import {flip} from "svelte/animate";
    import Loading from "$lib/components/Loading.svelte";
    import PostItem from "$lib/components/PostItem.svelte";

    let isLoaded = false;
    let posts: Post[] = [];

    onMount(async () => {
        const response = await fetch("api/posts/");
        posts = await response.json();

        isLoaded = true;
    });

    onDestroy(() => (isLoaded = false));
</script>

<svelte:head>
    <title>Blog | Kaan Kuscu - Backend Developer</title>
</svelte:head>

<div
        class="main-template my-10 pt-0 pb-14 lg:pb-0"
        in:fade={{ delay: 200, duration: 200 }}
        out:fade={{ duration: 200 }}
>
    {#if isLoaded}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            {#each posts as post, i (post.slug)}
                <div
                        animate:flip={{ duration: 200 }}
                        in:fly|global={{
                        x: -100,
                        duration: 200,
                        delay: (i + 1) * 100 + 200,
                    }}
                >
                    <PostItem {post}/>
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex justify-center items-center my-10">
            <Loading/>
        </div>
    {/if}
</div>

<style lang="postcss">
    .hidden-check {
        @apply hidden;
    }

    .hidden-check:checked + label {
        @apply px-2 py-1.5 bg-kYellow text-kPurple;
    }

    .hidden-check + label {
        @apply px-2 py-1.5 bg-transparent text-kYellow border border-kYellow transition-all duration-200 cursor-pointer;
    }

    .active-tag-btn {
        @apply bg-white/20;
    }
</style>
