<script lang="ts">
	import type { Post } from "$lib/models/types";
	import { onMount } from "svelte";
	import Icon from "@iconify/svelte";
	import PostCard from "$lib/components/PostCard.svelte";
	import SkeletonPostCard from "$lib/components/SkeletonPostCard.svelte";
	let posts: Post[] = $state([]);
	let isLoaded = $state(false);
	let isLoadingAnimationEnded = $state(false);

	onMount(async () => {
		setTimeout(() => {
			isLoadingAnimationEnded = true;
		}, 1000);

		const response = await fetch("/api/posts");
		const body = await response.json();
		posts = body.posts;
		isLoaded = true;
	});
</script>

<svelte:head>
	<title>Blog | Kaan Kuscu</title>
	<meta
		name="description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
	/>
	<meta
		name="keywords"
		content="kaan, kuscu, blog, go, programlama, linux, blog, yazılım"
	/>
	<meta property="og:title" content="Yazılar | Kaan Kuscu" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
	/>
	<meta property="og:image" content="https://kaanksc.com/og/main.webp" />
	<meta name="twitter:title" content="Blog | Kaan Kuscu" />
	<meta
		name="twitter:description"
		content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
	/>
	<meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8">
	<div class="flex items-center justify-between gap-4">
		<h1 class="section-title">Yazılar</h1>
		<a
			href="/rss/"
			class="grid size-12 shrink-0 place-items-center rounded-full bg-secondary-container text-on-secondary-container transition-colors hover:bg-primary-container hover:text-on-primary-container"
			target="_blank"
			aria-label="RSS akışı"
		>
			<Icon icon="line-md:rss" width="24" height="24" />
		</a>
	</div>

	{#if !isLoaded || !isLoadingAnimationEnded}
		<div
			class="relative grid h-[calc(100dvh-20rem)] grid-cols-1 gap-4 overflow-y-hidden sm:grid-cols-2"
		>
			{#each Array(20) as _}
				<SkeletonPostCard />
			{/each}
			<div
				class="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-surface to-transparent"
			></div>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</div>
