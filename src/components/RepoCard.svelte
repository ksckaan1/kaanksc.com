<script>
    import {fly} from "svelte/transition"

    export let repo;
    export let index;
</script>
<a href={repo.html_url} target="_blank">
    <div class="bg-teal-700 rounded overflow-hidden group">
        <div class="w-full bg-teal-900 px-3 py-1 text-center">{repo.name}</div>
        <div class="p-3 text-sm overflow-hidden text-center">{repo.description || "Açıklama yok.."}</div>
        <div class="flex justify-center gap-x-2 mb-3">
            <div class="flex gap-x-1"><img class="w-3" src="/icons/Star.svg" alt=""><span class="text-sm">{repo.stargazers_count}</span></div>
            <div class="flex gap-x-1"><img class="w-3" src="/icons/Fork.svg" alt=""><span class="text-sm">{repo.forks}</span></div>
        </div>
        <div class="w-full bg-teal-900 px-3 py-1 flex">
            <button class="flex-1">Browse</button>

            {#if repo.homepage}
                <a class="flex-1 text-center border-l-[1px] border-teal-700" href={repo.homepage} target="_blank">Website</a>
            {/if}
        </div>
    </div>
</a>