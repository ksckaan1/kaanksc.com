<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		variant?: "primary";
		href?: string;
		target?: string;
		onclick?: () => void;
		children?: Snippet;
	}

	let { variant = "primary", onclick, children }: Props = $props();
</script>

<button {onclick} class="bg-primary text-on-primary rounded px-4 py-2">
	{@render children?.()}
</button>
