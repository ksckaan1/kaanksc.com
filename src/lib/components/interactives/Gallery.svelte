<script lang="ts">
	import { marked } from "marked";
	import TextButton from "../TextButton.svelte";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

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

	const listenArrowKeys = (ev: KeyboardEvent) => {
		if (!isMaximized) return;

		if (ev.key === "ArrowLeft" && activeIndex > 0) {
			activeIndex--;
		}

		if (ev.key === "ArrowRight" && activeIndex < elems.length - 1) {
			activeIndex++;
		}
	};

	onMount(() => {
		window.addEventListener("keydown", listenArrowKeys);

		return () => {
			window.removeEventListener("keypress", listenArrowKeys);
		};
	});
</script>

<div
	class={isMaximized
		? "fixed top-0 left-0 w-screen h-screen p-5 bg-black/70 flex items-center justify-center z-50"
		: ""}
	onclick={(e) => {
		if (e.target == e.currentTarget) isMaximized = false;
	}}
>
	<div
		class="flex flex-col border border-white/20 p-0 m-0 gap-0 bg-gray-900 overflow-hidden rounded
		{isMaximized
			? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl min-h-[calc(100vh - 10rem)]'
			: ''}"
	>
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
			<span class="text-primary/50">
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
		<p class="m-0 p-5 pt-0">{@html marked(elems[activeIndex].caption)}</p>
	</div>
</div>
