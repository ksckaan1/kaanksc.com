<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import Logo from "$lib/components/Logo.svelte";
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";

    const nav = [
        { title: "Anasayfa", href: "/" },
        { title: "Yazılar", href: "/blog" },
        { title: "Projeler", href: "/projects" },
    ];

    let showMobileMenu = $state(false);
    let theme = $state<"light" | "dark">("light");

    onMount(() => {
        theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    });

    const toggleTheme = () => {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    };

    const isActive = (href: string) => {
        const path = page.url.pathname.replace(/\/+$/, "") || "/";
        return href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
    };

    $effect(() => {
        document.body.style.overflow = showMobileMenu ? "hidden" : "";
    });
</script>

<header class="sticky top-0 z-40 bg-surface/90 backdrop-blur-md">
    <div
        class="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3"
    >
        <a
            href="/"
            aria-label="Anasayfa"
            class="rounded-full p-1.5 text-primary transition-colors hover:bg-surface-container"
        >
            <Logo size={36} />
        </a>

        <nav
            class="hidden items-center rounded-full bg-surface-container-low p-1 sm:flex"
        >
            {#each nav as item}
                <a
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    class="rounded-full px-5 py-2.5 text-sm font-medium transition-colors {isActive(
                        item.href,
                    )
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}"
                >
                    {item.title}
                </a>
            {/each}
        </nav>

        <div class="flex items-center gap-1">
            <button
                onclick={toggleTheme}
                aria-label={theme === "dark"
                    ? "Aydınlık temaya geç"
                    : "Karanlık temaya geç"}
                class="grid size-11 place-items-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
            >
                <Icon
                    icon={theme === "dark" ? "line-md:sunny" : "line-md:moon"}
                    width="24"
                />
            </button>
            <button
                onclick={() => (showMobileMenu = true)}
                aria-label="Menüyü aç"
                class="grid size-11 place-items-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:hidden"
            >
                <Icon icon="line-md:menu" width="26" />
            </button>
        </div>
    </div>
</header>

{#if showMobileMenu}
    <div
        transition:fly={{ y: -16, duration: 250 }}
        class="fixed inset-0 z-50 flex flex-col bg-surface p-4 sm:hidden"
    >
        <div class="flex items-center justify-between">
            <a href="/" class="p-1.5 text-primary" aria-label="Anasayfa">
                <Logo size={36} />
            </a>
            <button
                onclick={() => (showMobileMenu = false)}
                aria-label="Menüyü kapat"
                class="grid size-11 place-items-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
            >
                <Icon icon="line-md:close" width="26" />
            </button>
        </div>

        <nav class="mt-8 flex flex-col gap-2">
            {#each nav as item}
                <a
                    href={item.href}
                    onclick={() => (showMobileMenu = false)}
                    class="rounded-3xl px-6 py-5 text-3xl font-semibold transition-colors {isActive(
                        item.href,
                    )
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'text-on-surface hover:bg-surface-container'}"
                >
                    {item.title}
                </a>
            {/each}
        </nav>

        <button
            onclick={toggleTheme}
            class="mt-auto flex items-center gap-3 rounded-3xl bg-surface-container px-6 py-4 text-left font-medium text-on-surface transition-colors hover:bg-surface-container-high"
        >
            <Icon
                icon={theme === "dark" ? "line-md:sunny" : "line-md:moon"}
                width="24"
            />
            {theme === "dark" ? "Aydınlık tema" : "Karanlık tema"}
        </button>
    </div>
{/if}
