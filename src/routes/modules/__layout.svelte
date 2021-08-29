<script>
    import {Footer, Menu} from '$lib/components';
    import Fa from 'svelte-fa'
    import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
</script>

<div class="module-layout columns">
    <div class='column is-2 px-5 is-hidden-touch'>
        <Menu />
    </div>
    <div class='column'>
        <div class='container'>
            <!-- <nav class="pagination is-rounded is-centered mb-5 gallery" role="navigation" aria-label="pagination">
                <a class="pagination-previous"><Fa icon={faAngleLeft} /></a>
                <a class="pagination-next"><Fa icon={faAngleRight} /></a>
                
                <ul class="pagination-list">
                  <li><a class="pagination-link" aria-label="Goto page 1">Lessons</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 45">1</a></li>
                    <li>
                        <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
                            2
                            <h3 class='subtitle you-are'>Projects</h3>
                        </a>
                    </li>
                  <li><a class="pagination-link" aria-label="Goto page 47">3</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 86">Extensions</a></li>
                </ul>
            </nav> -->
            <div class='content section'>
                <slot />
            </div>
            <!-- COOL ARROWS -->
            <!-- <div class='columns mt-5'>
                <div class='arrow-wrp column is-1'>
                    <a class='arrow has-text-centered'>
                        <span><Fa size="4x" icon={faAngleLeft} /></span>
                    </a>
                </div>
                <div class='column mx-5 px-5'>
                    <div class='content'>
                        <slot />
                    </div>
                </div>
                <div class='arrow-wrp column is-1'>
                    <a class='arrow has-text-centered'>
                        <span><Fa size="4x" icon={faAngleRight} /></span>
                    </a>
                </div>
            </div> -->
        </div>
    </div>
</div>

<style>
    /* .columns {
        display: flex;
        flex-direction: row; 
        align-items: stretch;
    } */
    .arrow {
        background-repeat: no-repeat;
        background-position: center center;
        display: block;
        height:110px;
    }
 
/* define the circle and fall under the image */
    .arrow span {
        border-radius: 100%;
        display: block;
        position: relative;
        z-index: -1;
        width: 100px;
        height: 100px;
        transition: transform .15s cubic-bezier(.11,.65,1,1.69);
        padding-top: 19px;
        color: white;
    }
    .arrow span {
        background-color: #323F47;
    }

    .arrow-wrp {
        height: 400px;
        padding-top:150px;
        /* display: none; */
    }

   .arrow:hover span {
        transform: scale(1.3);
    }

    .you-are {
        position: absolute;
        width:max-content;
        top: -2.25rem;
    }
    .gallery {
        display: none;
    }
</style>