<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <!-- h3>{{ post.title }}</h3 -->
        <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue'

export default {
    props: [ 'posts' ],
    components: { SinglePost },
    setup(props) {
        // to use lifecycle hooks inside setup , the writting format is :
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
        // onMounted(() => {
            
        // })
        //console.log(props.posts)
    },
    // or use lifecycle hooks here in format written as
    mounted() {
        console.log(' mounted using option api')
    }
}
</script>

<style>

</style>