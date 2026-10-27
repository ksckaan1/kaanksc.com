<script lang="ts">
    const randomPercent = () => 30 + Math.ceil(Math.random() * 70) + "%";
</script>

<div
    class="flex flex-col items-start justify-start gap-3 rounded-3xl bg-surface-container p-5"
>
    <div
        style="width: {randomPercent()}"
        class="h-5 animate-pulse rounded-full bg-surface-container-highest"
    ></div>
    <div
        style="width: {randomPercent()}"
        class="h-5 animate-pulse rounded-full bg-surface-container-highest"
    ></div>
    <div
        style="width: {randomPercent()}"
        class="h-5 animate-pulse rounded-full bg-surface-container-highest"
    ></div>
</div>
