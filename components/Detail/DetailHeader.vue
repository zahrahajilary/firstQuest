<template>
  <div>
    <h1 class="text-white text-4xl">
      {{detail.title}}
    </h1>
    <br/>
    <p class="text-white text-xl">
      {{detail.overView}}
    </p>
  </div>

</template>

<script>
    export default {
        name: "DetailHeader",
      props:['detail']
    }
</script>

<style scoped>
  .title {
    font-size: 25px;
    font-weight: bold;
  }


</style>
