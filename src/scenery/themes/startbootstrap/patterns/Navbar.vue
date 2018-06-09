<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger"
        href="#" v-scroll-to="'#page-top'">
          {{ $scenery.name }}
      </a>
      <button class="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">
        Menu
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="menu in $scenery.menu" :key="menu.id">
            <a class="nav-link" href="#"
              v-scroll-to="{ el: menu.link, onDone: onDone, onStart: onStart }">
              {{ menu.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'StartBootstrapNavbar',
  methods: {
    onStart() {
      $(this.$el).addClass('navbar-shrink');
    },
    onDone() {
      $(this.$el).addClass('navbar-shrink');
    },
  },
};
</script>
