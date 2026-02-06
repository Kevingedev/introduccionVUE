<script setup lang="ts">
import { ref, watch } from 'vue'

const pregunta = ref('')
const aviso = ref('Escribe algo...')

// Vigilamos específicamente a "pregunta"
watch(pregunta, (nuevoValor, viejoValor) => {
  if (nuevoValor.includes('?')) {
    aviso.value = '¡Detecté un signo de interrogación!'
  } else {
    aviso.value = 'Sigue escribiendo...'
  }
  console.log(`Cambió de: "${viejoValor}" a: "${nuevoValor}"`)
})
</script>

<template>
    <div class="card">
      <h2>Watch Example</h2>
      <input v-model="pregunta" placeholder="Haz una pregunta" />
      <p>{{ aviso }}</p>
    </div>
</template>

<style scoped>
input {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #014f4f;
  border-radius: 4px;
}
p {
  margin-top: 10px;
  font-weight: bold;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
}
</style>