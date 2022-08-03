<script>
    import {fly} from "svelte/transition"

    export let repo;
    export let index;
</script>
<a href={repo.html_url} target="_blank">
    <div class="bg-teal-700 rounded overflow-hidden group">
        <img src={"https://opengraph.githubassets.com/1/"+repo.full_name} alt="cover"
             class="w-full group-hover:scale-105 transition" in:fly={{duration:200, delay: 100 * index, y: -100}}>
        <div class="w-full bg-teal-900 px-3 py-1 text-center">{repo.name}</div>
        <div class="p-3 text-sm overflow-hidden text-center">{repo.description || "Açıklama yok.."}</div>
        <div class="w-full bg-teal-900 px-3 py-1 flex">
            <button class="flex-1">Browse</button>

            {#if repo.homepage}
                <a class="flex-1 text-center border-l-[1px] border-teal-700" href={repo.homepage} target="_blank">Website</a>
            {/if}
        </div>
    </div>
</a>