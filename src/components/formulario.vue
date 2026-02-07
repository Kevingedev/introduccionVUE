<template>
  <div>
    <h2>Formulario con v-model</h2>

    <!-- input text -->
    <label>
      Nombre:
      <input type="text" v-model="nombre" />
    </label>
    <p>Nombre: {{ nombre }}</p>

    <!-- select -->
    <label>
      País:
      <select v-model="pais">
        <option disabled value="">Selecciona un país</option>
        <option>España</option>
        <option>México</option>
        <option>Argentina</option>
      </select>
    </label>
    <p>País: {{ pais }}</p>

    <!-- checkbox -->
    <label>
      <input type="checkbox" v-model="aceptaTerminos" />
      Acepto los términos
    </label>
    <p>Acepta términos: {{ aceptaTerminos }}</p>

    <!-- radio -->
    <p>Género:</p>
    <label>
      <input type="radio" value="Masculino" v-model="genero" />
      Masculino
    </label>
    <label>
      <input type="radio" value="Femenino" v-model="genero" />
      Femenino
    </label>
    <label>
      <input type="radio" value="Otro" v-model="genero" />
      Otro
    </label>
    <p>Género: {{ genero }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const pais = ref('')
const aceptaTerminos = ref(false)
const genero = ref('')
</script>
