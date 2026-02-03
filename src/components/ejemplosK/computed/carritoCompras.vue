<script setup lang="ts">
import { ref, computed } from 'vue'

const precio = ref(100)
const cantidad = ref(1)

// Una propiedad computada que "reacciona" a los cambios
const total = computed((): string => {
  console.log('Calculando total...') // Solo verás este mensaje si algo cambia
  return `${precio.value * cantidad.value}€`
})
</script>

<template>
  <div class="card">
    <p>Precio: {{ precio }}€</p>
    
    <button @click="cantidad++">Añadir uno más ({{ cantidad }})</button>
    
    <hr>
    <h3>Total a pagar: {{ total }}</h3>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #014f4f;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f0fdfd;
}  
button {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 1.01rem;
  background-color: #014f4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #042f2fd2;
  transform: translateY(-2px);
}
h3 {
  font-weight: bold;
}
</style>