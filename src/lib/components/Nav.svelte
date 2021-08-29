<script>
    import {base} from '$app/paths';

    import RPiLogo from '$lib/assets/RPiLogo.png';
    let navMenuClass = "";

    function activateNavMenu() {
        console.log("activate menu!")
        if(navMenuClass != "") {
            navMenuClass = "";
        } else {
            navMenuClass="is-active";
        }
    }
</script>

<nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="{base}">
        <h1 class='subtitle heading'><span><img class='rpi' src={RPiLogo} alt="Raspberry Pi Foundation logo" ></span>codeva-curriculum/rpi-basics</h1>
      </a>
      <button class="navbar-burger {navMenuClass} mr-5" on:click={activateNavMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  
    <div class="navbar-menu {navMenuClass}">
        <div class="navbar-start">
            
        </div>
        <div class="navbar-end  is-hidden-desktop">
            <a class="navbar-item" href="{base}">
                Home
            </a>
            <div class="navbar-item is-right has-dropdown is-hoverable">
                <a class="navbar-link" href="{base}/modules">
                    Lessons
                </a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="{base}/modules/lesson-1">
                        1. How to Set Up Your Pi 
                    </a>
                    <a class="navbar-item" href='{base}/modules/lesson-2'>
                        2. Controlling Your Pi
                    </a>
                    <a class="navbar-item" href='{base}/modules/lesson-3'>
                        3. Networking Basics
                    </a>
                    <a class="navbar-item" href='{base}/modules/lesson-4'>
                        4. Controlling Your Pi Remotely
                    </a>
                </div>
            </div>
            <!-- <div class="navbar-item is-right has-dropdown is-hoverable">
                <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Projects
                </a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
                    </a>
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                    Modifiers
                    </a>
                </div>
            </div> -->
            <!-- <div class="navbar-item is-right has-dropdown is-hoverable">
                <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Extensions
                </a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
                    </a>
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                    Modifiers
                    </a>
                </div>
            </div> -->
        </div>
    </div>
  </nav>

  <style>
      .heading {
        padding-bottom: 1rem;
        margin-left: 2.5rem;
        margin-top:1rem;
        font-size: 1rem;
        /* position: absolute; */
        left: 2rem;
      }
      .rpi {
          height: 2rem;
          position: absolute;
          left: 1rem;
          top: 1rem;
          /* margin-top: 1rem; */
      }
  </style>