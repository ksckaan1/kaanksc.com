<script lang="ts">
	import { onMount } from "svelte";
	import type { Post } from "$lib/models/types";

	import PostCard from "$lib/components/PostCard.svelte";
	import SkeletonPostCard from "$lib/components/SkeletonPostCard.svelte";

	interface Props {
		limit?: number;
		offset?: number;
	}

	let { limit = 5, offset = 0 }: Props = $props();

	let posts: Post[] = $state([]);
	let isLoaded = $state(false);
	let isLoadingAnimationEnded = $state(false);

	onMount(async () => {
		setTimeout(() => {
			isLoadingAnimationEnded = true;
		}, 1000);
		const response = await fetch(`/api/posts?limit=${limit}&offset=${offset}`);
		const body = await response.json();
		posts = body.posts;
		isLoaded = true;
	});
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-baseline justify-between gap-4">
		<h1 class="section-title">Son {limit} Yazı</h1>
		<a
			href="/blog/"
			class="shrink-0 rounded-full bg-secondary-container px-4 py-2 text-sm font-medium text-on-secondary-container transition-colors hover:bg-primary-container hover:text-on-primary-container"
		>
			Tümü
		</a>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#if !isLoaded || !isLoadingAnimationEnded}
			{#each Array(limit) as _}
				<SkeletonPostCard />
			{/each}
		{:else}
			{#each posts as post}
				<PostCard {post} />
			{/each}
		{/if}
	</div>
</div>
