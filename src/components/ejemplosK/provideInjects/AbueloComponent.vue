<script setup lang="ts">
import { ref, provide } from 'vue'
import PadreComponent from './PadreComponent.vue'

const idioma = ref<string>('Español')

const cambiarIdioma = () => {
  idioma.value = idioma.value === 'Español' ? 'Inglés' : 'Español'
}

// Proporcionamos el dato y la función para cambiarlo
// 'configuracionGlobal' es el nombre de nuestra "estación de radio"
provide('configuracionGlobal', {
  idioma,
  cambiarIdioma
})
</script>

<template>
  <div class="abuelo">
    <h1>Abuelo (App)</h1>
    <p>Idioma actual: <b style="font-weight: 800;">{{ idioma }}</b></p>
    <hr />
    <PadreComponent />
  </div>
</template>

<style scoped lang="css">
.abuelo {
  border: 2px solid #4caf50;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #e8f5e9;
}
</style>