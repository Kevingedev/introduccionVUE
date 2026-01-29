<script setup lang="ts">

const pathURL = window.location.pathname;

const path: string = 
                    pathURL.includes("/estructura") ? "Modularidad y Estructura" :
                    pathURL.includes("/flujo") ? "Flujo de datos" :
                    pathURL.includes("/produccion") ? "Produccion" : "Home";

const navItems: {name: string, route: string}[] = [
    {name: 'Home', route: '/'},
    {name: 'Modularidad y Estructura', route: '/estructura'},
    {name: 'Flujo de datos', route: '/flujo'},
    {name: 'Produccion', route: '/produccion'},
]

</script>

<template>
    <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <nav>
        <h2>{{ path }}</h2>
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
  border-right: 2px solid hsl(0, 0%, 90%);
  height: 100%;
  width: 200px;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.active-link{
    background-color: hsla(160, 100%, 37%, 1);
    color:white;
}
</style>