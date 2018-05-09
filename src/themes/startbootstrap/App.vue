<template>
  <div id="startbootstrap">
    <startbootstrap-navbar></startbootstrap-navbar>
    <startbootstrap-header></startbootstrap-header>
    <router-view/>
    <startbootstrap-footer></startbootstrap-footer>
  </div>
</template>

<script>
import StartbootstrapNavbar from '$theme/components/Layout/Navbar';
import StartbootstrapHeader from '$theme/components/Layout/Header';
import StartbootstrapFooter from '$theme/components/Layout/Footer';

export default {
  name: 'App',
  components: {
    StartbootstrapNavbar,
    StartbootstrapHeader,
    StartbootstrapFooter,
  },
};
</script>

<style lang="scss" src="$theme/assets/scss/app.scss"></style>
