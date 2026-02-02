<script setup>
import { ref } from 'vue'
import ControlRemoto from './ControlRemoto.vue'

// La "Fuente de Verdad" (Estado) vive aquí
const volumen = ref(10)

const incrementar = () => { volumen.value++ }
const decrementar = () => { if(volumen.value > 0) volumen.value-- }
</script>

<template>
  <div class="sala">
    <h1>📺 Televisor </h1>
    <p>Nivel de sonido: {{ volumen }}</p>

    <hr />

    <ControlRemoto 
      :volumenActual="volumen" 
      @subirVolumen="incrementar" 
      @bajarVolumen="decrementar" 
    />
  </div>
</template>

<style>
.sala { font-family: sans-serif; text-align: center; padding: 20px; }
</style>