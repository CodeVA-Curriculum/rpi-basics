<script>
    export let link = "https://www.youtube.com/embed/symTv3m3XfU"
</script>

<div class='video-frame'>
    <iframe class="frame" width="100%" height="400px" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
.video-frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    border-radius: 20px;
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