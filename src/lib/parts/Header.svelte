<script>
  import { goto } from "$app/navigation";
  import Logo from "$lib/components/Logo.svelte";
  import TextButton from "$lib/components/TextButton.svelte";
</script>

<header class="sticky top-0 bg-black z-40 border-b border-white/20">
  <div class="w-full max-w-5xl mx-auto px-1 py-5 flex justify-between">
    <TextButton
      onclick={() => {
        goto("/");
      }}><Logo size={40} /></TextButton
    >
    <div class="text-primary flex items-center">
      <TextButton
        onclick={() => {
          goto("/");
        }}>Yazılar</TextButton
      >
      <TextButton
        onclick={() => {
          goto("/projects");
        }}>Projeler</TextButton
      >
      <TextButton
        onclick={() => {
          goto("/contact");
        }}>İletişim</TextButton
      >
    </div>
  </div>
</header>
