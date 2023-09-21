<script lang="ts">
    let step = 0
    let cities = ["İstanbul", "Ankara", "İzmir", "Bursa"]
    let cityList: string[] = []

    let activateEnv = false

    $: {
        if (step != null) {
            let newCities: string[] = []
            for (let i = 0; i < step + 1; i++) {
                newCities.push(cities[step])
            }

            cityList = newCities
        }
    }

    const stepBack = () => {
        if (step > 0) step--
    }

    const stepNext = () => {
        if (step < 3) step++
    }
</script>

<div class="w-full bg-black/10 rounded-lg border border-white/20 p-5 text-sm lg:text-base">
    <div class="mb-5 flex gap-x-1 items-center">
        <input type="checkbox" id="activateEnv" bind:checked={activateEnv}>
        <label for="activateEnv"><code>GOEXPERIMENT=loopvar</code> kullan</label>
    </div>
    <div class="mb-5 text-kYellow">*Aynı renkler aynı bellek adreslerini temsil eder</div>
    <div class="mt-3 flex flex-col gap-y-1 bg-white/5 p-3 rounded border border-white/20">
        <span class="text-white/50 font-bold"> cities</span>
        <div class="flex gap-x-1 items-center">
            <div class="var bg-red-700">"İstanbul"</div>
            <div class="var bg-green-700">"Ankara"</div>
            <div class="var bg-orange-900">"İzmir"</div>
            <div class="var bg-blue-700">"Bursa"</div>
        </div>
    </div>

    <div class="mt-3 p-3 bg-white/5 rounded border border-white/20">
        <div class="text-white/50 font-bold">Döngü</div>
        <div>
            <button on:click={stepBack} disabled={step<1} class="btn">önceki adım</button>
            <button on:click={stepNext} disabled={step>2} class="btn">sonraki adım</button>
        </div>
        <div class="mt-3">
            <div class="flex gap-x-1 items-center">
                <div>for</div>
                <div class="var"
                     class:bg-pink-500={!activateEnv || step === 0}
                     class:bg-pink-600={activateEnv&&step===1}
                     class:bg-pink-700={activateEnv&&step===2}
                     class:bg-pink-800={activateEnv&&step===3}
                >i = {step}</div>
                <div class="var"
                     class:bg-purple-700={!activateEnv || step===0}
                     class:bg-amber-700={activateEnv&&step===1}
                     class:bg-slate-700={activateEnv&&step===2}
                     class:bg-sky-700={activateEnv&&step===3}
                >v = "{cities[step]}"
                </div>
                <div class="">:= range <span class="underline text-p">cities </span>&#x7B;</div>
            </div>
            <div class="flex gap-x-1 items-center mt-3">
                <span>cityPtrs = append(cityPtrs,</span>
                <div class="var"

                     class:bg-purple-700={!activateEnv || step===0}
                     class:bg-amber-700={activateEnv&&step===1}
                     class:bg-slate-700={activateEnv&&step===2}
                     class:bg-sky-700={activateEnv&&step===3}
                >&v
                </div>
                <span>)</span>
            </div>
            <div>&#125;</div>
        </div>
    </div>

    <div class="mt-3 flex flex-col gap-y-1 bg-white/5 p-3 rounded border border-white/20">
        <span class="text-white/50 font-bold">cityPtrs</span>
        <div class=" flex gap-x-1 items-center">
            {#each cityList as city,i}
                <div class="var"
                     class:bg-purple-700={!activateEnv || i === 0}
                     class:bg-amber-700={activateEnv&&i===1}
                     class:bg-slate-700={activateEnv&&i===2}
                     class:bg-sky-700={activateEnv&&i===3}
                >"
                    {#if activateEnv}{cities[i]}{:else}{city}{/if}"
                </div>
            {/each}
        </div>
    </div>

    <div class="text-kYellow mt-3">*Listeye eklenen her eleman v'nin adresindeki değere eşittir</div>
</div>

<style lang="postcss">
    .var {
        @apply px-1 py-0.5 rounded
    }

    .btn {
        @apply bg-white/20 rounded px-1 py-0.5 border border-white/20
    }

    .btn:disabled {
        @apply opacity-40
    }
</style>