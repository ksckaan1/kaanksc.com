<script lang="ts">
    let isFlipped: boolean = false;

    const toggle = () => {
        isFlipped = !isFlipped;
    };
</script>

<div
    class="flex w-full flex-col items-center justify-center gap-y-5 rounded-3xl border border-outline-variant/50 bg-surface-container py-10"
>
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (Just because i)  -->

    <div class="wordCard" class:flipped={isFlipped} on:click={toggle}>
        <div class="cardFace frontFace">
            <span>ön</span>
        </div>
        <div class="cardFace backFace">
            <span>arka</span>
        </div>
    </div>

    <div>Tıkla ve çevir!</div>
</div>

<style>
    .wordCard {
        width: 200px;
        height: 300px;
        position: relative;
        perspective: 1000px;
        cursor: pointer;
    }

    .cardFace {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transition: transform 0.5s linear;
        transform-style: preserve-3d;
    }

    .backFace {
        background-color: rgb(var(--md-tertiary));
        color: rgb(var(--md-on-tertiary));
        transform: rotateY(180deg);
    }

    .frontFace {
        background-color: rgb(var(--md-primary));
        color: rgb(var(--md-on-primary));
        transform: rotateY(0deg);
    }

    .flipped .backFace {
        transform: rotateY(360deg);
    }

    .flipped .frontFace {
        transform: rotateY(180deg);
    }
</style>
