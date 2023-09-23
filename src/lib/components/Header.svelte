<script lang="ts">
    import {fly} from "svelte/transition";
    import {afterNavigate, goto} from "$app/navigation";
    import {onMount} from "svelte";
    import MenuButton from "$lib/components/MenuButton.svelte";
    import CloseButton from "$lib/components/CloseButton.svelte";
    import Logo from "$lib/components/Logo.svelte";

    let isLoaded = false;

    onMount(() => (isLoaded = true));

    let isDrawerActive = false;

    let activeRoute = "";

    onMount(() => {
        activeRoute = location.pathname;
    });

    afterNavigate((nav) => {
        activeRoute = nav.to?.url.pathname || "";
    });

    let navItems = [
        {
            title: "ANASAYFA",
            url: "/",
            activeRegex: /^\/$/i,
        },
        {
            title: "PROJELER",
            url: "/projects",
            activeRegex: /^\/projects$/i,
        },
        {
            title: "BLOG",
            url: "/blog",
            activeRegex: /^\/blog/i,
        },
        {
            title: "İLETİŞİM",
            url: "/contact",
            activeRegex: /^\/contact$/i,
        },
    ];
</script>

<div class="top">
    <header class="main-template">
        <Logo on:click={() => goto("/")}/>
        <nav class="mobile">
            <MenuButton on:click={() => isDrawerActive = true}/>
        </nav>
        {#if isLoaded}
            <nav class="desktop">
                {#each navItems as link}
                    <a
                            class:active={link.activeRegex.test(activeRoute)}
                            href={link.url}>{link.title}</a
                    >
                {/each}
            </nav>
        {/if}
    </header>
</div>

{#if isDrawerActive}
    <div
            class="drawer"
            in:fly={{ x: -300, duration: 500 }}
            out:fly={{ duration: 500, x: -300 }}
    >
        <CloseButton on:click={() => isDrawerActive = false}/>

        <nav class="mobile-menu">
            {#each navItems as link, i}
                <a
                        on:click={() => (isDrawerActive = false)}
                        in:fly|global={{
                        y: 100,
                        duration: 500,
                        delay: (i + 1) * 100,
                    }}
                        class:active={link.activeRegex.test(activeRoute)}
                        href={link.url}>{link.title}</a
                >
            {/each}
        </nav>
    </div>
{/if}

<style lang="postcss">
    .top {
        @apply w-screen z-40 fixed top-0 bg-kPurple border-b border-white/20;
    }

    header {
        @apply px-5 lg:px-0 h-16 lg:h-20 flex items-center justify-between;
    }

    .logo {
        @apply h-10 lg:h-12 cursor-pointer;
    }

    header nav.desktop {
        @apply gap-x-5 hidden lg:flex;
    }

    nav.desktop a {
        @apply text-kPurpleDark lg:text-kWhite text-2xl font-bold hover:text-kYellow transition-all duration-500;
    }

    nav.desktop a.active {
        @apply text-kYellow;
    }

    header nav.mobile {
        @apply text-kWhite lg:hidden;
    }

    header nav.mobile i {
        @apply text-6xl cursor-pointer text-kYellow;
    }

    .drawer {
        @apply w-screen z-50 h-screen bg-kPurpleDark fixed top-0 left-0 transition-all duration-500 flex flex-col p-10 items-end;
    }

    .drawer i {
        @apply text-kYellow text-6xl cursor-pointer;
    }

    .mobile-menu {
        @apply flex flex-col gap-y-10 text-4xl items-end text-kWhite font-bold mt-20;
    }

    .mobile-menu a {
        @apply hover:text-kYellow transition-all duration-500;
    }

    .mobile-menu a.active {
        @apply text-kYellow;
    }

    img.btn {
        @apply h-8 cursor-pointer;
    }
</style>
