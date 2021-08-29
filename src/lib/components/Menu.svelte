<script>
    // TODO: Add feature to highlight the module that you are on in the menu
    import {base} from '$app/paths';
    import {page} from '$app/stores';

    

    const menuItems = [
        {
            title: "1. How to Set Up Your Pi",
            link: "/modules/lesson-1"
        },
        {
            title: "2. Controlling Your Pi",
            link: "/modules/lesson-2"
        },
        {
            title: "3. Networking Basics",
            link: "/modules/lesson-3"
        },
        {
            title: "4. Remote Control (SSH)",
            link: "/modules/lesson-4"
        }
    ]

    let activeItem = null;
    $: for(let [i, item] of menuItems.entries()) {
        // console.log(i, $page.path);
        if($page.path == item.link) {
            activeItem = i;
        }
    }
</script>

<aside class="module-list menu p-5">
    <p class="menu-label">
        Lessons
    </p>
    <ul class="menu-list">
        {#each menuItems as item, i}
            <li><a class={ i == activeItem ? "is-active" : ""} href="{base + item.link}">{item.title}</a></li>
        {/each}
    </ul>
    <!-- <p class="menu-label">
        Projects
    </p>
    <ul class="menu-list">
        <li>
            <a>Automate Your Pi 🔥</a>
            <ul>
            <li><a>Moving the Mouse</a></li>
            <li><a>Pressing Keys</a></li>
            </ul>
        </li>
        <li><a>Host a Website 🔥🔥</a>
            <ul>
                <li><a>HTML & CSS Basics</a></li>
                <li><a>Using Bulma</a></li>
                <li><a>Hosting Your Site</a></li>
            </ul>
        </li>
        <li>
            <a>Text-Based Game 🔥🔥🔥</a>
            <ul>
            <li><a>Python Basics</a></li>
            <li><a>Using "If" Statements</a></li>
            <li><a>Using Functions</a></li>
            <li><a>Make a Game</a></li>
            </ul>
        </li>
    </ul> -->
</aside>

<style>
    .module-list {
        border-right: 2px solid whitesmoke;
        /* box-shadow: 1em 1em 1em -1em grey; */
        /* b ackground-color: pink; */
        height: 104%;
        margin-bottom: 0;
    }
</style>