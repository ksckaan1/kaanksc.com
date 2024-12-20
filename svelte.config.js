import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkEmoji from "remark-emoji";
import remarkHint from "remark-hint";
import relativeImages from "mdsvex-relative-images";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.svx'],
    highlight: {
        highlighter: (code, lang, args) => {
            return `<Components.pre code={\`${escape(code)}\`} lang={\`${lang ?? "text"}\`} args={\`${args ?? ""}\`} />`;
        },
    },
    remarkPlugins: [
        remarkEmoji,
        remarkHint,
        relativeImages,
    ],
    layout: {
        _: './src/layouts/mdsvex.svelte'
    },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        adapter: adapter()
    },
    extensions: [".svelte", ".svx"]
};

export default config;
