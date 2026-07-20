<script lang="ts">
	import type { Snippet } from "svelte";

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
	class="text-primary rounded px-4 py-2"
	class:opacity-30={disabled}
	{disabled}
>
	{@render children?.()}
</button>
