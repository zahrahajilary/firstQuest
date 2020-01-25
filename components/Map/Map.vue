<template>
  <div id="map-wrap" style="height: 50vh">
    <no-ssr>
      <l-map :zoom=5  :center="[32.4279,53.6880]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <template v-for="loc in latlng">
          <pre>loc</pre>
          <l-marker :lat-lng="loc"></l-marker>
        </template>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
    export default {
      props:{
        latlng:Array
      },
        name: "Map",
      mounted() {
        console.log(this.latlng,'map lat')
      }
    }
</script>

<style scoped>

</style>
