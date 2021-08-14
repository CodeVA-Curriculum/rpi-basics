<script>
    import "../global.scss";
    import {Footer, Nav} from '$lib/components';
</script>

<div class='layout'>
    <Nav />
    <slot />
    <Footer />
</div>

