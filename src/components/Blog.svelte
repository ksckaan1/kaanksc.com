<script>
import {fetchBlogArticles} from "../utils/requests/blog.js";
import {onMount} from "svelte";
import Article from "./Article.svelte";
let articles = []
onMount(async ()=>{
    await fetchBlogArticles().then(data => articles = data)
})
</script>
<section id="blog" class="scroll-my-20 min-h-[calc(100vh-5rem)] bg-teal-800 text-gray-300">
    <div class="container mx-auto p-10">
        <div class="text-6xl sm:text-8xl opacity-40">blog</div>
        <div class="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {#each articles as article}
                <Article {article}/>
            {/each}
        </div>
    </div>
</section>
