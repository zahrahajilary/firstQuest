<template>
  <div>
    <SearchOption @selectMonth = 'getMonth'
      @selectPassenger = 'getPassenger'
    />
    <div class="flex md:flex-row-reverse flex-wrap">

      <div class="w-full md:w-2/4  p-4 text-left">
        <Map :latlng="latLngList"/>
      </div>

      <div class="w-full md:w-2/4  p-4 text-left">
        <div v-for="(tour,index) in searchResult" :key="index" class="items">
          <CartItem :tour="tour" :get-detail-tour="getDetailTour" :get-images="getImages"/>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
  import SearchOption from "../../components/Filter/SearchOption";
  import CartItem from "../../components/Cart/CartItem";
  import Map from "../../components/Map/Map";

  export default {
    name: "index",
    components: {CartItem,Map,SearchOption},
    data() {
      return {
        searchResult: [],
        latLngList :[],
        passengers:0,
        month:1
      }
    },
    methods: {
      async getSearchResult() {
        let city = this.$store.state.result
        const urlRes = `itineraries`
        const results = await this.$axios.$get(urlRes, {
          params: {
            cities: [`${city}`],
            top: 5,
            skip: 0,
            season: null,
            budget: 1,
            passengerCount:this.passengers,
            startDate:`2020-${this.month}-01`
          }
        })
        this.searchResult = results.data
        this.latLngList = this.getLatLng()
        this.$nextTick(()=>{
          this.getLatLng()
        })

      },
      getDetailTour(slug) {
        this.$router.push(`detail/${slug}`)

      },
      getImages(tour) {
        let arr = []
        for (let img of tour.cities) {
          arr.push(img.images)
        }
        return arr
      },
      getLatLng () {
        let arr = []
        let latLng;
        for(let item of this.searchResult){
           latLng = item.cities[0]
          arr.push([Number(latLng.latitude),Number(latLng.longitude)])
        }
        this.latLngList = arr
      },
      getMonth(value){
        this.month = value
        this.getSearchResult()

      },
      getPassenger(value){
        this.passengers=value;

      }
    },

    mounted() {
      this.$nextTick(() => {
        this.getSearchResult()
      })
    },
  }
</script>

<style scoped>
</style>
