import { ref } from "vue"

const get1Post = (id) => {
  const post = ref(null)
  const error = ref(null)

  // async function to fetch data from data local folder from db.json
  const load = async () => {
    try {
      // create a variebel
      let data = await fetch("http://localhost:3000/posts/" + id) //to perform fetch and wait the fetch to complete, respond will store in data 'variable'
      //console.log(data)
      // below condition is : if the data is not OK
      if (!data.ok) {
        throw Error("post does not exist")
      }
      // if data ok , no error then
      post.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(err.message)
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default get1Post
