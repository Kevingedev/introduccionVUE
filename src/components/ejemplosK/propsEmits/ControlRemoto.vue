<script setup>
// Definimos qué datos recibe (Props)
defineProps({
  volumenActual: Number
})

// Definimos qué mensajes puede enviar (Emits)
const emit = defineEmits(['subirVolumen', 'bajarVolumen'])
</script>

<template>
  <div class="control">
    <h3>Control Remoto</h3>
    <p>Volumen en TV: {{ volumenActual }}</p>
    
    <button @click="emit('subirVolumen')"> + Vol </button>
    <button @click="emit('bajarVolumen')"> - Vol </button>
  </div>
</template>

<style scoped>
.control { border: 2px solid #42b883; padding: 10px; border-radius: 10px; }
button { margin: 5px; cursor: pointer; }
</style>