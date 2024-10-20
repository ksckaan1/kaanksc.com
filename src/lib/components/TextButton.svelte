<script lang="ts">
  import type { Snippet } from "svelte";
  import { ripple } from "svelte-ripple-action";

  interface Props {
    variant?: 'primary';
    onclick?: () => void;
    children?: Snippet;
  }

  let {
    variant = 'primary',
    onclick,
    children
  }: Props = $props();
</script>
<button {onclick} use:ripple class="text-primary rounded px-4 py-2">
{@render children?.()}
</button>