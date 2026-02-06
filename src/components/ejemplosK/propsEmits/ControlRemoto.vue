<script setup>
// Definimos qué datos recibe (Props)
defineProps({
  volumenActual: Number,
  encendido: Boolean
})

// Definimos qué mensajes puede enviar (Emits)
const emit = defineEmits(['subirVolumen', 'bajarVolumen', 'encendido']);
</script>

<template>
  <div class="control">
    <h3>Control Remoto</h3>
    <!-- <p>Volumen en TV: {{ volumenActual }}</p> -->
    
    <button @click="emit('subirVolumen')"> + Vol </button>
    <button @click="emit('bajarVolumen')"> - Vol </button>
    <button @click="emit('encendido')"> {{ encendido ? 'Apagar' : 'Encender' }} </button>
  </div>
</template>

<style scoped>
.control { border: 2px solid #42b883; padding: 10px; border-radius: 10px; }
button { margin: 5px; cursor: pointer; padding: 10px 15px; border: none; border-radius: 5px; 
    background-color: #1b7f52; color: white; }



</style>