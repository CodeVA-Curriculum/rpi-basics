<script>
    import VideoFrame from '$lib/components/VideoFrame.svelte';
    import Fa from 'svelte-fa';
    import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
    import {base} from '$app/paths';
    import {page} from '$app/stores';
    export let next, previous, title, description, video;
</script>

<div class='banner'>
    <!-- Breadcrumb -->
    <div class='columns bc is-mobile is-variable is-0'><div class='column is-narrow'>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="{base}/modules">Lessons</a></li>
              <li class='is-active' aria-current="page"><a href="{base}/{page.path}">{title}</a></li>
            </ul>
        </nav>
    </div><div class='column'>
        <div class='buttons has-addons nav-button'>
            {#if previous}
            <a href="{base}/{previous}"class='nav-button button is-small is-rounded'><span class='icon'><Fa icon={faAngleLeft} /></span></a>
            {/if}
            {#if next}
            <a href="{base}/{next}" class='nav-button button is-small is-rounded'><span class='icon'><Fa icon={faAngleRight} /></span></a>
            {/if}
        </div>
    </div></div>
    
    <div class='columns is-variable is-8'>
        <div class='column'>
            <VideoFrame video={video} />
        </div>
        <div class='column'>
            <h1 class='title'>{title}</h1>
            <p><slot /></p>
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