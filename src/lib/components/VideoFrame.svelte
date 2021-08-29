<script>
    import {onMount} from 'svelte';
    import Fa from 'svelte-fa';
    import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

    export let video = "https://www.youtube.com/embed/symTv3m3XfU"
    let externalLink;
    $: externalLink = video.replace('embed/', 'watch?v=')

    let offeringLink = false;
    function offerVideoLink() {
        offeringLink = true;
    }

    onMount(async () => {
        setTimeout(() => {
            offerVideoLink()
        }, 5000)
    })

    let loaded = false;
    const hideSpinner = el => {
        el.addEventListener('load', () => {
            loaded = true;
        })
    }
</script>

<div class='video-frame has-text-centered'>
    {#if !loaded}
    <!-- <div class='spinner has-text-centered'> -->
        <div class="has-text-centered button spinner-btn is-loading is-large frame disabled"></div>
        {#if offeringLink}
        <a class='button has-text-centered' target="_blank" href={externalLink}>Click here to open video in another tab<span class='pl-2'><Fa icon={faExternalLinkAlt} /></span></a>
        {/if}
    <!-- </div> -->
    {/if}
    <iframe class="frame" use:hideSpinner width="100%" height="100%" src="{video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
    .spinner-btn {
        /*    position: absolute; */
        /* border-color: transparent; */
        width: 90%;
        height: 90%;
        border-radius: 20px;
        /* font-size: 8rem; */
        /* height: auto; */
    }
.video-frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    border-radius: 20px;
    height: 100%;
}

/* Then style the iframe to fit in the container div with full height and width */
.frame {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
</style>