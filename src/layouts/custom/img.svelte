<script lang="ts">
	let { src, alt, title } = $props();

	let isWide = title?.includes("size='wide'");
</script>

<div></div>

<img {src} {alt} class:wide={isWide} />

<style>
	.wide {
		width: calc(100vw - 40px);
		max-width: 1000px;
		margin-left: 50%;
		transform: translateX(-50%);
	}
</style>
