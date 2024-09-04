<template>
  <div class="home">
      <h1>Home</h1>

      <!-- case 3: what if to search & filter a name from the names below -->
      <input type="text" v-model="search">
      <p>search term - {{ search }}</p>
      <!-- case 2 output -->
       <div v-for="name in matchingNames" :key="name">{{ name }}</div>

      <!-- case 6 & 7 -->
       <button @click="handleClick">stop watching</button>


      <!-- case 1 output -->
      <!--p>{{ name }}</p-->

  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

export default {
  name: 'Home',

  setup() {
    // case 3 to search & filter name from name array below
    const search = ref('')

    // case 2
    const names = ref(['mario','yoshi','luigi','toad', 'bowser', 'kooga','peach'])

    // case 4 use this Watch function without wantiing to use the value in it
    // watch(search, () => {
    //   console.log('watch function ran')
    // })

    //case 5 watchEffect function if want use value inside the function 
    // watchEffect(() => {
    //   console.log('watchEffect function ran', search.value)
    // })

    // case 6 to stop watch function
    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    // case 7 stop watchEffect function
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    // case 3 to search & filter name from name array
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick }
          // case 1 
          // const name = computed(() => {
          //   return 'shaun'
          // })
          
          // return { name }
  }
}
</script>
