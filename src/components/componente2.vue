<template>
  <div>{{ datos }}</div>
</template>

<script setup>
import { ref } from 'vue';

// Simula una llamada API con una promesa
const datos = await new Promise((resolve) => {
  setTimeout(() => resolve('¡Datos cargados!'), 2000);
 

});
</script>