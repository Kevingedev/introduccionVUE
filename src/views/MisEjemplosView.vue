<script setup>
import { ref } from 'vue'

import MiComponente from '../components/ejemploDirectivas.vue'
import MiComponente2 from '../components/ejemploClases.vue' 
import MiComponente3 from '../components/ejemploRutas.vue' 
import MiComponente4 from '../components/ejemploAsincronia.vue' 
import MiComponente5 from '../components/formulario.vue' 

// Variable que controla qué componente se muestra
const componenteActivo = ref('formulario')

// Función para cambiar el componente activo
function mostrarComponente(nombre) {
    componenteActivo.value = nombre
}
</script>

<template>
  <div>
    <!-- Botones para seleccionar el componente -->
    <button @click="mostrarComponente('formulario')">Formulario</button>
    <button @click="mostrarComponente('directivas')">Directivas</button>
    <button @click="mostrarComponente('clases')">Clases</button>
    <button @click="mostrarComponente('rutas')">Rutas</button>
    <button @click="mostrarComponente('asincronia')">Asincronía</button>

    <!-- Componentes con v-if según el activo -->
    <MiComponente5 v-if="componenteActivo === 'formulario'" />
    <MiComponente v-if="componenteActivo === 'directivas'" />
    <MiComponente2 v-if="componenteActivo === 'clases'" />
    <MiComponente3 v-if="componenteActivo === 'rutas'" />
    <MiComponente4 v-if="componenteActivo === 'asincronia'" />
  </div>
</template>

