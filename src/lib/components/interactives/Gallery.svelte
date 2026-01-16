<script lang="ts">
	import { marked } from "marked";
	import TextButton from "../TextButton.svelte";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";
	import { crossfade } from "svelte/transition";
	import { quintInOut, quintOut } from "svelte/easing";

	type Elem = {
		img: string;
		caption: string;
	};

	interface Props {
		elems: Elem[];
	}

	let { elems = [] }: Props = $props();

	let activeIndex = $state(0);

	let isMaximized = $state(false);

	$effect(() => {
		if (isMaximized) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	});

	const listenArrowKeys = (ev: KeyboardEvent) => {
		if (!isMaximized) return;

		if (ev.key === "ArrowLeft" && activeIndex > 0) {
			activeIndex--;
		}

		if (ev.key === "ArrowRight" && activeIndex < elems.length - 1) {
			activeIndex++;
		}

		if (ev.key === "Escape") {
			isMaximized = false;
		}
	};

	onMount(() => {
		window.addEventListener("keydown", listenArrowKeys);

		return () => window.removeEventListener("keypress", listenArrowKeys);
	});

	const [send, receive] = crossfade({
		duration: 600,
		easing: quintOut,
		fallback(node, params) {
			return { duration: 200, css: (t) => `opacity: ${t}` };
		},
	});
</script>

{#if isMaximized}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="
		fixed top-0 left-0 w-screen h-screen z-50
		flex items-center justify-center
		p-5 bg-black/70 cursor-pointer backdrop-blur-xl"
		onclick={(e) => {
			if (e.target == e.currentTarget) isMaximized = false;
		}}
	>
		<div
			class="
			flex flex-col relative
			border border-white/20 gap-0 bg-gray-900 rounded w-full max-w-6xl
			cursor-auto
			"
			in:receive={{ key: "123" }}
			out:send={{ key: "123" }}
		>
			<button
				class="absolute right-0 -top-12 bg-gray-900 rounded border border-white/20 px-2 py-1"
				onclick={() => (isMaximized = false)}
			>
				Esc
			</button>
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<img
				class="m-0 border-b border-white/20 rounded-t"
				src={elems[activeIndex].img}
				alt={elems[activeIndex].caption}
				onclick={() => (isMaximized = true)}
			/>
			<div class="flex justify-between mt-3 items-center">
				<TextButton onclick={() => activeIndex--} disabled={activeIndex === 0}>
					<div class="flex gap-x-3">
						<Icon icon="mdi:arrow-left" height="30" />
						<span>Önceki</span>
					</div>
				</TextButton>
				<span class="text-primary/50 text-sm">
					{activeIndex + 1} / {elems.length}
				</span>
				<TextButton
					onclick={() => activeIndex++}
					disabled={activeIndex === elems.length - 1}
				>
					<div class="flex gap-x-3">
						<span>Sonraki</span>
						<Icon icon="mdi:arrow-right" height="30" />
					</div>
				</TextButton>
			</div>
			{#if elems[activeIndex].caption}
				<p class="m-0 p-5 pt-0">{@html marked(elems[activeIndex].caption)}</p>
			{/if}
		</div>
	</div>
{:else}
	<div
		class="
		flex flex-col relative
		border border-white/20 gap-0 bg-gray-900 rounded
		group"
		in:receive={{ key: "123" }}
		out:send={{ key: "123" }}
	>
		<div
			class="opacity-0 transition-opacity flex items-center gap-x-3 duration-200 group-hover:opacity-100 absolute left-0 w-full -top-10 bg-primary text-black px-3 py-1 rounded"
		>
			<Icon icon="material-symbols:info-outline" width="24" height="24" />
			<span>Büyültmek için resme tıklayın</span>
		</div>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img
			class="m-0 border-b border-white/20 cursor-pointer"
			src={elems[activeIndex].img}
			alt={elems[activeIndex].caption}
			onclick={() => (isMaximized = true)}
		/>
		<div class="flex justify-between mt-3 items-center">
			<TextButton onclick={() => activeIndex--} disabled={activeIndex === 0}>
				<div class="flex gap-x-3">
					<Icon icon="mdi:arrow-left" height="30" />
					<span>Önceki</span>
				</div>
			</TextButton>
			<span class="text-primary/50 text-sm">
				{activeIndex + 1} / {elems.length}
			</span>
			<TextButton
				onclick={() => activeIndex++}
				disabled={activeIndex === elems.length - 1}
			>
				<div class="flex gap-x-3">
					<span>Sonraki</span>
					<Icon icon="mdi:arrow-right" height="30" />
				</div>
			</TextButton>
		</div>
		{#if elems[activeIndex].caption}
			<p class="m-0 p-5 pt-0">{@html marked(elems[activeIndex].caption)}</p>
		{/if}
	</div>
{/if}
