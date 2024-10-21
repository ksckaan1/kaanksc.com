<script lang="ts">
    import Icon from "@iconify/svelte";
    import { ripple } from "svelte-ripple-action";

    const contactList = [
        {
            title: "GitHub",
            subtitle: "ksckaan1",
            link: "https://github.com/ksckaan1",
            icon: "line-md:github",
        },
        {
            title: "X",
            subtitle: "ksckaan1",
            link: "https://x.com/ksckaan1",
            icon: "line-md:twitter-x",
        },
        {
            title: "Reddit",
            subtitle: "ksckaan1",
            link: "https://www.reddit.com/user/ksckaan1",
            icon: "line-md:reddit",
        },
        {
            title: "YouTube",
            subtitle: "ksckaan1",
            link: "https://www.youtube.com/@ksckaan1",
            icon: "line-md:youtube",
        },
        {
            title: "LinkedIn",
            subtitle: "ksckaan1",
            link: "https://www.linkedin.com/in/ksckaan1/",
            icon: "line-md:linkedin",
        },
        {
            title: "E-posta",
            subtitle: "me@kaanksc.com",
            link: "mailto:me@kaanksc.com",
            icon: "line-md:email",
        },
    ];
</script>

<svelte:head>
    <title>İletişim | Kaan Kuscu</title>
    <meta
        name="description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Benimle bu adresler üzerinden bağlantı kurabilirsiniz."
    />
    <meta
        name="keywords"
        content="kaan, kuscu, iletişim, go, programlama, linux, blog, yazılım"
    />
    <meta property="og:title" content="İletişim | Kaan Kuscu" />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Benimle bu adresler üzerinden bağlantı kurabilirsiniz."
    />
    <meta property="og:image" content="https://kaanksc.com/og/main.webp" />
    <meta name="twitter:title" content="İletişim | Kaan Kuscu" />
    <meta
        name="twitter:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Benimle bu adresler üzerinden bağlantı kurabilirsiniz."
    />
    <meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-5">
    <h1 class="section-title">İLETİŞİM</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each contactList as contact, i}
            <a
                use:ripple
                href={contact.link}
                target="_blank"
                class="text-primary"
            >
                <div
                    class="flex border hover:bg-black/40 transition-colors border-white/20 items-center rounded-lg bg-black/20"
                >
                    <div
                        class="w-28 p-5 text-primary aspect-square flex items-center justify-center gridbg border-r border-white/20"
                    >
                        <Icon icon={contact.icon} height="60" />
                    </div>
                    <div class="p-5 text-slate-300">
                        <h2 class="text-kYellow text-3xl font-light">
                            {contact.title}
                        </h2>
                        <h3 class="text-kWhite/70 text-lg font-light">
                            {contact.subtitle}
                        </h3>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
