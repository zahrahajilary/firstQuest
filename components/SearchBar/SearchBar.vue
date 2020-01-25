<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg search">
    <div class="inline-block relative w-64">
      <select
        v-model="slug"
        class="block appearance-none
           w-full border border-gray-400
            hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
             leading-tight focus:outline-none focus:shadow-outline">
        <option value="" disabled>select City...</option>
        <option v-for="item in cityList"
                style="color: #35495e"
                :data-slug="item.slug"
                :key="item.slug"
                :value="item.slug">
          {{ item.name }}
        </option>
      </select>
    </div>
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="btnClickSearch(slug)"
    >
      Search
    </a>
  </div>
</template>

<script>
  export default {
    props: {cityList: {type: Array}, btnClickSearch: {type: Function}},
    name: "SearchBar",
    data() {
      return {
        slug: '',
      }
    },


  }
</script>

<style scoped>

  .search {
    color: #35495e;
  }
</style>
