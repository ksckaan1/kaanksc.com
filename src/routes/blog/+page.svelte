<script lang="ts">
  import type { Post } from "$lib/models/types";
  import { onMount } from "svelte";
  import { ripple } from "svelte-ripple-action";
  import { formatDate } from "../../utils/format";
  import Icon from "@iconify/svelte";
  let posts: Post[] = $state([]);
  let count = $state(0);

  onMount(async () => {
    const response = await fetch("/api/posts");
    const body = await response.json();
    posts = body.posts;
    count = body.count;
  });
</script>

<svelte:head>
  <title>Blog | Kaan Kuscu</title>
  <meta
    name="description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
  />
  <meta
    name="keywords"
    content="kaan, kuscu, blog, go, programlama, linux, blog, yazılım"
  />
  <meta property="og:title" content="Yazılar | Kaan Kuscu" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
  />
  <meta property="og:image" content="https://kaanksc.com/og/main.webp" />
  <meta name="twitter:title" content="Blog | Kaan Kuscu" />
  <meta
    name="twitter:description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Tüm blog yazılarıma bu sayfadan ulaşabilirsiniz."
  />
  <meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-5">
  <div class="flex items-center justify-between text-primary">
    <h1 class="section-title">YAZILAR</h1>
    <a
      href="/rss/"
      class="p-3 rounded-full"
      target="_blank"
      use:ripple={{ center: true }}
    >
      <Icon icon="line-md:rss" width="32" height="32" />
    </a>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each posts as post}
      <a
        href="/blog/{post.slug}"
        use:ripple
        class="p-3 border border-white/20 text-primary rounded gridbg"
      >
        <h2 class="text-primary text-xl font-light">{post.title}</h2>
        <p class="text-white/60 font-light">{formatDate(post.date)}</p>
        <p class="text-white/80 font-light">
          {post.tags.map((t) => "#" + t).join(" ")}
        </p>
      </a>
    {/each}
  </div>
</div>
