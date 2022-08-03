<script>
    export let article;
</script>

<a href={article.link} target="_blank">
    <div class="rounded p-3 bg-teal-900 flex flex-col gap-3 overflow-hidden">
        <div class="text-xl font-bold text-teal-500">{article.title}</div>
        <div class="text-lg text-teal-600">
            {article.pubDate.replaceAll("+0000","")}
        </div>
        <div class="flex gap-3 flex-wrap">
            {#each article.categories as cat}
                <div class="px-2 py-1 bg-teal-500 text-teal-900">
                    {cat}
                </div>
            {/each}
        </div>
    </div>
</a>