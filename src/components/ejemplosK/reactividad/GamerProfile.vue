<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

//Ideal para valores sueltos (primitivos)
// Necesita .value en el script, pero no en el template
const puntos = ref<number>(0) // ref se usa para una variable simple

// definir interfaz para el objeto 
interface Jugador {
  nombre: string
  nivel: number
  equipo: string
}

//reactive es Ideal para objetos agrupados como el jugador
// no necesita .value, se accede como objeto normal
const jugador = reactive<Jugador>({ 
  nombre: 'ProPlayer69',
  nivel: 1,
  equipo: 'Alpha'
})

// torefs es Para desestructurar un objeto reactivo
// si hacemos: const { nombre } = jugador; pierde reactividad
// con toRefs, 'nombre' y 'nivel' siguen siendo reactivos
const { nombre, nivel } = toRefs(jugador)

const subirNivel = (): void => {
  puntos.value += 100         // ref si usa .value
  jugador.nivel++             // reactive no usa .value
}
</script>

<template>
  <div class="card">
    <h2>Jugador: <span style="font-weight: 700;">{{ nombre }}</span></h2> 
    <p>Puntos: {{ puntos }}</p>
    <p>Nivel: {{ nivel }}</p>
    <p>Equipo: {{ jugador.equipo }}</p> <button @click="subirNivel">Ganar Experiencia 🥳</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  font-size: 1.01rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #45a049;
  transform: translateY(-3px);
}
</style>