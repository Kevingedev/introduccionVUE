<script setup lang="ts">
import { inject } from 'vue'

interface ConfiguracionGlobal {
  idioma: string
  cambiarIdioma: () => void
}

// "Inyectamos" lo que el abuelo proveyó usando el mismo nombre
const { idioma, cambiarIdioma } = inject<ConfiguracionGlobal>('configuracionGlobal')!
</script>

<template>
  <div class="nieto">
    <h5>Soy el Nieto (Final)</h5>
    <p>Leí desde el abuelo que el idioma es: <strong>{{ idioma }}</strong></p>
    <button @click="cambiarIdioma">Cambiar Idioma</button>
  </div>
</template>

<style scoped lang="css">
.nieto {
  border: 2px solid #ff9800;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #fff3e0;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #e68900;
}   
</style>