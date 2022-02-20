<template>
  <Navigation />
  <!-- <Home /> !-->
  <Footer />
  <MobileMenu />
</template>

<script>
import Navigation from './components/Navigation.vue'
//import Home from './views/Home.vue'
import Footer  from './components/Footer.vue'
import MobileMenu  from './components/MobileMenu.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    //Home,
    Footer,
    MobileMenu
  }
}
</script>
