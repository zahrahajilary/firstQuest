<template>
  <div class="mx-auto">
    <div>
      <Header>
        <template slot="left">
          <h4 id="header" class="block  text-center  px-4 py-2">IRAN TRIP PLANNER</h4>
          <h1 id="context" class="block  text-center  px-4 py-2 mt-2">Plan Your trip to Iran</h1>
          <p id="moreInfo" class="block  text-center  px-4 py-2 mt-2">
            Find or create your best plan to visit Iran based on +300 plans designed by professional tour guides and
            travelers
          </p>
        </template>
        <template slot="center">
          <SearchBar :city-list="cityList" :btn-click-search="this.getSlug"/>
        </template>
      </Header>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Header from "../components/layout/Header";
  import SearchBar from "../components/SearchBar/SearchBar";

  export default {
    data(){
      return {
        cityList:[]
      }
    },
    methods: {
      async getCityList() {
        const url = 'cities'
        const cities = await this.$axios.$get(url)
        this.cityList = cities.data
      },

      getSlug(slug) {
        this.$store.dispatch('getResult',slug)
        this.$router.push(`/results`)
      }
    },
    mounted() {
      this.getCityList()
    },
    components: {
      Logo,
      Header,
      SearchBar
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #header {
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: left;
    color: white;
  }

  #context {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: white;
  }

  #moreInfo {
    font-family: Roboto;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: white;
  }


</style>
