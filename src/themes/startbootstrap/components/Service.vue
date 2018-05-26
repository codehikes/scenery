<template>
  <!-- Services -->
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4" v-for="service in $scenery.pages.services" :key="service.id">
          <span class="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x text-primary"></i>
            <i class="fa fa-stack-1x fa-inverse" :class="service.icon"></i>
          </span>
          <h4 class="service-heading">{{ service.title }}</h4>
          <p class="text-muted">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartBootstrapService',
};
</script>
