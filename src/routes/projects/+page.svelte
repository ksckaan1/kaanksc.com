<script lang="ts">
	import { onMount } from "svelte";
	import { getRepositories } from "../../utils/github";
	import type { IRepo } from "$lib/models/github";
	import Loading from "$lib/components/Loading.svelte";
	import externalIcon from "$lib/img/icons/external.svg";
	import forkIcon from "$lib/img/icons/fork.svg";
	import starIcon from "$lib/img/icons/star.svg";

	const showcase = [
		{
			name: "Çeviriler",
			type: "translations",
			items: [
				{
					title: "Google Go Stil Rehberi",
					description:
						"Google'ın hazırlamış olduğu Go programlama dili stil rehberinin Türkçe çevirisi",
					url: "https://github.com/ksckaan1/google-go-style-guide-tr",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "Uber Go Stil Rehberi",
					description:
						"Uber şirketinin hazırlamış olduğu stil rehberinin Türkçe çevirisi",
					url: "https://github.com/ksckaan1/uber-go-style-guide-tr",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "Efektif Go",
					description: "Effective Go Türkçe Çeviri",
					url: "https://github.com/ksckaan1/efektif-go",
					icon: externalIcon,
					tags: ["Go"],
				},
			],
		},
		{
			name: "Kendi Yazdıklarım",
			type: "writings",
			items: [
				{
					title: "Go Programlama Dili E-kitap",
					description: "Go programlama dili için Türkçe eğitim kaynağı",
					url: "https://go.kaanksc.com",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "Dart Programlama Dili E-kitap",
					description: "Dart programlama dili için Türkçe eğitim kaynağı",
					url: "https://dart.kaanksc.com",
					icon: externalIcon,
					tags: ["Dart"],
				},
				{
					title: "GNU/Linux E-kitap",
					description:
						"GNU/Linux işletim sistemi için Türkçe başlangıç rehberi",
					url: "https://linux.kaanksc.com",
					icon: externalIcon,
					tags: ["Linux"],
				},
			],
		},
		{
			name: "Araçlar",
			type: "tools",
			items: [
				{
					title: "crtui",
					description:
						"Container registry yönetimi için terminal tabanlı TUI aracı (registry:2, ghcr.io, Docker Hub)",
					url: "https://github.com/ksckaan1/crtui",
					icon: externalIcon,
					tags: ["Go", "Container"],
				},
				{
					title: "Hexago",
					description:
						"Go programlama dili için Hexagonal mimari proje yönetim CLI aracı",
					url: "https://github.com/ksckaan1/hexago",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "plasma-k8s-pod-monitor",
					description:
						"Kubernetes pod durumlarını izlemek için KDE Plasma 6 widget'ı",
					url: "https://github.com/ksckaan1/plasma-k8s-pod-monitor",
					icon: externalIcon,
					tags: ["KDE", "Kubernetes"],
				},
				{
					title: "plasma-activate-linux",
					description:
						"KDE Plasma 6 için Activate Linux meme widget'ı",
					url: "https://github.com/ksckaan1/plasma-activate-linux",
					icon: externalIcon,
					tags: ["KDE"],
				},
				{
					title: "templ-iconify",
					description: "Iconify ikonlarını Templ olarak indirici araç",
					url: "https://github.com/ksckaan1/templ-iconify",
					icon: externalIcon,
					tags: ["Go", "Templ"],
				},
				{
					title: "IconifyDL",
					description: "Iconify için icon indirici CLI aracı",
					url: "https://github.com/ksckaan1/iconifydl",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "APIredator",
					description: "API Load Testing aracı",
					url: "https://github.com/ksckaan1/apiredator",
					icon: externalIcon,
					tags: ["Go"],
				},
				{
					title: "Go Snippets Plugin",
					description: "Nova Editor için snippet eklentisi",
					url: "https://extensions.panic.com/extensions/ksckaan1/ksckaan1.GoSnippets/",
					icon: externalIcon,
					tags: ["Go", "Nova"],
				},
				{
					title: "kPurple VSCode",
					description: "Visual Studio Code için mor tema",
					url: "https://marketplace.visualstudio.com/items?itemName=ksckaan1.kpurple",
					icon: externalIcon,
					tags: ["VSCode", "Tema"],
				},
				{
					title: "kPurple Plasma Color Scheme",
					description: "KDE Plasma masaüstü ortamı için mor tema",
					url: "https://www.pling.com/p/1688355",
					icon: externalIcon,
					tags: ["KDE", "Tema"],
				},
				{
					title: "kPurple Kvantum Theme",
					description: "Kvantum için mor tema",
					url: "https://www.pling.com/p/1625856",
					icon: externalIcon,
					tags: ["KDE", "Tema"],
				},
				{
					title: "kPurple Alacritty Color Scheme",
					description: "Alacritty terminal için mor renk şeması",
					url: "https://github.com/ksckaan1/kpurple-alacritty-color-scheme",
					icon: externalIcon,
					tags: ["Alacritty", "Tema"],
				},
				{
					title: "Video Converter for Dolphin File Manager Service Menu",
					description:
						"Dolphin dosya yöneticisi için video dönüştürücü eklentisi",
					url: "https://github.com/ksckaan1/video-converter-dolphin-service-menu",
					icon: externalIcon,
					tags: ["KDE", "Dolphin"],
				},
				{
					title: "Open with Live Server for Dolphin Service Menu",
					description:
						"Dolphin dosya yöneticisi için klasörü http olarak sunma eklentisi",
					url: "https://github.com/ksckaan1/open-with-live-server-dolphin-service-menu",
					icon: externalIcon,
					tags: ["KDE", "Dolphin"],
				},
				{
					title: "Service Menu Image Writer",
					description:
						"Dolphin dosya yöneticisi için iso uzantılı dosyaları diske yazma eklentisi",
					url: "https://github.com/ksckaan1/service-menu-image-writer",
					icon: externalIcon,
					tags: ["KDE", "Dolphin"],
				},
			],
		},
		{
			name: "Kütüphaneler",
			type: "frameworks",
			items: [
				{
					title: "logger",
					description:
						"Go programlama dili için yapılandırılabilir, yüksek performanslı loglama paketi",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/logger",
					tags: ["Go"],
				},
				{
					title: "stati",
					description:
						"Go programlama dili için runtime istatistik izleme paketi",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/stati",
					tags: ["Go"],
				},
				{
					title: "gokachu",
					description:
						"Go programlama dili için TTL ve Generic ile in-memory cache paketi",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/gokachu",
					tags: ["Go"],
				},
				{
					title: "keyfile",
					description: "Go programlama dili için keyfile parser paketi",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/keyfile",
					tags: ["Go"],
				},
				{
					title: "m2s",
					description:
						"Go programlama dili için Multipart Form Data'yı struct'a parse eden paket",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/m2s",
					tags: ["Go"],
				},
			],
		},
	];

	let isReposLoaded = false;
	let repos: IRepo[] = [];

	onMount(() => {
		getRepositories().then((r) => {
			repos = r;
			isReposLoaded = true;
		});
	});
</script>

<svelte:head>
	<title>Projeler | Kaan Kuscu</title>
	<meta
		name="description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz."
	/>
	<meta
		name="keywords"
		content="kaan, kuscu, projeler, go, programlama, linux, blog, yazılım"
	/>
	<meta property="og:title" content="Projeler | Kaan Kuscu" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz."
	/>
	<meta property="og:image" content="https://kaanksc.com/og/main.webp" />
	<meta name="twitter:title" content="Projeler | Kaan Kuscu" />
	<meta
		name="twitter:description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Bu sayfadan projelerime göz atabilirsiniz."
	/>
	<meta
		property="twitter:image:src"
		content="https://kaanksc.com/og/main.webp"
	/>
</svelte:head>

<div class="max-w-5xl mx-auto p-5">
	<div class="section-title">PROJELER</div>

	{#each showcase as cat}
		<div class="mt-8">
			<h2 class="text-xl text-primary font-bold mb-4">{cat.name}</h2>
			<div class="doc-grid">
				{#each cat.items as item}
					<a
						target="_blank"
						href={item.url}
						class="doc-card gridbg group"
					>
						<div class="flex items-start justify-between gap-3">
							<h3 class="text-lg text-slate-200 font-medium leading-snug">
								{item.title}
							</h3>
							<img
								src={item.icon}
								alt=""
								class="w-5 h-5 shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
							/>
						</div>
						<p class="text-white/50 text-sm mt-2 leading-relaxed">
							{item.description}
						</p>
						{#if item.tags}
							<div class="flex flex-wrap gap-2 mt-4">
								{#each item.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	{/each}

	<div class="mt-8">
		{#if isReposLoaded && repos.length !== 0}
			<h2 class="text-xl text-primary font-bold mb-4">GitHub</h2>
			<div class="doc-grid">
				{#each repos as repo}
					<a
						target="_blank"
						href={repo.html_url}
						class="doc-card gridbg group"
					>
						<div class="flex items-start justify-between gap-3">
							<h3 class="text-lg text-slate-200 font-medium leading-snug">
								{repo.name}
							</h3>
							<img
								src={externalIcon}
								alt=""
								class="w-5 h-5 shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
							/>
						</div>
						<p class="text-white/50 text-sm mt-2 leading-relaxed">
							{repo.description || "Açıklama yok"}
						</p>
						<div class="flex gap-4 mt-4">
							<div class="flex items-center gap-1.5">
								<img src={starIcon} class="h-4" alt="" />
								<span class="text-sm text-white/60">{repo.stargazers_count}</span>
							</div>
							<div class="flex items-center gap-1.5">
								<img src={forkIcon} class="h-4" alt="" />
								<span class="text-sm text-white/60">{repo.forks}</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:else if isReposLoaded && repos.length === 0}
			Repo bulunamadı
		{:else}
			<div class="flex justify-center items-center">
				<Loading />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.doc-grid {
		@apply grid grid-cols-1 sm:grid-cols-2 gap-4;
	}

	.doc-card {
		@apply border border-white/20 rounded-lg p-5
		       hover:border-primary/40 transition-colors;
	}

	.tag {
		@apply text-xs font-medium px-2.5 py-0.5 rounded-full
		       bg-primary/15 text-primary border border-primary/25;
	}
</style>
