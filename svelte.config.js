import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/kit/vite';
import remarkEmoji from "remark-emoji"
import remarkHint from "remark-hint"
import {mdsvex} from "mdsvex";
import {customHighlighter} from "./src/utils/custom_highlighter.js";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.mdx'],
    highlight: {
        highlighter: customHighlighter,
    },
    remarkPlugins: [
        remarkEmoji,
        remarkHint,
    ],
    layout: {
        _: './src/layouts/mdsvex.svelte'
    },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.mdx'],
    preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

    kit: {
        adapter: adapter()
    }
};
export default config;
