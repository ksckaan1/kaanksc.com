<script lang="ts">
  import { ripple } from "svelte-ripple-action";
  import type { Data } from "$lib/models/types";
  import { formatDate } from "../../../utils/format";
  import { getAuthorInfo } from "../../../utils/author";
  import Icon from "@iconify/svelte";

  interface Props {
    data: Data;
  }

  let { data }: Props = $props();

  let authors = data.meta?.authors
    .map((author) => getAuthorInfo(author))
    .filter((author) => author != null);

  const createOGImageLink = (title: string) => {
    const sp = new URLSearchParams({
      title: title,
    });

    return `https://og.kaanksc.com/og?${sp.toString()}`;
  };
</script>

<svelte:head>
  <title>{data.meta.title} | Kaan Kuscu</title>
  <meta name="description" content={data.meta.description} />
  <meta name="keywords" content={data.meta.tags.join(", ")} />
  <meta property="og:title" content="{data.meta.title} | Kaan Kuscu" />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:image" content={createOGImageLink(data.meta.title)} />
  <meta name="twitter:title" content="{data.meta.title} | Kaan Kuscu" />
  <meta name="twitter:description" content={data.meta.description} />
  <meta property="twitter:image" content={createOGImageLink(data.meta.title)} />
</svelte:head>

<!-- POST HEADER -->
<div
  class="w-full gridbg border-b border-white/20 py-5 text-primary"
  use:ripple
>
  <div class="max-w-5xl w-full px-5 mx-auto">
    <a
      use:ripple
      class="text-primary self-start rounded font-light text-4xl"
      href="/blog/"
    >
      <h1 class="section-title">YAZILAR</h1></a
    >
    <div class="flex flex-col gap-3 py-5 text-primary rounded">
      <h2 class="text-primary text-3xl font-light">{data.meta.title}</h2>
      <p class="text-white/60 font-light">{formatDate(data.meta.date)}</p>
      <div class="text-white/80 flex flex-wrap gap-2 font-light">
        {#each data.meta.tags as tag}
          <span class="text-lg">#{tag}</span>
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- POST FIELD -->

<div
  class="prose prose-invert max-w-2xl w-full px-5 mx-auto mt-10 text-slate-300"
>
  <!-- svelte-ignore svelte_component_deprecated -->
  <svelte:component this={data.content} />
</div>
<div class="flex gap-5 flex-wrap max-w-5xl px-5 w-full mx-auto mt-10">
  {#each authors as author}
    <a
      href={author?.link}
      class="flex gap-x-5 text-primary border w-full border-white/20 p-5 rounded items-center"
      target="_blank"
      use:ripple
    >
      <img
        src={author?.avatar_url}
        class="w-20 rounded-full border border-white/20"
        alt={author?.full_name}
      />
      <div>
        <h3 class="text-primary text-xl">{author?.full_name}</h3>
        <h3 class="text-white/60">{author?.title}</h3>
      </div>
    </a>
  {/each}
</div>
