<template>
  <Navigation />
  <Works />
  <Contact />
  <Footer />
  <MobileMenu />

</template>

<script>
import Navigation from './components/Navigation.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Footer  from './components/Footer.vue'
import MobileMenu  from './components/MobileMenu.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Works,
    Contact,
    Footer,
    MobileMenu
  }
}
</script>
