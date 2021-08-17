<script>
    // TODO: Add feature to highlight the module that you are on in the menu
    import {base} from '$app/paths';

</script>

<aside class="module-list menu p-5">
    <p class="menu-label">
        Lessons
    </p>
    <ul class="menu-list">
        <li><a href="{base}/modules/lesson-1">1. How to Set Up Your Pi</a></li>
        <li><a href="{base}/modules/lesson-2">2. Controlling Your Pi</a></li>
        <li><a>3. Networking Basics</a></li>
        <li><a>4. Remote Control (SSH)</a></li>
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
        border-right: 1px solid grey;
        /* box-shadow: 1em 0em 0.75em -1em grey; */
    }
</style>