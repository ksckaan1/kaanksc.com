<script lang="ts">
    import externalIcon from "$lib/img/icons/external.svg";
    import { onMount } from "svelte";

    export let href: string = "";

    let isExternal = false;

    onMount(() => {
        let isContainsScheme =
            href.includes("http://") || href.includes("https://");
        if (isContainsScheme && location.host != new URL(href).host) {
            isExternal = true;
        }
    });
</script>

<a
    class="inline-flex gap-x-1 items-center h-4"
    {href}
    target={isExternal ? "_blank" : "_self"}
>
    <span>
        <slot />
    </span>
    {#if isExternal}
        <img src={externalIcon} alt="external" />
    {/if}
</a>
