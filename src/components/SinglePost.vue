<template>
    <div class="post">
        <router-link :to="{ name: 'details', params: { id: post.id }}">
            <h3>{{ post.title }}</h3>
        </router-link>
        
        <!-- p>{{ post.body }}</p -->
         <!-- to use snippet here via setup the return from setup -->
          <p>{{ snippet }}</p>
          <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
          </span>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '....'
        })

        return { snippet }
    }
}
</script>

<style>

</style>