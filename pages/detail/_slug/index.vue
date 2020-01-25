<template>
  <div v-if="tourResult!==[]">
    <Header>
      <template slot="left">
        <DetailHeader :detail="tourResult"/>
      </template>

    </Header>
    <div class="timeline">
      <p >Trip Timeline</p>
      <TimeLineItem />
      <div v-for="(city, index) in tourResult.cities" :key="index">
        <TimeLineItem>
          <p class="text-gray text-lg">{{city.thingsToDo}}</p>
          <div class="flex mb-4">
            <div class="w-1/2 h-12 card">
              <h6>Iran Online Visa Application Form</h6>
              <p>Between <span>$19 - $29</span></p>
            </div>
            <div class="w-1/2 h-12 card" v-if="tourPrice !== null">
              <h6>Iran Online Visa Application Form</h6>
              <p>Between <span>{{tourPrice.min}}$ - {{tourPrice.max}}$</span></p>
            </div>
          </div>
        </TimeLineItem>
        <TimeLineItem :cname="city.name" :days="city.days" :index="index+1">
          <p>Your tour starts after you arrive at the Imam Khomeini International Airport. We pick you up and transfer  you to the hotel. After a break, we visit Iran’s National Museum, Golestan Palace Complex and the Grand  Bazaar, as well as Milad and Azadi Towers. This package fits those who seek to have a unique  experience of Iran’s culture and history. This package fits those who seek to have a unique  experience of Iran’s culture and history.</p>
          <div class="flex mb-4">
            <div class="w-1/2 h-12" v-for="(image, index) in city.images" :key="index">
              <img :src="image.src" alt="">
            </div>
          </div>
          <br>
          <div class="flex mb-4 mt-80">
            <div class="w-1/2 h-12 card">
              <h6>Pick-up</h6>
              <p>From airport to hotel</p>
            </div>
            <div class="w-1/2 h-12 card" v-if="tourPrice !== null">
              <h6>Hotel</h6>
              <p>Grand hotel team</p>
            </div>
          </div>
        </TimeLineItem>
      </div>
    </div>
  </div>

</template>
<script>
  import TimeLineItem from "../../../components/TimeLine/TimeLineItem";
  import Header from "../../../components/layout/Header";
  import DetailHeader from "../../../components/Detail/DetailHeader";
  export default {
    components: {TimeLineItem,Header,DetailHeader},
    data(){
      return {
        slug:'',
        tourResult:[],
        tourPrice: null
      }
    },
    methods: {
      async getCityResult() {
        const url = `itinerary/${this.slug}`
        const ip = await this.$axios.$get(url)
          .then(res=>{
            this.tourResult = res.data;
            return this.tourResult
          })
          .then(tourResult=>{
            console.log(tourResult,'tour result')
            this.tourPrice = tourResult.totalPrice
            console.log(this.tourPrice)
          })
          .catch(err=>err)
        console.log(ip,'ip')
      },
    },
    mounted(){
      var slugTour = this.$route.params.slug
      this.slug = slugTour
      this.$nextTick(()=>{
        this.getCityResult()
      })

    }
  }
</script>

<style scoped>

  .image-box {
    margin: 10px 0;
    display: block;
    width: 100%;height: 120px;
    text-align: left;
    vertical-align: middle;
  }

  .image-box img {
    float: left;
    max-height: 95px;
    border-radius: 5px;
    margin-right: 20px;
  }

  .image-box a {
    text-decoration: underline;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: left;
    color: #565d69;
  }


  .card {
    float: left;
    width: 400px;
    height: 70px;
    border: solid 1px #eaf0f4;
    border-radius: 5px;
    margin: 10px 0;
    margin-right: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: white;
    padding: 10px 30px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: normal;
    text-align: left;
    color: #373d45;
  }

  .card p {
    color: #ff6145;
  }

  .timeline {
    margin: -100px 20% 3% 20%;
    color: white;
    border-left: 3px dashed gray;
    padding-left: 25px;
  }


  .mt-80 {
    margin-top: 80px;
  }

</style>
