<script lang="ts">
	import { formatDate } from "../../utils/format";
	import type { Post } from "$lib/models/types";

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

<a
	href="/blog/{post.slug}"
	class="group flex flex-col gap-2 rounded-3xl bg-surface-container p-5 transition-colors hover:bg-surface-container-high"
>
	<h2
		class="text-xl font-semibold text-on-surface transition-colors group-hover:text-primary"
	>
		{post.title}
	</h2>
	<p class="text-sm text-on-surface-variant">{formatDate(post.date)}</p>
	<div class="mt-auto flex flex-wrap gap-2 pt-2">
		{#each post.tags as tag}
			<span
				class="rounded-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
			>
				#{tag}
			</span>
		{/each}
	</div>
</a>
