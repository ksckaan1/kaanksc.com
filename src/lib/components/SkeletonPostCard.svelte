<script lang="ts">
    const randomPercent = () => 30 + Math.ceil(Math.random() * 70) + "%";
</script>

<div
    class="border flex flex-col justify-start p-5 items-start bg-white/5 border-white/20 gap-3 text-primary rounded"
>
    <div
        style="width: {randomPercent()}"
        class="rounded bg-white/20 h-5 animate-pulse"
    ></div>
    <div
        style="width: {randomPercent()}"
        class="rounded bg-white/20 h-5 animate-pulse"
    ></div>
    <div
        style="width: {randomPercent()}"
        class="rounded bg-white/20 h-5 animate-pulse"
    ></div>
</div>
