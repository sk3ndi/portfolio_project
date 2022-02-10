<template>
    <section id="hero" class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="uk-flex-middle uk-grid uk-grid-large uk-height-viewport" uk-grid> <!-- ::::  acts as row  ::: !-->

            <!-- Left Side !-->
            <div class="uk-width-1-2@m uk-animation-scale-up uk-animation" style="animation-delay: 750ms;">
              <div class="uk-width-3-4 uk-padding uk-align-center">
                <img class="email_img uk-preserve" src="@/assets/svg/dev_img.svg" alt="It's Me Albert!"  uk-svg />
              </div>
            </div>

            <!-- Right Side !-->
            <div class="uk-width-expand@m uk-animation-scale-up uk-animation uk-text uk-visible@m" style="animation-delay: 1050ms;">
              <h1 class="title">ALBERT</h1>
                <p class="subheading">Website Editor - Wordpress | Divi | Elementor</p>
                <p>A simple website I've created just to upload some of my previous works. Feel free to check it out.</p>
                <p>If you have any queries feel free to drop me a <a href="#contact" uk-scroll>message</a>. Thanks!</p>

                <!-- Icon List !-->
                <ul class="uk-iconnav uk-margin-large-top">
                  <li><a uk-tooltip="title: HTML; pos: top-left; delay: 150" class="fab fa-html5 uk-icon-link uk-margin-small-right"></a></li>
                  <li><a uk-tooltip="title: CSS; pos: top-left; delay: 150" class="fab fa-css3 uk-icon-link uk-margin-small-right"></a></li>
                  <li><a uk-tooltip="title: WORDPRESS; pos: top-left; delay: 150" class="fab fa-wordpress uk-icon-link uk-margin-small-right"></a></li>
                  <li><a uk-tooltip="title: ELEMENTOR; pos: top-left; delay: 150" class="fab fa-elementor uk-icon-link uk-margin-small-right"></a></li>
                  <li><a uk-tooltip="title: CPANEL; pos: top-left; delay: 150" class="fab fa-cpanel"></a></li>
                </ul>
            </div>

        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>
