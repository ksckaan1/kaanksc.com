<script lang="ts">
	import type { Data } from "$lib/models/types";
	import { formatDate } from "../../../utils/format";
	import { getAuthorInfo } from "../../../utils/author";

	interface Props {
		data: Data;
	}

	let { data }: Props = $props();

	let authors = data.meta?.authors
		.map((author) => getAuthorInfo(author))
		.filter((author) => author != null);

	const createOGImageLink = (title: string) => {
		const sp = new URLSearchParams({
			title: title,
		});

		return `https://og.kaanksc.com/og?${sp.toString()}`;
	};
</script>

<svelte:head>
	<title>{data.meta.title} | Kaan Kuscu</title>
	<meta name="description" content={data.meta.description} />
	<meta name="keywords" content={data.meta.tags.join(", ")} />
	<meta property="og:title" content="{data.meta.title} | Kaan Kuscu" />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={createOGImageLink(data.meta.title)} />
	<meta name="twitter:title" content="{data.meta.title} | Kaan Kuscu" />
	<meta name="twitter:description" content={data.meta.description} />
	<meta property="twitter:image" content={createOGImageLink(data.meta.title)} />
</svelte:head>

<!-- POST HEADER -->
<div
	class="relative w-full overflow-x-hidden border-b border-outline-variant/40 bg-surface-container py-10"
>
	<div class="mx-auto w-full max-w-5xl px-4">
		<a
			class="text-sm font-medium text-primary hover:underline"
			href="/blog/">← Yazılar</a
		>
		<div class="mt-3 flex flex-col gap-3">
			<h1 class="text-balance text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
				{data.meta.title}
			</h1>
			<p class="text-on-surface-variant">{formatDate(data.meta.date)}</p>
			<div class="flex flex-wrap gap-2">
				{#each data.meta.tags as tag}
					<span
						class="rounded-full bg-secondary-container px-3 py-1 text-xs font-medium text-on-secondary-container"
					>
						#{tag}
					</span>
				{/each}
			</div>
		</div>
	</div>

	{#if !data.meta.published}
		<div class="absolute -right-10 top-5">
			<div class="rotate-45 bg-error px-10 py-1 font-bold text-on-error">
				Taslak
			</div>
		</div>
	{/if}
</div>

<!-- POST FIELD -->

<article class="prose mx-auto mt-10 w-full max-w-2xl px-4">
	<!-- svelte-ignore svelte_component_deprecated -->
	<svelte:component this={data.content} />
</article>
<div class="mx-auto mt-12 flex w-full max-w-5xl flex-wrap gap-4 px-4">
	{#each authors as author}
		<a
			href={author?.link}
			class="flex w-full items-center gap-5 rounded-3xl bg-surface-container p-5 transition-colors hover:bg-surface-container-high"
			target="_blank"
		>
			<img
				src={author?.avatar_url}
				class="w-20 rounded-full border border-outline-variant/50"
				alt={author?.full_name}
			/>
			<div>
				<h3 class="text-xl font-semibold text-on-surface">
					{author?.full_name}
				</h3>
				<p class="text-on-surface-variant">{author?.title}</p>
			</div>
		</a>
	{/each}
</div>
