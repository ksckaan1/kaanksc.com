<script lang="ts">
    import {fade, fly} from "svelte/transition";
    import {formatDate} from "../../../utils/format.js";
    import {page} from "$app/stores";
    import Avatar from "$lib/components/Avatar.svelte";

    export let data;
    let path = $page.url.pathname.split("/");
    $: slug = path[path.length - 1]

    $: {
        if ($page.url) {
            path = [...$page.url.pathname.split("/")]
        }
    }
</script>

<svelte:head>
    <title>{data.meta.title} | Kaan Kuscu - Backend Developer</title>
    <meta name="description" content={data.meta.description}/>
    <meta name="keywords" content={data.meta.tags.join(", ")}/>
    <meta name="author" content="Kaan Kuscu"/>
</svelte:head>

<div>
    {#key slug}
        <div
                in:fly|global={{ duration: 200, delay: 200, y: 50 }}
                out:fade|global={{ duration: 200}}
                class="wta flex flex-col my-5 mx-auto max-w-5xl lg:bg-black/20 lg:rounded-lg lg:border lg:border-white/20 p-5"
        >
            <div class="text-kYellow text-2xl sm:text-4xl font-bold">{data.meta.title}</div>
            <div class="font-light text-xl mt-3 text-kWhite/50">
                {formatDate(data.meta.date)}
            </div>
            <div class="flex gap-3 mt-3 flex-wrap">
                {#each data.meta.tags as tag}
                    <span class="text-lg text-kWhite/90">#{tag}</span>
                {/each}
            </div>
        </div>
        <div
                in:fly|global={{ duration: 200, delay: 400, y: 50 }}
                out:fade|global={{ duration: 200}}
                class="bg-zinc-900 border-t-8 border-kWhite/20 pb-20 lg:pb-0"
        >
            <div class="prose prose-invert text-kWhite p-5 max-w-3xl w-full mx-auto">
                <svelte:component this={data.content}/>
                <hr>
            </div>
            <div class="max-w-3xl w-full mx-auto p-5">
                <Avatar/>
            </div>
        </div>
    {/key}
</div>
