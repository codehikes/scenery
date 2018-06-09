<template>
  <div id="content">
    <startbootstrap-service></startbootstrap-service>
    <startbootstrap-portfolio></startbootstrap-portfolio>
    <startbootstrap-about></startbootstrap-about>
  </div>
</template>

<script>
import StartbootstrapService from '$theme/templates/Service';
import StartbootstrapPortfolio from '$theme/templates/Portfolio';
import StartbootstrapAbout from '$theme/templates/About';

export default {
  name: 'Scenery',
  components: { StartbootstrapService, StartbootstrapPortfolio, StartbootstrapAbout },
};
</script>
