<script lang="ts">
    import {fade, fly} from "svelte/transition";
    import pp from "$lib/img/pp.webp";
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
    <meta name="description"
          content="Selam! Ben Kaan Kuscu. Backend Developer'ım. Çoğunlukla Go programlama dili ile geliştirme yapıyorum."/>
    <meta name="keywords" content="kaan, kuscu, go, programlama, linux, blog, yazılım"/>
</svelte:head>

<div
        class="mx-auto max-w-5xl px-0 flex main-h"
        transition:fade={{ delay: 200, duration: 200 }}
>
    <img
            class="lg:absolute right-0 main-h w-screen lg:w-[calc(50vw)] object-cover"
            src={pp}
            alt="pp"
    />
    <div
            class="flex flex-col justify-end lg:justify-center absolute lg:static w-full lg:w-1/2 main-h"
    >
        <div
                class="flex flex-col items-stretch gap-y-3 bg-gradient-to-t from-black lg:from-transparent to-transparent p-10 lg:p-0 lg:pr-10"
        >
            <p
                    class="text-3xl font-black text-kWhite"
                    in:fly={{ x: -100, duration: 200, delay: 400 }}
            >
                SELAM!
            </p>
            <h1
                    class="text-4xl font-black text-kWhite"
                    in:fly={{ x: -100, duration: 200, delay: 500 }}
            >
                BEN
                <span class="text-kYellow whitespace-nowrap">KAAN KUSCU</span>
            </h1>
            <div class="flex gap-2 flex-col w-full items-start">
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
                    class="hidden lg:flex flex-col mt-10 items-start gap-y-3 w-full"
                    in:fly={{ y: 50, duration: 1000, delay: 600 }}
            >
                <img alt="" src={quoteStart}/>
                <span class="text-lg text-kWhite">
                        {quote.text}
                    </span>
                <div class="flex justify-end w-full gap-x-2">
                    <span class="text-kWhite/50">{quote.owner}</span>
                    <img alt="" src={quoteEnd}/>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
