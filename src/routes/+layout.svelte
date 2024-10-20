<script lang="ts">
    import { browser } from '$app/environment';
	import Header from '$lib/parts/Header.svelte';
    import { fly } from 'svelte/transition';
	import '../app.css';
	import "svelte-ripple-action/ripple.css";
    import Icon from '@iconify/svelte';
    import { ripple } from 'svelte-ripple-action';
    import Footer from '$lib/parts/Footer.svelte';
	
	let { children } = $props();
	let scrollY = $state(0);

	const scrollTop = () => {
        if (browser) {
            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    }
</script>
<svelte:window bind:scrollY={scrollY}/>
<Header/>

<div class="min-h-[calc(100dvh-12rem)]">
	{@render children()}
</div>

<Footer/>

{#if scrollY > 500}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <div class="fixed bottom-4 right-4">
			<button
				use:ripple
				transition:fly|global={{duration:200,y:100}}
				onclick={scrollTop}
				class="flex justify-center items-center p-5 cursor-pointer aspect-square rounded-xl border border-white/20 bg-primary text-on-primary"
			>
				<Icon icon="line-md:arrow-close-up" width="32" />
    	</button>
		</div>
{/if}
