<script setup>
import { ref } from 'vue'
import ControlRemoto from './ControlRemoto.vue'

// La "Fuente de Verdad" (Estado) vive aquí
const volumen = ref(10)
const encendido = ref(true)

const incrementar = () => { volumen.value++ }
const decrementar = () => { if(volumen.value > 0) volumen.value-- }
const estado = () => { encendido.value = !encendido.value }
</script>

<template>
  <div class="sala">
    <div
        class="televisor"    
        :class="encendido ? 'encendido' : 'apagado'">
        <h1>📺 Televisor </h1>
        <p>Nivel de sonido: {{ volumen }} {{ encendido ? 'Encendido' : 'Apagado' }}</p>
    </div>
        
    <hr />

    <ControlRemoto 
      :volumenActual="volumen" 
      :encendido="encendido"
      @subirVolumen="incrementar" 
      @bajarVolumen="decrementar" 
      @encendido="estado"
    />
  </div>
</template>

<style scoped>
.sala { font-family: sans-serif; text-align: center; padding: 20px; }
.televisor { border: 2px solid #35495e; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
.encendido { color: black; background-color: white; }
.apagado { color: white; background-color: black; }
</style>