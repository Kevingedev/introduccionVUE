<script setup lang="ts">
import { shallowRef } from 'vue'

interface Config {
  tema: string;
  fuente: string;
}

// Vue solo vigila el "valor" de 'config', no sus propiedades internas
const config = shallowRef<Config>({
  tema: 'oscuro',
  fuente: 'Arial'
})

const cambioIncorrecto = () => {
  // Esto NO disparará un cambio en la pantalla
  // Porque el objeto sigue siendo el mismo (misma referencia)
  config.value.tema = 'claro' 
}

const cambioCorrecto = () => {
  // Esto SÍ disparará el cambio
  // Estamos reemplazando el objeto entero por uno nuevo
  config.value = {
    tema: 'claro',
    fuente: 'Verdana'
  }
}
</script>

<template>
    <div class="card">
        <p>Tema actual: {{ config.tema }}</p>
        <button @click="cambioIncorrecto">Cambio interno (No funciona)</button>
        <button @click="cambioCorrecto">Reemplazar todo (Sí funciona)</button>
    </div>
</template>

<style scoped>
.card {
  border: 2px solid #530045;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
}
button {
  margin: 10px 5px 0 5px;
  padding: 8px 12px;
  background-color: #6e0056;
  color: white;
  font-size: 1.01rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #6e0056ef;
  transform: translateY(-3px);
}
</style>    