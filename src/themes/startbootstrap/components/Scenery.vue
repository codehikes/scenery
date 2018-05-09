<template>
  <div id="content">
    <startbootstrap-service></startbootstrap-service>
    <startbootstrap-portfolio></startbootstrap-portfolio>
  </div>
</template>

<script>
import StartbootstrapService from '$theme/components/Service';
import StartbootstrapPortfolio from '$theme/components/Portfolio';

export default {
  name: 'Scenery',
  components: { StartbootstrapService, StartbootstrapPortfolio },
};
</script>
