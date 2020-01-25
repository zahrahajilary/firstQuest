<template>
    <div class="placeHolder">
      <div class="threeDot">...</div>
    </div>
</template>

<script>
    export default {
        name: "placeHolder"
    }
</script>

<style scoped>
  .placeHolder {
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color:lightgray ;
    height:50px;

  }
  .threeDot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    color: white;
  }

</style>
