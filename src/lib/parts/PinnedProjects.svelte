<script lang="ts">
	const pinnedProjects = [
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
			title: "crtui",
			description:
				"Container registry yönetimi için terminal tabanlı TUI aracı",
			link: "http://github.com/ksckaan1/crtui",
		},
		{
			title: "gokachu",
			description:
				"Go programlama dili için TTL ve Generic ile in-memory cache paketi",
			link: "http://github.com/ksckaan1/gokachu",
		},
	];
</script>

<div class="mt-4 flex flex-col gap-4">
	<div class="flex items-baseline justify-between gap-4">
		<h1 class="section-title">Sabitlenen Projeler</h1>
		<a
			href="/projects/"
			class="shrink-0 rounded-full bg-secondary-container px-4 py-2 text-sm font-medium text-on-secondary-container transition-colors hover:bg-primary-container hover:text-on-primary-container"
		>
			Tümü
		</a>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each pinnedProjects as project}
			<a
				href={project.link}
				target="_blank"
				class="group flex flex-col gap-2 rounded-3xl bg-surface-container p-5 transition-colors hover:bg-surface-container-high"
			>
				<h2
					class="text-xl font-semibold text-on-surface transition-colors group-hover:text-primary"
				>
					{project.title}
				</h2>
				<p class="text-on-surface-variant">{project.description}</p>
			</a>
		{/each}
	</div>
</div>
