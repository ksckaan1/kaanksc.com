<script lang="ts">
    import avatarImg from "$lib/img/avatar.webp"
</script>

<div class="p-5 bg-kPurpleDark border border-white/20 rounded-lg flex gap-x-5">
    <img loading="lazy" src={avatarImg} class="w-36 aspect-square object-cover rounded-full my-0 border border-white/20"
         alt="">
    <div class="border-l border-white/20 p-5 flex flex-col gap-y-2">
        <h2 class="text-kYellow text-2xl">Kaan Kuscu</h2>
        <h3 class="text-kWhite/70">Backend Developer</h3>
        <span class="text-kWhite/50 font-light">
            İletişim kurmak için
            <a class="text-kYellow" href="/contact">İletişim</a>
            sayfasını ziyaret edebilirsiniz.</span>
    </div>
</div>