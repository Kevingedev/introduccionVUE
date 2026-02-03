<script setup lang="ts">
import { shallowReactive } from 'vue'

const estadoGamer = shallowReactive({
  usuario: 'Alex99', // 1er nivel: Reactivo
  stats: {           // 2do nivel: NO reactivo
    puntos: 100
  }
})

const subirPuntos = () => {
  // NO funcionará en la pantalla (aunque el número cambie en memoria)
  estadoGamer.stats.puntos++ 
}

const cambiarNombre = () => {
  // SÍ funcionará porque es el primer nivel
  estadoGamer.usuario = 'Alex_Pro'
}
</script>

<template>
  <div class="card">
    <p>Usuario: {{ estadoGamer.usuario }}</p>
    <p>Puntos: {{ estadoGamer.stats.puntos }}</p>
    
    <button @click="cambiarNombre">Cambiar Nombre (1er nivel)</button>
    <button @click="subirPuntos">Subir Puntos (2do nivel)</button>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #47003b;
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