<template>
  <div class="uk-transition-toggle" tabindex="0">
    <a href="#" v-show="visible" class="toTop uk-animation-slide-right-small uk-transition-fade" uk-totop uk-scroll></a>
  </div>

    <!-- ::::: Footer ::::: !-->
   <footer id="footer" class="uk-section uk-padding-small">
       <div class="uk-container">
         <hr>
          <div class="uk-margin-top uk-margin-bottom">
            <p class="uk-text-center">&copy; {{ currentYear }} &nbsp;|&nbsp; All Rights Reserved.</p>
          </div>
       </div>
   </footer>
    <!-- ::::: End Footer ::::: !-->
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      currentYear: ''
    }
  },
  methods: {
    scrollListener: function () {
      this.visible = window.scrollY > 470
    },
    getCurrentYear: function () {
      return new Date().getFullYear()
    }
  },
  mounted: function () {
    // show toTop button when scrolled
    window.addEventListener('scroll', this.scrollListener)

      // Get Current Year
      this.currentYear = this.getCurrentYear()
      },
  beforeUnmount: function () {
      window.removeEventListener('scroll', this.scrollListener)
      }
}
</script>
