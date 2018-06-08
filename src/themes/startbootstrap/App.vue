<template>
  <div id="startbootstrap">
    <startbootstrap-navbar></startbootstrap-navbar>
    <startbootstrap-home></startbootstrap-home>
    <router-view/>
    <startbootstrap-footer></startbootstrap-footer>
  </div>
</template>

<script>
import StartbootstrapNavbar from '$theme/patterns/Navbar';
import StartbootstrapHome from '$theme/templates/Home';
import StartbootstrapFooter from '$theme/patterns/Footer';

export default {
  name: 'App',
  components: {
    StartbootstrapNavbar,
    StartbootstrapHome,
    StartbootstrapFooter,
  },
};
</script>

<style lang="scss" src="$theme/assets/scss/app.scss"></style>
