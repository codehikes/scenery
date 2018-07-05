<template>
  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Welcome To {{ $scenery.name }} !</div>
        <div class="intro-heading text-uppercase">{{ $scenery.description }}</div>
        <a
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#" v-scroll-to="'#services'">
          Tell Me More
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StartBootstrapHome',
};
</script>
