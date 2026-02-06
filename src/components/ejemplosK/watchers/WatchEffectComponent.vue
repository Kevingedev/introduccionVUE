<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const contador = ref(0)
const userId = ref(1)
const textContent = ref('')

// Se ejecuta inmediatamente y cada vez que contador o userId cambien
watchEffect(() => {
  console.log(`Sincronizando datos para el usuario ${userId.value} con puntos: ${contador.value}`)
  // Aquí podrías hacer un fetch a una API, por ejemplo.
  
  textContent.value = `Sincronizando datos para el usuario ${userId.value} con puntos: ${contador.value}`
})
</script>

<template>
    <div class="card">
      <h2>Watch Effect Example</h2>
      <p>Contador: {{ contador }}</p>
      <p>ID de Usuario: {{ userId }}</p>
      <p>{{ textContent }}</p>
      <button @click="contador++">Sumar punto</button>
      <button @click="userId++">Cambiar Usuario</button>
    </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 1rem;
  background-color: #014f4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #042f2fd2;
}
.card {
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
}
</style>