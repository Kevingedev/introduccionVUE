<template>
  <div>
    <h2>
      Bucle que recorre un array de objetos recogido por fecht de una api externa
    </h2>
    <section>
      <article v-for="item in elementos" :key="item.login.username">
        <img :src="item.picture.large" alt="item.name.first" />
        <h2>{{ item.name.first }} {{ item.name.last }}</h2>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

let url = "https://randomuser.me/api/?results=15";
const elementos = ref(null);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    elementos.value = data.results;
  });
</script>

<style scoped>
section {
  width: 80%;
  height: auto;
  margin: 0 auto;
  background-color: aqua;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
article {
  width: 30%;
  height: 27rem;
  background-color: blueviolet;
  border: 0.3rem solid whitesmoke;
  border-radius: 0.4rem;
}
article img {
  width: 100%;
}
h2 {margin: 0.3rem auto;
padding: o.2rem;
  text-align: center;
  width: 80%;
  transition: 800ms;
 
}
h2:hover {
  color: crimson;
  background-color: rgb(128, 164, 91);
  border: 0.3rem solid whitesmoke;
  border-radius: 0.4rem;
  transform: translateY(0.7rem);
 
}
</style>
