<script lang="ts">
    let isFlipped: boolean = false;

    const toggle = () => {
        isFlipped = !isFlipped
    }
</script>
<div class="w-full rounded-lg border border-white/20 flex flex-col gap-y-5 justify-center items-center py-10 bg-black/20">

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
        color: white;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transition: transform .5s linear;
        transform-style: preserve-3d;
    }

    .backFace {
        background-color: blue;
        transform: rotateY(180deg);
    }

    .frontFace {
        background-color: green;
        transform: rotateY(0deg);
    }

    .flipped .backFace {
        transform: rotateY(360deg);
    }

    .flipped .frontFace {
        transform: rotateY(180deg);
    }
</style>