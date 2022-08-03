<script>
    import {fly} from "svelte/transition"

    let scroll;

    let isMenuOpen = false;

    let navLinks = [
        {
            name: "landing",
            url: "#"
        },
        {
            name: "skills",
            url: "#skills"
        },
        {
            name: "projects",
            url: "#projects"
        },
        {
            name: "contact",
            url: "#contact"
        },
        {
            name: "blog",
            url: "#blog"
        },
    ]

</script>
<svelte:window bind:scrollY={scroll}/>
<svelte:head>
    {#if scroll > 100}
        <meta name="theme-color" content="#134E4A">
    {:else}
        <meta name="theme-color" content="#115E59">
    {/if}
</svelte:head>
<header class="text-white h-20 flex justify-center items-center fixed w-full z-20 transition-colors"
        class:bg-teal-900={scroll>100}>
    <div class="container mx-auto flex justify-between px-10 items-center">
        <div class="font-extrabold text-4xl text-teal-500 cursor-pointer" on:click={()=>location.href = "#"}>kaanksc.
        </div>
        <nav class="flex items-center hidden sm:block">
            <ul class="flex list-none gap-x-5 text-teal-500 text-lg">
                {#each navLinks as link}
                    <li><a href={link.url}>{link.name}</a></li>
                {/each}
            </ul>
        </nav>
        <img on:click={()=> isMenuOpen = !isMenuOpen} class="sm:hidden h-6 cursor-pointer" src="/icons/Menu.svg" alt="">
    </div>
</header>

{#if isMenuOpen}
    <div class="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-teal-900 z-30"
         transition:fly={{x:-100,duration:200}}>
        <img on:click={()=> isMenuOpen = !isMenuOpen} src="/icons/Close.svg"
             class="absolute top-8 right-14 h-8 cursor-pointer" alt="">

        <nav>
            <ul class="flex flex-col items-center list-none gap-5 text-teal-500 text-xl font-bold">
                {#each navLinks as link}
                    <li><a on:click={()=> isMenuOpen = !isMenuOpen} href={link.url}>{link.name}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
{/if}

<style>
    li a {
        @apply hover:underline
    }
</style>