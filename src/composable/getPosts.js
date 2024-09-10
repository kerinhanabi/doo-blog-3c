import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  // async function to fetch data from data local folder from db.json
  const load = async () => {
    try {
      // create a variebel
      let data = await fetch("http://localhost:3000/posts"); //to perform fetch and wait the fetch to complete, respond will store in data 'variable'
      //console.log(data)
      // below condition is : if the data is not OK
      if (!data.ok) {
        throw Error("no data available");
      }
      // if data ok , no error then
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
