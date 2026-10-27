<script lang="ts">
	import { onMount } from "svelte";
	import { getRepositories } from "../../utils/github";
	import type { IRepo } from "$lib/models/github";
	import Loading from "$lib/components/Loading.svelte";
	import Icon from "@iconify/svelte";
	import externalIcon from "$lib/img/icons/external.svg";

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
					title: "Google Rust Stil Rehberi",
					description:
						"Google'ın hazırlamış olduğu Rust programlama dili stil rehberinin Türkçe çevirisi",
					url: "https://github.com/ksckaan1/google-rust-style-guide-tr",
					icon: externalIcon,
					tags: ["Rust"],
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
					title: "servicemaker",
					description:
						"Ortam değişkeni tabanlı konfigürasyonla servis yaşam döngüsünü (init, run, close, health check) yöneten Go kütüphanesi",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/servicemaker",
					tags: ["Go"],
				},
				{
					title: "fibergh",
					description: "Fiber v3 için generic handler desteği",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/fibergh",
					tags: ["Go", "Fiber"],
				},
				{
					title: "standardgh",
					description: "net/http için generic handler desteği",
					icon: externalIcon,
					url: "https://github.com/ksckaan1/standardgh",
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

<div class="mx-auto max-w-5xl px-4 py-8">
	<h1 class="section-title">Projeler</h1>

	{#each showcase as cat}
		<div class="mt-10">
			<h2 class="mb-4 text-xl font-semibold text-on-surface">{cat.name}</h2>
			<div class="doc-grid">
				{#each cat.items as item}
					<a target="_blank" href={item.url} class="doc-card group">
						<div class="flex items-start justify-between gap-3">
							<h3 class="text-lg font-semibold leading-snug text-on-surface">
								{item.title}
							</h3>
							<Icon
								icon="octicon:link-external-16"
								width="20"
								class="mt-1 shrink-0 text-on-surface-variant transition-colors group-hover:text-primary"
							/>
						</div>
						<p class="mt-2 text-sm leading-relaxed text-on-surface-variant">
							{item.description}
						</p>
						{#if item.tags}
							<div class="mt-4 flex flex-wrap gap-2">
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

	<div class="mt-10">
		{#if isReposLoaded && repos.length !== 0}
			<h2 class="mb-4 text-xl font-semibold text-on-surface">GitHub</h2>
			<div class="doc-grid">
				{#each repos as repo}
					<a target="_blank" href={repo.html_url} class="doc-card group">
						<div class="flex items-start justify-between gap-3">
							<h3 class="text-lg font-semibold leading-snug text-on-surface">
								{repo.name}
							</h3>
							<Icon
								icon="octicon:link-external-16"
								width="20"
								class="mt-1 shrink-0 text-on-surface-variant transition-colors group-hover:text-primary"
							/>
						</div>
						<p class="mt-2 text-sm leading-relaxed text-on-surface-variant">
							{repo.description || "Açıklama yok"}
						</p>
						<div class="mt-4 flex gap-4">
							<div class="flex items-center gap-1.5 text-on-surface-variant">
								<Icon icon="octicon:star-16" width="16" />
								<span class="text-sm">{repo.stargazers_count}</span>
							</div>
							<div class="flex items-center gap-1.5 text-on-surface-variant">
								<Icon icon="octicon:repo-forked-16" width="16" />
								<span class="text-sm">{repo.forks}</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:else if isReposLoaded && repos.length === 0}
			<p class="text-on-surface-variant">Repo bulunamadı</p>
		{:else}
			<div class="flex items-center justify-center py-10">
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
		@apply flex flex-col rounded-3xl bg-surface-container p-5
		       transition-colors hover:bg-surface-container-high;
	}

	.tag {
		@apply text-xs font-medium px-3 py-1 rounded-full
		       bg-secondary-container text-on-secondary-container;
	}
</style>
