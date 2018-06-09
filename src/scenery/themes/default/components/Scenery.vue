<template>
  <div class="hello">
    <h1>{{ app_name }}</h1>
    <h2>{{ app_description }}</h2>
    <ul>
      <li>
        <a
          href="https://github.com/codehike/scenery"
          target="_blank"
        >
          Docs
        </a>
      </li>
      <li>
        <a
          href="https://github.com/codehike/scenery-themes"
          target="_blank"
        >
          Themes
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Scenery',
  data() {
    return {
      app_name: process.env.APP_NAME,
      app_description: process.env.APP_DESCRIPTION,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
