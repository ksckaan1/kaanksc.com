<script lang="ts">
  import { onMount } from "svelte";
  import { codeToHtml } from "shiki";
  import {
    transformerNotationDiff,
    transformerMetaHighlight,
  } from "@shikijs/transformers";
  import { browser } from "$app/environment";
  import Icon from "@iconify/svelte";
  import { ripple } from "svelte-ripple-action";
  import { fade } from "svelte/transition";

  interface Props {
    code: string;
    lang: string;
  }

  let { code, lang = "text" }: Props = $props();

  let outHTML = $state("");

  let isCopied = $state(false);

  onMount(async () => {
    if (browser) {
      let out = await codeToHtml(unescape(code), {
        lang,
        theme: "github-dark",
        transformers: [transformerNotationDiff(), transformerMetaHighlight()],
      });

      outHTML = getCodeHTML(out);
    }
  });

  const getCodeHTML = (elem: string): string => {
    let mainElem = document.createElement("div");
    mainElem.innerHTML = elem;
    return mainElem.querySelector("code")?.innerHTML || "";
  };

  const copyCode = () => {
    navigator.clipboard.writeText(unescape(code));
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 1000);
  };
</script>

<div class="relative flex flex-col rounded border border-white/20">
  <div class="absolute top-0 right-0 items-center gap-x-2 flex">
    {#if isCopied}
      <span transition:fade class="text-sm font-light text-primary/70">
        Kopyalandı!
      </span>
    {/if}
    <button
      use:ripple={{
        center: true,
      }}
      class="rounded-full flex justify-center items-center w-10 h-10 text-primary"
      onclick={copyCode}
    >
      {#if isCopied}
        <span class="text-primary">
          <Icon
            icon="line-md:clipboard-twotone-to-clipboard-check-twotone-transition"
            width="26"
          />
        </span>
      {:else}
        <span class="text-white/30 hover:text-primary">
          <Icon icon="line-md:clipboard" width="26" />
        </span>
      {/if}
    </button>
  </div>
  <pre
    class="language-{lang} scrollbar scrollbar-thumb-white/20 p-5 m-0 bg-transparent"><code
      >{@html outHTML}</code
    ></pre>
</div>

<style lang="postcss">
  .gridbg {
    background-image: linear-gradient(to right, #ececec18 1px, transparent 1px),
      linear-gradient(to bottom, #ececec18 1px, transparent 1px);
    background-size: 16px 16px;
  }
</style>
