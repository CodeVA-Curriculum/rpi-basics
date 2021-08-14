<script>
    import {VideoFrame} from '$lib/components'
    import Fa from 'svelte-fa';
    import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
</script>

<div class='module-1'>
    <!-- Breadcrumb -->
    <div class='columns bc is-mobile is-variable is-0'><div class='column is-narrow'>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Lessons</a></li>
              <li class='is-active' aria-current="page"><a href="#">1. How to Set Up Your Pi</a></li>
            </ul>
        </nav>
    </div><div class='column'>
        <div class='buttons has-addons nav-button'>
            <button class='nav-button button is-small is-rounded'><span class='icon'><Fa size="1.5x" icon={faAngleLeft} /></span></button>
            <button class='nav-button button is-small is-rounded'><span class='icon'><Fa size="1.5x" icon={faAngleRight} /></span></button>
        </div>
    </div></div>
    
    <div class='columns is-variable is-8'>
        <div class='column'>
            <VideoFrame />
        </div>
        <div class='column'>
            <h1 class='title'>Title of Module</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>
        <div class='has-text-centered read-more-break'>
            <hr>
            <button class='button is-medium read-more'>Read More</button>
        </div>
</div>

<style>
    .bc {
        display: none;
    }
    iframe {
        border-radius: 20px;
    }
    .nav-button {
        padding: 0;
        position: relative;
        top: -0.1rem;
    }
    .read-more {
        position: relative;
        top: -3rem;
        border-color: transparent;
    }
    .read-more-break {
        margin-top: 5rem;
    }
</style>