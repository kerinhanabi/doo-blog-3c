<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>

  <div v-else></div>
</template>

<script>
import get1Post from '../composable/get1post'
export default {
    //fetch date base on id
    props: ['id'],
    setup(props) {
        const { post, error, load } = get1Post(props.id)

        load()

        return { post, error }
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>