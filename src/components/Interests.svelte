<script>
    import {backendSkills, frontendSkills} from "../utils/interests.js";
    import {toolSkills} from "../utils/interests";
</script>

<section id="skills" class="scroll-my-20 min-h-[calc(100vh-5rem)] bg-teal-700 text-gray-300">
    <div class="container mx-auto p-10">
        <div class="text-6xl sm:text-8xl opacity-40">skills</div>
        <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm: grid-cols-1 mt-10 gap-10">
            <div class="flex-1">
                <div class="text-2xl font-bold border-b border-opacity-20 border-white text-teal-900">front end</div>
                <div class="grid grid-cols-3 gap-5 py-5">
                    {#each frontendSkills as skill}
                        <div class="flex items-center rounded bg-teal-800 flex-col justify-between overflow-hidden">
                            <div class="w-full flex items-center justify-center bg-teal-900 p-3">
                                <img src={skill.icon} alt="" class="h-8">
                            </div>
                            <div class="text-sm font-bold text-center p-3">{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="flex-1">
                <div class="text-2xl font-bold border-b border-opacity-20 border-white text-teal-900">back end</div>
                <div class="grid grid-cols-3 gap-5 py-5">
                    {#each backendSkills as skill}
                        <div class="flex items-center rounded bg-teal-800 flex-col justify-between overflow-hidden">
                            <div class="w-full flex items-center justify-center bg-teal-900 p-3">
                                <img src={skill.icon} alt="" class="h-8">
                            </div>
                            <div class="text-sm font-bold text-center p-3">{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="flex-1">
                <div class="text-2xl font-bold border-b border-opacity-20 border-white text-teal-900">tools</div>
                <div class="grid grid-cols-3 gap-5 py-5">
                    {#each toolSkills as skill}
                        <div class="flex items-center rounded bg-teal-800 flex-col justify-between overflow-hidden">
                            <div class="w-full flex items-center justify-center bg-teal-900 p-3">
                                <img src={skill.icon} alt="" class="h-8">
                            </div>
                            <div class="text-sm font-bold text-center p-3">{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>