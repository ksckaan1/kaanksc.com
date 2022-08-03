<script>
    import {onMount} from "svelte";
    import {repoRequest} from "../utils/requests/repo.js";
    import RepoCard from "./RepoCard.svelte";

    let repos = [];

    onMount(async () => {
        await repoRequest().then(data => repos = data)
        console.log(repos)
    })
</script>
<section id="projects" class="scroll-my-20 min-h-[calc(100vh-5rem)] bg-teal-800 text-gray-300">
    <div class="mx-auto container p-10">
        <div class="text-6xl sm:text-8xl opacity-40">projects</div>

        <div class="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
            {#each repos as repo, index}
                <RepoCard {repo} {index}/>
            {/each}
        </div>
    </div>
</section>