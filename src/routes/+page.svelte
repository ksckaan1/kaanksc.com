<script lang="ts">
    import Contacts from "$lib/parts/Contacts.svelte";
    import LastPosts from "$lib/parts/LastPosts.svelte";
    import PinnedProjects from "$lib/parts/PinnedProjects.svelte";
</script>

<svelte:head>
    <title>Kaan Kuscu - Backend Developer</title>
    <meta
        name="description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
    />
    <meta
        name="keywords"
        content="kaan, kuscu, go, programlama, linux, blog, yazılım"
    />
    <meta property="og:title" content="Kaan Kuscu - Backend Developer" />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
    />
    <meta property="og:image" content="https://kaanksc.com/og/main.webp" />
    <meta name="twitter:title" content="Kaan Kuscu - Backend Developer" />
    <meta
        name="twitter:description"
        content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
    />
    <meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="mx-auto flex w-full max-w-5xl flex-col gap-14 px-4 py-8">
    <Contacts />
    <LastPosts limit={4} offset={0} />
    <PinnedProjects />
</div>
