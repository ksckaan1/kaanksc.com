<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import githubIcon from "$lib/img/icons/social/github.svg";
    import xIcon from "$lib/img/icons/social/x.svg";
    import instagramIcon from "$lib/img/icons/social/instagram.svg";
    import redditIcon from "$lib/img/icons/social/reddit.svg";
    import youtubeIcon from "$lib/img/icons/social/youtube.svg";
    import linkedinIcon from "$lib/img/icons/social/linkedin.svg";
    import emailIcon from "$lib/img/icons/social/email.svg";

    const contactList = [
        {
            title: "GitHub",
            subtitle: "ksckaan1",
            link: "https://github.com/ksckaan1",
            icon: githubIcon,
        },
        {
            title: "X",
            subtitle: "ksckaan1",
            link: "https://x.com/ksckaan1",
            icon: xIcon,
        },
        {
            title: "Reddit",
            subtitle: "ksckaan1",
            link: "https://www.reddit.com/user/ksckaan1",
            icon: redditIcon,
        },
        {
            title: "YouTube",
            subtitle: "ksckaan1",
            link: "https://www.youtube.com/@ksckaan1",
            icon: youtubeIcon,
        },
        {
            title: "LinkedIn",
            subtitle: "ksckaan1",
            link: "https://www.linkedin.com/in/ksckaan1/",
            icon: linkedinIcon,
        },
        {
            title: "E-posta",
            subtitle: "me@kaanksc.com",
            link: "mailto:me@kaanksc.com",
            icon: emailIcon,
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

<div
    class="main-template my-10"
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
>
    <h1 class="section-title">İLETİŞİM</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
        {#each contactList as contact, i}
            <a
                href={contact.link}
                target="_blank"
                in:fly|global={{
                    x: -100,
                    duration: 200,
                    delay: (i + 1) * 100 + 200,
                }}
            >
                <div
                    class="flex border hover:bg-black/40 transition-colors border-white/20 items-center rounded-lg bg-black/20"
                >
                    <div
                        class="w-28 p-5 aspect-square bg-gridbg border-r border-white/20"
                    >
                        <img
                            class="w-full h-full object-contain"
                            src={contact.icon}
                            alt={contact.title}
                        />
                    </div>
                    <div class="p-5">
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
