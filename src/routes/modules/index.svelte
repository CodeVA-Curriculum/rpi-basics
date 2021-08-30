<script>
    import LessonCard from '$lib/components/LessonCard.svelte';
    // export let posts;

    const posts = [
        {
            title: "1. How to Set Up Your Raspberry Pi",
            description: "This lesson covers how to set up your Raspberry Pi computer. The Raspberry Pi is special because it's a hackable computer; you can change things, download lots of free software, and use it in all sorts of interesting ways.",
            path: "modules/lesson-1",
        },
        {
            title: "2. How Control Your Raspberry Pi",
            description: "This lesson covers the basics of how to use your Raspberry Pi. An RPi is a computer, so you can use it just like any other! It also has some special features that might be new to you.",
            path: "modules/lesson-2",
        }
    ]
</script>

<div class='section'>
    <div class='container'>
        <!-- <h1 class='big mx-5'>Lessons</h1> -->
        <ul>
            {#each posts as p}
            {#if p}
            <li>
              <LessonCard {...p} />
            </li>
            {/if}
            {/each}
        </ul>
    </div>
</div>

<style lang='scss'>
    .big {
        font-size: 2rem;
        font-weight: bolder;
    }
    ul {
        list-style: none;
    }
</style>