<script setup>
import NietoComponent from './NietoComponent.vue'
</script>

<template>
  <div class="padre">
    <h3>Soy el componente Padre (Intermedio)</h3>
    <p>Yo no toco el idioma, solo paso por aquí.</p>
    <NietoComponent />
  </div>
</template>


<style scoped lang="css">
.padre {
  border: 2px solid #2196f3;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #e3f2fd;
}
</style>