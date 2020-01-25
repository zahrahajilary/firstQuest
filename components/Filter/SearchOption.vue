<template>
  <div>
    <div class="flex md:flex-row flex-wrap wrapper">
      <div class="w-full md:w-1/5 p-5 text-left">
        <select
          v-model="month"
          class="block appearance-none
           w-full border border-gray-400 text-white-400
            hover:border-gray-500
              text-white-400 font-bold
             px-4 py-2 pr-8 rounded shadow
             leading-tight focus:outline-none focus:shadow-outline bg-white-400">
          <option value="" disabled>All Month...</option>
          <option v-for="month in months"
                  style="color: #35495e"
                  :data-slug="month.value"
                  :key="month.value"
                  :value="month.value">
            {{ month.text }}
          </option>
        </select>
      </div>
      <div class="w-full md:w-1/5 p-4 text-left">
        <input
          class="bg-blue-700 text-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          value="Weeks" disabled>
      </div>
      <div class="w-full md:w-1/5 p-5 text-left">
        <select
          v-model="guest"
          class="block appearance-none
           w-full border border-gray-400 text-white-400
            hover:border-gray-500
              text-white-400 font-bold
             px-4 py-2 pr-8 rounded shadow
             leading-tight focus:outline-none focus:shadow-outline bg-white-400">
          <option value="" disabled>passenger...</option>
          <option v-for="passenger in guests"
                  style="color: #35495e"
                  :data-slug="passenger.value"
                  :key="passenger.value"
                  :value="passenger.value">
            {{ passenger.text }}
          </option>
        </select>
      </div>

      <div class="w-full md:w-1/5 p-5 text-left">
        <input
          class="bg-blue-700 text-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          value="Shiraz, Isfehan, Tehran" disabled>
      </div>
      <div class="w-full md:w-1/5 p-5 text-left">
        <input
          class="bg-blue-700 text-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          value="All Range" disabled>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchOption",
    data() {
      return {
        month: '',
        months: [{text: "January", value: 1},
          {text: "February", value: 2},
          {text: "March", value: 3},
          {text: "April", value: 4},
          {text: "May", value: 5},
          {text: "June", value: 6},
          {text: "July", value: 7},
          {text: "August", value: 8},
          {text: "September", value: 9},
          {text: "October", value: 10},
          {text: "November", value: 11},
          {text: "December", value: 12}],
        guests: [{
          text: '1guest',
          value: 1
        }, {
          text: '2guest',
          value: 2
        }, {
          text: '3guest',
          value: 3
        }, {
          text: '4guest',
          value: 4
        }, {
          text: '5guest',
          value: 5
        }, {
          text: '6guest',
          value: 6
        },],
        guest: ''
      }
    },
    updated() {
      this.$emit('selectMonth', this.month)
      this.$emit('selectPassenger', this.guest)
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .wrapper {
    border: 1px solid lightgray;
    margin: 10px;
    border-radius: 5px;
  }
</style>
