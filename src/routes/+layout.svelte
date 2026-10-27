<script lang="ts">
	import { browser } from "$app/environment";
	import Header from "$lib/parts/Header.svelte";
	import { fly } from "svelte/transition";
	import "../app.css";
	import Icon from "@iconify/svelte";
	import Footer from "$lib/parts/Footer.svelte";
	import { ripple } from "$lib/ripple";

	let { children } = $props();
	let scrollY = $state(0);

	const scrollTop = () => {
		if (browser) {
			window.scrollTo({
				behavior: "smooth",
				top: 0,
			});
		}
	};
</script>

<svelte:window bind:scrollY onpointerdown={ripple} />
<Header />

<div class="min-h-[calc(100dvh-12rem)]">
	{@render children()}
</div>

<Footer />

{#if scrollY > 500}
	<div class="fixed bottom-5 right-5">
		<button
			transition:fly|global={{ duration: 200, y: 100 }}
			onclick={scrollTop}
			aria-label="Yukarı çık"
			class="grid size-14 place-items-center rounded-2xl bg-primary-container text-on-primary-container shadow-lg transition-colors hover:bg-primary hover:text-on-primary"
		>
			<Icon icon="line-md:arrow-up" width="28" />
		</button>
	</div>
{/if}
