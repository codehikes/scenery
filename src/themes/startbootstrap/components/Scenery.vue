<template>
  <div id="content">
    <startbootstrap-service></startbootstrap-service>
    <startbootstrap-portfolio></startbootstrap-portfolio>
    <startbootstrap-about></startbootstrap-about>
  </div>
</template>

<script>
import StartbootstrapService from '$theme/components/Service';
import StartbootstrapPortfolio from '$theme/components/Portfolio';
import StartbootstrapAbout from '$theme/components/About';

export default {
  name: 'Scenery',
  components: { StartbootstrapService, StartbootstrapPortfolio, StartbootstrapAbout },
};
</script>
