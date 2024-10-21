<script lang="ts">
  import type { Post } from "$lib/models/types";
  import { onMount } from "svelte";
  import { ripple } from "svelte-ripple-action";
  import { formatDate } from "../utils/format";
  let posts: Post[] = $state([]);
  let count = $state(0);

  const pinned5projects = [
    {
      title: "Go Programlama Dili E-Kitap",
      description: "Go programlama dili için Türkçe eğitim kaynağı",
      link: "http://github.com/ksckaan1/go-programlama-dili",
    },
    {
      title: "Efektif Go",
      description: "Effective Go Türkçe Çeviri",
      link: "http://github.com/ksckaan1/efektif-go",
    },
    {
      title: "Hexago",
      description:
        "Go programlama dili için Hexagonal mimari proje yönetim CLI aracı",
      link: "http://github.com/ksckaan1/hexago",
    },
    {
      title: "Uber Go Stil Rehberi",
      description:
        "Uber şirketinin hazırlamış olduğu stil rehberinin Türkçe çevirisi",
      link: "http://github.com/ksckaan1/uber-go-style-guide-tr",
    },
    {
      title: "APIredator",
      description: "API Load Testing aracı",
      link: "http://github.com/ksckaan1/apiredator",
    },
  ];

  onMount(async () => {
    const response = await fetch("/api/posts?limit=5&offset=0");
    const body = await response.json();
    posts = body.posts;
    count = body.count;
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

<div class="w-full max-w-5xl mx-auto p-5 flex flex-col gap-10">
  <div class="flex flex-col gap-5">
    <h1 class="section-title !text-3xl">SON 5 YAZI</h1>
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
      <a
        href="/blog/"
        use:ripple
        class="border flex justify-center p-5 items-center bg-white/5 border-white/20 text-primary rounded"
      >
        <h2 class="text-primary text-xl font-light">
          Tüm yazıları gör &rightarrow;
        </h2>
      </a>
    </div>
  </div>
  <div class="flex flex-col gap-5 mt-5">
    <h1 class="section-title !text-3xl">SABİTLENEN 5 PROJE</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each pinned5projects as project}
        <a
          href={project.link}
          target="_blank"
          use:ripple
          class="p-3 border border-white/20 text-primary rounded gridbg"
        >
          <h2 class="text-primary text-xl font-light">{project.title}</h2>
          <p class="text-white/60 font-light">{project.description}</p>
        </a>
      {/each}
      <a
        href="/projects/"
        use:ripple
        class="border flex justify-center p-5 items-center bg-white/5 border-white/20 text-primary rounded"
      >
        <h2 class="text-primary text-xl font-light">
          Tüm projeleri gör &rightarrow;
        </h2>
      </a>
    </div>
  </div>
</div>
