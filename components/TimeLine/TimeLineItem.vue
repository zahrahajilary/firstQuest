<template>
  <div class="timeline-item">
    <p class="bullet">&nbsp;</p>
    <div class="activity" v-if="cname">
      <div class="days-circle">&nbsp;{{index}}&nbsp;</div>
      <h5 class="cname">{{cname}}</h5>
      <h6 class="days">{{days}} Days</h6>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['cname', 'days', 'index']
  }
</script>

<style>

  .activity{
    display: block;
    width: 8%;
    margin-left: -150px;
    float: left;
  }

  .cname {

    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    color: #373d45;
  }

  .days {

    font-size: 16px;
    line-height: 1.19;
    text-align: left;
    color: #373d45;
  }

  .days-circle {
    float: left;
    margin-left: -50px;
    margin-right: 5px;
    border-radius: 50%;
    padding: 10px;
    opacity: 0.8;
    font-size: 36px;
    font-weight: 900;
    color: #9bc6ff;
    border-right: solid 3px #afd1ff;
    border-bottom: solid 3px #afd1ff;
    background-color: white;
  }

  .bullet {
    width: 15px;
    height: 15px;
    border: 2px solid black;
    border-radius: 50%;
    float: left;
    margin-left: -34px;
    background: white;
  }
  .timeline-item {
    min-height: 100px;
    color: black;
    margin-bottom: 50px;
  }
</style>
