<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
    class="size-12 animate-spin rounded-full border-4 border-surface-container-highest border-t-primary"
    role="status"
    aria-label="Yükleniyor"
></div>
