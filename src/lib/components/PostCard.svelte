<script lang="ts">
    import { ripple } from "svelte-ripple-action";
    import { formatDate } from "../../utils/format";
    import type { Post } from "$lib/models/types";

    interface Props {
        post: Post;
    }

    let { post }: Props = $props();
</script>

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
