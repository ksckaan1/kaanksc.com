<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import pp from "$lib/img/avatar.webp";
    import quoteStart from "$lib/img/quote-start.png";
    import quoteEnd from "$lib/img/quote-end.png";

    const quotes = [
        {
            text: "Herhangi bir yazılımcı bilgisayarın anlayacağı bir kod yazabilir, iyi yazılımcılar insanların anlayabileceği gibi kod yazar.",
            owner: "Martin Fowler",
        },
        {
            text: "Tecrübe, herkesin kendi hatalarına verdiği isimdir.",
            owner: "Oscar Wilde",
        },
        {
            text: "Mükemmellik, eklenecek başka bir şey olmadığında değil, çıkarılacak başka bir şey olmadığında elde edilir.",
            owner: "Antoine de Saint – Exupery",
        },
        {
            text: "Kod mizah gibidir, açıklanması gerekiyorsa değeri kalmaz.",
            owner: "Cory House",
        },
        {
            text: "İyimserlik, programlamanın mesleki bir hastalığıdır: ilacı geri bildirimdir.",
            owner: "Kent Beck",
        },
        {
            text: "Sadelik verimliliğin ruhudur.",
            owner: "Austin Freeman",
        },
        {
            text: "Yazılımın yeniden kullanılabilir olabilmesi için öncelikle kullanılabilir olması gerekir.",
            owner: "Ralph Johnson",
        },
    ];

    const randomQuote = () => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const quote = randomQuote();
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

<div
    class="mx-auto max-w-5xl px-0 flex main-h"
    transition:fade={{ delay: 200, duration: 200 }}
>
    <div class="flex flex-col justify-center w-full main-h">
        <div class="flex flex-col items-center p-10 lg:p-0 lg:pr-10">
            <img
                in:fly={{ y: -200, duration: 400, delay: 200 }}
                class="w-48 h-48 object-cover rounded-full border-2 select-none pointer-events-none border-kYellow"
                src={pp}
                alt=""
            />
            <p
                class="text-xl font-light text-kWhite mt-10"
                in:fly={{ x: -100, duration: 200, delay: 400 }}
            >
                SELAM!
            </p>
            <h1
                class="text-3xl lg:text-4xl font-black text-kWhite"
                in:fly={{ x: -100, duration: 200, delay: 500 }}
            >
                BEN
                <span class="text-kYellow whitespace-nowrap">KAAN KUSCU</span>
            </h1>
            <div class="flex gap-2 flex-col w-full items-center">
                <h2
                    class="bg-kYellow inline-block text-2xl px-3 py-2 font-black text-kPurpleDark whitespace-nowrap"
                    in:fly={{ x: -100, duration: 500, delay: 600 }}
                >
                    BACKEND DEVELOPER
                </h2>
                <div
                    class="text-2xl text-kWhite"
                    in:fly={{ x: -100, duration: 200, delay: 700 }}
                >
                    @ <a href="http://www.isimizbu.com.tr/" target="_blank"
                        >İŞİMİZBU</a
                    >
                </div>
            </div>
            <div
                class="flex flex-col mt-10 items-start gap-y-3 w-full max-w-2xl bg-black/20 p-5 border border-white/20 rounded"
                in:fly={{ y: 50, duration: 1000, delay: 600 }}
            >
                <img alt="" src={quoteStart} />
                <span class="text-lg text-kWhite">
                    {quote.text}
                </span>
                <div class="flex justify-end w-full gap-x-2">
                    <span class="text-kWhite/50">{quote.owner}</span>
                    <img alt="" src={quoteEnd} />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
