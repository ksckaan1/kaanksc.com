<script lang="ts">
    import "$lib/style/main.css";
    import Header from "$lib/components/Header.svelte";
    import {page} from "$app/stores";
</script>

<svelte:head>
    <meta name="author" content="Kaan Kuscu"/>
    <meta property="og:site_name" content="Kaan Kuscu - Backend Developer">
    <meta property="og:url" content={$page.url.href}>
    <meta name="twitter:creator" content="@ksckaan1">
    <meta name="twitter:site" content="@ksckaan1">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:widgets:new-embed-design" content="on">
</svelte:head>

<Header/>
<slot/>
