
<template>
  <div>
    <div >
      <div class="">
        <img src="../../assets/images/bg.png" class="object-fill h-38 w-full">
      </div>

      <div class="centered">
        <slot name="center"></slot>
      </div>
      <div class="top-left">
        <slot name="left"></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

  .container {
    position: relative;
    width: 100%;
    color: white;

  }

  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

  .top-left {
    position: absolute;
    top: 12%;
    left: 10%;
  }

  .top-right {
    position: absolute;
    top: 8px;
    right: 16px;
  }

  .bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }

  .centered {
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


</style>
