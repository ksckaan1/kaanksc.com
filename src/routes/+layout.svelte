<script lang="ts">
    import "$lib/style/main.css";
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <meta name="author" content="Kaan Kuscu"/>
</svelte:head>

<Header/>
<slot/>
