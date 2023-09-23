<script lang="ts">
    import {fade, fly} from "svelte/transition";
    import {onMount} from "svelte";
    import {getRepositories} from "../../utils/github";
    import type {IRepo} from "$lib/models/github";
    import Loading from "$lib/components/Loading.svelte";
    import externalIcon from "$lib/img/icons/external.svg"
    import forkIcon from "$lib/img/icons/fork.svg"
    import starIcon from "$lib/img/icons/star.svg"

    const showcase = [
        {
            name: "Dokümanlar",
            type: "document",
            items: [
                {
                    title: "Go Programlama Dili E-kitap",
                    description: "Go programlama dili için Türkçe eğitim kaynağı",
                    url: "https://go.kaanksc.com",
                    icon: externalIcon
                },
                {
                    title: "Uber Go Stil Rehberi",
                    description: "Uber şirketinin hazırlamış olduğu stil rehberinin Türkçe çevirisi",
                    url: "https://github.com/ksckaan1/uber-go-style-guide-tr",
                    icon: externalIcon
                },
                {
                    title: "Dart Programlama Dili E-kitap",
                    description: "Dart programlama dili için Türkçe eğitim kaynağı",
                    url: "https://dart.kaanksc.com",
                    icon: externalIcon
                },
                {
                    title: "GNU/Linux E-kitap",
                    description: "GNU/Linux işletim sistemi için Türkçe başlangıç rehberi",
                    url: "https://linux.kaanksc.com",
                    icon: externalIcon
                }
            ]
        },
        {
            name: "Araçlar",
            type: "tools",
            items: [
                {
                    title: "Go Snippets Plugin",
                    description: "Nova Editor için snippet eklentisi",
                    url: "https://extensions.panic.com/extensions/ksckaan1/ksckaan1.GoSnippets/",
                    icon: externalIcon
                },
                {
                    title: "kPurple VSCode",
                    description: "Visual Studio Code için mor tema",
                    url: "https://marketplace.visualstudio.com/items?itemName=ksckaan1.kpurple",
                    icon: externalIcon
                },
                {
                    title: "kPurple Plasma Color Scheme",
                    description: "KDE Plasma masaüstü ortamı için mor tema",
                    url: "https://www.pling.com/p/1688355",
                    icon: externalIcon
                },
                {
                    title: "kPurple Kvantum Theme",
                    description: "Kvantum için mor tema",
                    url: "https://www.pling.com/p/1625856",
                    icon: externalIcon
                },
                {
                    title: "kPurple Alacritty Color Scheme",
                    description: "Alacritty terminal için mor renk şeması",
                    url: "https://github.com/ksckaan1/kpurple-alacritty-color-scheme",
                    icon: externalIcon
                },
                {
                    title: "Video Converter for Dolphin File Manager Service Menu",
                    description: "Dolphin dosya yöneticisi için video dönüştürücü eklentisi",
                    url: "https://github.com/ksckaan1/video-converter-dolphin-service-menu",
                    icon: externalIcon
                },
                {
                    title: "Open with Live Server for Dolphin Service Menu",
                    description: "Dolphin dosya yöneticisi için klasörü http olarak sunma eklentisi",
                    url: "https://github.com/ksckaan1/open-with-live-server-dolphin-service-menu",
                    icon: externalIcon
                },
                {
                    title: "Service Menu Image Writer",
                    description: "Dolphin dosya yöneticisi için iso uzantılı dosyaları diske yazma eklentisi",
                    url: "https://github.com/ksckaan1/service-menu-image-writer",
                    icon: externalIcon
                }
            ]
        },
        {
            name: "Kütüphaneler",
            type: "frameworks",
            items: [
                {
                    title: "stati",
                    description: "Go programlama dili için runtime istatistik izleme paketi",
                    icon: externalIcon,
                    url: "https://github.com/ksckaan1/stati"
                }
            ]
        }
    ]

    let isReposLoaded = false;
    let repos: IRepo[] = [];

    onMount(() => {
        getRepositories().then(r => {
            repos = r
            isReposLoaded = true;
        });
    })
</script>
<svelte:head>
    <title>
        Projeler | Kaan Kuscu
    </title>
    <meta name="description"
          content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz."/>
    <meta name="keywords" content="kaan, kuscu, projeler, go, programlama, linux, blog, yazılım"/>
    <meta property="og:title" content="Projeler | Kaan Kuscu"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description"
          content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz."/>
    <meta property="og:image" content="https://kaanksc.com/og/main.webp"/>
    <meta name="twitter:title" content="Projeler | Kaan Kuscu">
    <meta name="twitter:description"
          content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz.">
    <meta property="twitter:image:src" content="https://kaanksc.com/og/main.webp"/>
</svelte:head>

<div class="main-template my-10"
     in:fade={{duration: 200,delay:200}}
     out:fade={{duration: 200}}
>
    <div class="section-title">PROJELER</div>
    <div class="mt-5 grid gap-y-5">
        {#each showcase as cat,c}
            <div class="border border-white/20 rounded-lg overflow-hidden bg-black/20"
                 in:fly|global={{duration:200,delay: (c + 1) * 100 + 200, y: 100}}
            >
                <h1 class="text-2xl text-kYellow font-bold px-3 py-2 backdrop-blur-sm bg-white/10 border-b border-white/20">{cat.name}</h1>
                <div class="cat">
                    {#each cat.items as item,i}
                        <a target="_blank" href={item.url} class="item"
                           in:fly|global={{y: 30, duration: 200, delay:(i + 1) * 50 + 500}}
                        >

                            <div class="flex-1">
                                <h2 class="text-lg">
                                    {item.title}
                                </h2>
                                <span class="text-kWhite/70 text-sm">
                                    {item.description}
                                </span>
                            </div>
                            <img src={item.icon} alt="">
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div class="mt-5">
        {#if isReposLoaded && repos.length !== 0}
            <div class="border border-white/20 rounded-lg overflow-hidden bg-black/20"
                 in:fly|global={{duration:200,delay: 600, y: 100}}
            >
                <h1 class="text-2xl text-kYellow font-bold px-3 py-2 backdrop-blur-sm bg-white/10 border-b border-white/20">
                    GitHub</h1>
                <div class="cat">
                    {#each repos as repo,i}
                        <a target="_blank" href={repo.html_url} class="item"
                           in:fly|global={{y: 30, duration: 200, delay:(i + 1) * 50 + 500}}
                        >

                            <div class="flex-1">
                                <h2 class="text-lg">
                                    {repo.name}
                                </h2>
                                <span class="text-kWhite/70 text-sm">
                                    {repo.description || "Açıklama yok"}
                                </span>
                            </div>
                            <div class="flex flex-col justify-center gap-y-3">
                                <div class="flex gap-x-2 items-center">
                                    <img src="{starIcon}" class="h-5" alt="">
                                    <span class="text-kWhite">{repo.stargazers_count}</span>
                                </div>

                                <div class="flex gap-x-2 items-center">
                                    <img src="{forkIcon}" class="h-5" alt="">
                                    <span class="text-kWhite">{repo.forks}</span>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>

        {:else if isReposLoaded && repos.length === 0}
            Repo bulunamadı
        {:else}
            <div class="flex justify-center items-center">
                <Loading/>
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
    .cat {
        @apply grid grid-cols-1 gap-3 p-3
    }

    .item {
        @apply border-b border-white/20 flex items-center gap-x-3 pb-3;
    }

    .item:nth-last-of-type(1) {
        @apply border-b-0 pb-0
    }
</style>