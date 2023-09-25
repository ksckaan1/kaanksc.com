<script lang="ts">
    import {blur, fade, fly} from "svelte/transition";
    import {flip} from "svelte/animate";
    import type {Post} from "$lib/models/types";
    import {formatDate} from "../../utils/format";
    import {onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";

    let showSearchField = false
    let searchInput: HTMLInputElement;
    let searchText = "";
    let isMac = false
    let scrollY = 0;

    const listenOpenSearchFieldKey = (e: KeyboardEvent) => {
        if (e.repeat) return;
        if ((e.metaKey || e.ctrlKey) && e.key === "k") toggleSearchField()
    }

    const listenCloseSearchFieldKey = (e: KeyboardEvent) => {
        if (e.repeat) return;
        if (e.key === "Escape") toggleSearchField()
    }

    const toggleSearchField = () => {
        showSearchField = !showSearchField


        if (showSearchField) {
            document.removeEventListener("keydown", listenOpenSearchFieldKey)
            document.addEventListener("keydown", listenCloseSearchFieldKey)
            setTimeout(() => {
                searchInput.focus()
            }, 100)

            searchText = ""
            document.body.style.overflowY = "hidden"
        } else {
            document.removeEventListener("keydown", listenCloseSearchFieldKey)
            document.addEventListener("keydown", listenOpenSearchFieldKey)
            document.body.style.overflowY = ""
        }
    }

    onMount(() => {
        document.addEventListener("keydown", listenOpenSearchFieldKey)
        isMac = navigator.platform.toLowerCase().includes("mac")
    })

    let posts: Post[] = []

    $: {
        if (showSearchField) {
            fetchPosts()
        }
    }

    let filteredList: Post[] = [];

    // on search text input
    $: filteredList = posts.filter((post) => {
        const titleMatch =
            post.title.toLowerCase().includes(searchText.toLowerCase());

        const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))

        return tagMatch || titleMatch;
    });

    const fetchPosts = async () => {
        const response = await fetch("/api/posts/");
        posts = await response.json();
    }

    const scrollTop = () => {
        if (browser) {
            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    }

    onDestroy(() => {
        if (browser) {
            document.removeEventListener("keydown", listenCloseSearchFieldKey)
            document.removeEventListener("keydown", listenOpenSearchFieldKey)
        }
    })
</script>
<svelte:window bind:scrollY={scrollY}/>

<div
        in:fade={{duration:200, delay:200}}
        out:fade={{duration:200}}
        class="main-template mt-10">
    <div class="flex justify-between items-center">
        <a href="/blog"
           class="section-title"
           in:fly|global={{ duration: 200, x: -100, delay: 500 }}
        >
            BLOG
        </a>
        <div in:fly|global={{ duration: 200, x: 100, delay: 500 }}>
            <button
                    on:click={toggleSearchField}
                    class="flex gap-x-1 items-center px-2 py-2 bg-black/20 rounded border border-white/20"
            >
                <i class="fa-solid fa-magnifying-glass"/>
                <span class="ml-2">Ara</span>
                <span class="hidden lg:flex ml-2 gap-x-1 h-4 items-center opacity-40">
                    {#if isMac}
                        ⌘ + K
                    {:else}
                        CTRL + K
                    {/if}
                </span>
            </button>
        </div>
    </div>
</div>

{#if showSearchField}
    <div in:blur|global={{duration:200}} out:blur={{duration:200,delay:200}} class="searchbg"
         on:click|self={toggleSearchField}>
        <div class="flex flex-col gap-y-5 mx-auto max-w-5xl overflow-hidden p-5 w-full h-full lg:h-1/2 bg-black/50 backdrop-blur-sm lg:rounded-lg lg:border lg:border-white/20">
            <div class="flex gap-x-2">
                <input bind:this={searchInput} bind:value={searchText}
                       class="w-full bg-white/5 px-3 py-2 rounded-lg border border-white/20 focus:outline-0 focus:border-kYellow"
                       type="text"
                       placeholder="Bir blog gönderisi ara...">
                <button
                        on:click={toggleSearchField}
                        class="bg-white/5 whitespace-nowrap px-3 py-2 rounded-lg border border-white/20">
                    İptal <span class="hidden lg:inline ml-2 opacity-40">Esc</span>
                </button>
            </div>
            {#if filteredList.length > 0 && searchText !== "" }
                <div class="results">
                    {#each filteredList as post (post.slug)}
                        <a animate:flip={{duration:200}} href={`/blog/${post.slug}`}
                           transition:fade|global={{duration:200}}
                           on:click={toggleSearchField}
                           class="block border-b border-white/20 pb-5 mb-5 last-of-type:border-0 last-of-type:mt-0">
                            <div>
                                <h2 class="text-kYellow text-lg">
                                    {post.title}
                                </h2>
                                <span class="my-1 font-light text-kWhite/50">
                                {formatDate(post.date)}
                            </span>
                                <div class="flex gap-y-1 gap-x-2 flex-wrap">
                                    {#each post.tags as tag}
                                        <span class="text-kWhite">#{tag}</span>
                                    {/each}
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            {:else if filteredList.length === 0 && searchText }
                <div in:fade|global={{delay:200,duration:200}} class="mt-5 h-20 flex justify-center items-center">
                    Bir sonuç bulunamadı :/
                </div>
            {:else}
                <div in:fade|global={{delay:200,duration:200}} class="mt-5 h-20 flex justify-center items-center">
                    Aramak için yazmaya başlayın...
                </div>
            {/if}
        </div>
    </div>
{/if}

{#if scrollY > 500}
    <div transition:fly|global={{duration:200,y:100}}
         on:click={scrollTop}
         class="flex justify-center items-center fixed bottom-4 right-4 w-16 cursor-pointer aspect-square rounded-xl border border-white/20 bg-kPurple">
        <i class="fa-solid fa-arrow-up text-xl"></i>
    </div>
{/if}

<style lang="postcss">
    .searchbg {
        @apply flex justify-center items-center fixed top-0 left-0 bg-black/50 backdrop-blur-sm;
        width: 100dvw;
        height: 100dvh;
        z-index: 999;
    }

    .results {
        @apply flex-1 gap-y-5 overflow-y-auto scrollbar-track-white/5 scrollbar-thumb-kYellow scrollbar;
    }
</style>