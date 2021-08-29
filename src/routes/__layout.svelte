<script>
    import "../global.scss";
    import {Nav} from '$lib/components';

    import CodeRVA from '$lib/assets/CodeRVA.png';
    import VCU from '$lib/assets/VCU.png';
    import CodeVA from '$lib/assets/CodeVALogo.png';
</script>

<div>
    <Nav />
    <slot />
    
    <footer class="footer has-text-left">
        <div class='columns'>
            <div class='column'></div>
            <div class='column is-narrow'>
                <div class="columns is-mobile m-0 p-0 has-text-centered">
                    <div class='column'></div>
                    <div class='column is-narrow'></div>
                        <img alt="CodeRVA logo" src={CodeRVA} style="height: 2rem; margin-top: 1.25rem;" />
                    <div class='column is-narrow'>
                        <img alt="VCU School of Education Center for Innovation in STEM Education logo" src={VCU} style="height: 3rem;" />
                    </div>
                    <div class='column is-narrow'>
                        <img alt="CodeVA logo" src={CodeVA} style="height: 3rem;" />
                    </div>
                    <div class='column'></div>
                </div>
            </div>
            <div class='column is-3 has-text-centered is-narrow'>
                <p class='is-size-7 mt-3'>These modules were written by <a href="https://jonstapleton.github.io/"><strong>Jon Stapleton</strong></a> on behalf of <a href="https://www.codevirginia.org/"><strong>CodeVA</strong></a>. The source code is licensed
                    <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p>
            </div>
            <div class='column'></div>
        </div>
        
    </footer>
</div>

<style lang='scss' global>
	main {
		min-height: 100vh;
	}
    main > footer {
		margin-top: auto;
	}
</style>



