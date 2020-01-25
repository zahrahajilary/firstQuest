<template>
  <div class="">
    <div class="block w-full">
      <div id="results">
        <div @click="getDetailTour(tour.slug)" style="cursor: pointer">
          <div class="tripItem">
            <h5 class="tour-title">{{tour.title}}</h5>
            <small class="price">From ${{tour.totalPrice.min}} per person</small>
            <br/>
            <hr/>
            <div class="imageItems">
              <img class="imageItem" :src="image.src" alt="" v-for="(image, index) in getImages(tour)[0]" :key="index">
              <template v-if="getImages(tour).length > 3">
                  <div class="imageItem">
                    <place-holder/>
                  </div>
              </template>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import placeHolder from "./placeHolder";
  export default {
    props: {
      tour:{
        type:Object,
      },
      getImages:{
        type:Function
      },
      getDetailTour:{
        type:Function
      }
    },
    components:{
      placeHolder
    }
  }
</script>

<style scoped>
 .tripItem {
   width: 100%;
   height: auto;
   border-radius: 10px;
   border: solid 1px #eaf0f4;
   background-color: white;
   padding: 10px 5px;
   margin-top: 5px;
 }
  #results{
    float: left;
    width: 100%;
    margin-top: 2%
  }
  .imageItems {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin:5px;
    padding:5px;
    align-items: flex-start;
    align-content: stretch;
  }
  .imageItem{
    width:15%;
    border-radius: 5px;
    margin:10px;
  }
  .tour-title {
    font-size: 15px;
    font-weight: 700;
    color:#373d45;
  }
  .price {
    color:#373d45;
    font-size: 16px;
    margin-bottom: 10px;
  }

</style>
