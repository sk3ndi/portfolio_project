<template>
  <div id="topContent" class="uk-width-1-1" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200">
    <nav class="uk-navbar uk-navbar-transparent uk-container uk-sticky" uk-navbar>
      <!-- ::::: Site Logo & Hambuger Button ::::: !-->
      <div class="uk-navbar-left">
            <router-link to="/" class="uk-navbar-item uk-logo" uk-scrollspy="target: .site_logo; cls: uk-animation-slide-top-medium; delay: 300; repeat: true;">
              <img class="site_logo" src="@/assets/svg/Logo-Light.svg" alt="Logo" uk-svg />
            </router-link>
      </div>
      <!-- ::::: Menu Lists ::::: !-->
      <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
              <li><a href="#hero" uk-scroll>Home</a></li>
              <li><a href="#works" uk-scroll>Works</a></li>
              <li><a href="#contact" uk-scroll>Send Message</a></li>
          </ul>
          <a uk-navbar-toggle-icon="" href="#my-id" uk-toggle="" class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon" aria-expanded="false"></a>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>
