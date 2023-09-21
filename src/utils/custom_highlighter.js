import * as shiki from "shiki";
import {escapeSvelte} from "mdsvex";


/**
 * @param {string} code
 * @param {string} lang
 * @param metastring
 */
export async function customHighlighter(code, lang = 'text', metastring = "") {

    let title = `<div class="code-title">
<div class="title">
<span>${metastring || lang || "Code"}</span>
<i onclick="navigator.clipboard.writeText(this.parentElement.parentElement.nextElementSibling.textContent)" class="fa-regular fa-clipboard"></i>
</div>
<div class="divider"></div>
</div>`
    const highlighter = await shiki.getHighlighter({theme: 'dracula'})
    const html = escapeSvelte(highlighter.codeToHtml(code, {lang}))
    return `{@html \`${title + html}\` }`
}