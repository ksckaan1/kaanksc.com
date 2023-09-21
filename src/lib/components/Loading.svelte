<script lang="ts">
    import { fade } from "svelte/transition";
    import loadingIcon from "$lib/img/icons/loading.png";
</script>

<img
    alt=""
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
    src={loadingIcon}
/>

<style>
    img {
        @apply w-16 animate-spin;
    }
</style>
