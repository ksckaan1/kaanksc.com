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
            title: "Instagram",
            subtitle: "ksckaan1",
            link: "https://instagram.com/ksckaan1",
            icon: "line-md:instagram",
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

<div class="flex flex-col gap-5">
    <h1 class="section-title !text-3xl">İLETİŞİM</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
