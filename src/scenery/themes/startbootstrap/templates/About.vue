<template>
  <!-- About -->
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" :src="$scenery.templates.about.image">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>{{ $scenery.templates.about.title }}</h4>
                  <h4 class="subheading">{{ $scenery.templates.about.subtitle }}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    {{ $scenery.templates.about.description }}
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br>Of Our
                  <br>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartBootstrapAbout',
};
</script>
