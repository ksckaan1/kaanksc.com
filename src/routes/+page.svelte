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

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-10">
    <Contacts />
    <LastPosts limit={5} offset={0} />
    <PinnedProjects />
</div>
