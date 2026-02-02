<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const path = computed((): string => {
  const pathURL = route.path;

  if (pathURL.includes("/estructura")) return "Modularidad";
  if (pathURL.includes("/sintaxis")) return "Sintaxis";
  if (pathURL.includes("/ejemplos")) return "Ejemplos";
  
  return "Home";
});  

const navItems: {name: string, route: string}[] = [
    {name: 'Home', route: '/'},
    {name: 'Modularidad', route: '/estructura'},
    {name: 'Sintaxis', route: '/sintaxis'},
    {name: 'Ejemplos', route: '/ejemplos'},
]

</script>

<template>
    <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <nav>
        <div class="nav-links">
          
          <RouterLink 
            v-for="item in navItems" 
            :key="item.route" 
            :to="item.route"
            :class="{ 'active-link': path === item.name }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  /* border-right: 2px solid hsl(0, 0%, 90%); */
  width: 100%;
}
nav {
  display: flex;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  border-radius: 0.7rem;
  padding: 0.9rem;
}

.nav-links a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
}

.active-link{
    background-color: hsla(160, 100%, 37%, 1);
    color:white;
}
</style>