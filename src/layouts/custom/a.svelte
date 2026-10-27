<script lang="ts">
    import Icon from "@iconify/svelte";
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
    class="inline-flex items-center gap-x-1"
    {href}
    target={isExternal ? "_blank" : "_self"}
>
    <span>
        <slot />
    </span>
    {#if isExternal}
        <Icon icon="octicon:link-external-16" width="14" />
    {/if}
</a>
