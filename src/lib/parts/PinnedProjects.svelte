<script lang="ts">
    import { ripple } from "svelte-ripple-action";

    const pinned5projects = [
        {
            title: "Go Programlama Dili E-Kitap",
            description: "Go programlama dili için Türkçe eğitim kaynağı",
            link: "http://github.com/ksckaan1/go-programlama-dili",
        },
        {
            title: "Efektif Go",
            description: "Effective Go Türkçe Çeviri",
            link: "http://github.com/ksckaan1/efektif-go",
        },
        {
            title: "Hexago",
            description:
                "Go programlama dili için Hexagonal mimari proje yönetim CLI aracı",
            link: "http://github.com/ksckaan1/hexago",
        },
        {
            title: "Uber Go Stil Rehberi",
            description:
                "Uber şirketinin hazırlamış olduğu stil rehberinin Türkçe çevirisi",
            link: "http://github.com/ksckaan1/uber-go-style-guide-tr",
        },
        {
            title: "APIredator",
            description: "API Load Testing aracı",
            link: "http://github.com/ksckaan1/apiredator",
        },
    ];
</script>

<div class="flex flex-col gap-5 mt-5">
    <h1 class="section-title !text-3xl">SABİTLENEN 5 PROJE</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each pinned5projects as project}
            <a
                href={project.link}
                target="_blank"
                use:ripple
                class="p-3 border border-white/20 text-primary rounded gridbg"
            >
                <h2 class="text-primary text-xl font-light">
                    {project.title}
                </h2>
                <p class="text-white/60 font-light">
                    {project.description}
                </p>
            </a>
        {/each}
        <a
            href="/projects/"
            use:ripple
            class="border flex justify-center p-5 items-center bg-white/5 border-white/20 text-primary rounded"
        >
            <h2 class="text-primary text-xl font-light">
                Tüm projeleri gör &rightarrow;
            </h2>
        </a>
    </div>
</div>
