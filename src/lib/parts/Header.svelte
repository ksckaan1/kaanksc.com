<script>
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";
    import TextButton from "$lib/components/TextButton.svelte";
    import Icon from "@iconify/svelte";
    import { bounceInOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    const nav = [
        {
            title: "Anasayfa",
            href: "/",
        },
        {
            title: "Yazılar",
            href: "/blog/",
        },
        {
            title: "Projeler",
            href: "/projects/",
        },
    ];

    let showMobileMenu = $state(false);

    $effect(() => {
        if (showMobileMenu != null) {
            document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    });
</script>

<header class="sticky top-0 bg-black z-40 border-b border-white/20">
    <div class="w-full max-w-5xl mx-auto px-1 py-5 flex justify-between">
        <TextButton
            onclick={() => {
                goto("/");
            }}><Logo size={40} /></TextButton
        >
        <div class="text-primary items-center hidden sm:flex">
            {#each nav as item}
                <TextButton
                    onclick={() => {
                        goto(item.href);
                    }}>{item.title}</TextButton
                >
            {/each}
        </div>
        <div class="sm:hidden flex">
            <TextButton
                onclick={() => {
                    showMobileMenu = true;
                }}><Icon icon="line-md:menu" width="44" /></TextButton
            >
        </div>
    </div>
</header>

{#if showMobileMenu}
    <div
        transition:fly={{ x: 200, duration: 500 }}
        class="fixed w-dvw h-dvh top-0 left-0 bg-black z-50 flex flex-col items-end"
    >
        <div in:fly={{ y: 50, duration: 100, delay: 500 }}>
            <TextButton
                onclick={() => {
                    showMobileMenu = false;
                }}><Icon icon="ic:round-close" width="60" /></TextButton
            >
        </div>
        {#each nav as item, i (item.title)}
            <div
                in:fly|global={{
                    x: 100,
                    duration: 100,
                    delay: 300 + (i + 1) * 100,
                    easing: bounceInOut,
                }}
            >
                <TextButton
                    onclick={() => {
                        showMobileMenu = false;
                        goto(item.href);
                    }}
                >
                    <span class="text-4xl uppercase font-bold">
                        {item.title}
                    </span>
                </TextButton>
            </div>
        {/each}
    </div>
{/if}
