<script>
    import {links} from "../utils/links.js";
</script>

<section id="contact" class="scroll-my-20 bg-teal-700 p-10 text-gray-300">
    <div class="text-6xl sm:text-8xl opacity-40 text-center">contact me</div>

    <div class="flex gap-7 flex-wrap mt-10 justify-center">
        {#each links as link}
            <a href={link.url} target="_blank" class="group">
                <div class="min-w-48 flex flex-col bg-teal-800 rounded overflow-hidden">
                    <div class="p-3">
                        <img src={link.icon} class="h-24 opacity-50 group-hover:opacity-100 transition duration-1000" alt="icon">
                    </div>
                    <div class="text-lg text-center bg-teal-900">{link.name}</div>
                </div>
            </a>
            {/each}
    </div>
</section>