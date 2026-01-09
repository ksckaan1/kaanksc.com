<script lang="ts">
	import type { Snippet } from "svelte";
	import { ripple } from "svelte-ripple-action";

	interface Props {
		variant?: "primary";
		onclick?: () => void;
		children?: Snippet;
		disabled?: boolean;
	}

	let {
		variant = "primary",
		onclick,
		children,
		disabled = false,
	}: Props = $props();
</script>

<button
	{onclick}
	use:ripple
	class="text-primary rounded px-4 py-2"
	class:opacity-50={disabled}
	{disabled}
>
	{@render children?.()}
</button>
