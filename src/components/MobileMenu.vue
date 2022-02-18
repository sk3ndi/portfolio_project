<template>
  <!-- This is the off-canvas -->
  <div id="my-id" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <div class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-center">
                <a href="" class="uk-navbar-item uk-logo"><img class="site_logo" src="@/assets/svg/Logo-Light.svg" alt="Logo" uk-svg /></a>
            </div>
        </div>

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" >
          <li><a href="#hero" uk-scroll>Home</a></li>
          <li><a href="#works" uk-scroll>Works</a></li>
          <li><a href="#contact" uk-scroll>Send Message</a></li>
        </ul>

          <button class="uk-offcanvas-close" type="button" uk-close></button>

      </div>
  </div>
</template>
