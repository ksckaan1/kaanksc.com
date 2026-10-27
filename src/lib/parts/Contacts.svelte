<script lang="ts">
	import Icon from "@iconify/svelte";

	const contactList = [
		{
			title: "GitHub",
			subtitle: "ksckaan1",
			link: "https://github.com/ksckaan1",
			icon: "line-md:github",
		},
		{
			title: "X",
			subtitle: "ksckaan1",
			link: "https://x.com/ksckaan1",
			icon: "line-md:twitter-x",
		},
		{
			title: "Reddit",
			subtitle: "ksckaan1",
			link: "https://www.reddit.com/user/ksckaan1",
			icon: "line-md:reddit",
		},
		{
			title: "YouTube",
			subtitle: "ksckaan1",
			link: "https://www.youtube.com/@ksckaan1",
			icon: "line-md:youtube",
		},
		{
			title: "LinkedIn",
			subtitle: "ksckaan1",
			link: "https://www.linkedin.com/in/ksckaan1/",
			icon: "line-md:linkedin",
		},
		{
			title: "E-posta",
			subtitle: "me@kaanksc.com",
			link: "mailto:me@kaanksc.com",
			icon: "line-md:email",
		},
	];
</script>

<div class="flex flex-col gap-4">
	<h1 class="section-title">İletişim</h1>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each contactList as contact}
			<a
				href={contact.link}
				target="_blank"
				class="group flex items-center gap-4 rounded-3xl bg-surface-container p-4 transition-colors hover:bg-surface-container-high"
			>
				<div
					class="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-container text-on-primary-container transition-transform group-hover:scale-105"
				>
					<Icon icon={contact.icon} height="28" />
				</div>
				<div class="min-w-0">
					<h2 class="truncate text-xl font-semibold text-on-surface">
						{contact.title}
					</h2>
					<h3 class="truncate text-sm text-on-surface-variant">
						{contact.subtitle}
					</h3>
				</div>
			</a>
		{/each}
	</div>
</div>
