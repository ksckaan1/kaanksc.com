<script lang="ts">
  import type { Post } from "$lib/models/types";
  import { onMount } from "svelte";
  import { ripple } from "svelte-ripple-action";
  import { formatDate } from "../utils/format";
  let posts: Post[] = [];

  onMount(async () => {
    const response = await fetch("/api/posts/");
    posts = await response.json();
  });
</script>

<svelte:head>
  <title>Kaan Kuscu - Backend Developer</title>
  <meta
    name="description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
  />
  <meta
    name="keywords"
    content="kaan, kuscu, go, programlama, linux, blog, yazılım"
  />
  <meta property="og:title" content="Kaan Kuscu - Backend Developer" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
  />
  <meta property="og:image" content="https://kaanksc.com/og/main.webp" />
  <meta name="twitter:title" content="Kaan Kuscu - Backend Developer" />
  <meta
    name="twitter:description"
    content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."
  />
  <meta property="twitter:image" content="https://kaanksc.com/og/main.webp" />
</svelte:head>

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-5">
  <h1 class="section-title">YAZILAR</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each posts as post}
      <a
        href="/post/{post.slug}"
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
