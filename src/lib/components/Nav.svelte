<script>

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
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <button class="navbar-burger {navMenuClass}" on:click={activateNavMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  
    <div class="navbar-menu {navMenuClass}">
        <div class="navbar-start">
            
        </div>
        <div class="navbar-end  is-hidden-desktop">
            <a class="navbar-item" href="https://bulma.io/">
                Home
            </a>
            <div class="navbar-item is-right has-dropdown is-hoverable">
                <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Lessons
                </a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item">
                        1. How to Set Up Your Pi 
                    </a>
                    <a class="navbar-item">
                        2. Controlling Your Pi
                    </a>
                    <a class="navbar-item">
                        3. Networking Basics
                    </a>
                    <a class="navbar-item">
                        4. Controlling Your Pi Remotely
                    </a>
                </div>
            </div>
            <div class="navbar-item is-right has-dropdown is-hoverable">
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
            </div>
            <div class="navbar-item is-right has-dropdown is-hoverable">
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
            </div>
        </div>
    </div>
  </nav>