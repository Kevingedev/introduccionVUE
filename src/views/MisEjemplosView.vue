<script setup>
import { ref } from 'vue'

import MiComponente from '../components/ejemploDirectivas.vue'
import MiComponente2 from '../components/ejemploClases.vue'
import MiComponente3 from '../components/ejemploRutas.vue'
import MiComponente4 from '../components/ejemploAsincronia.vue'

const activo = ref(1)
</script>

<template>
  <div>
    <button @click="activo = 1">Directivas</button>
    <button @click="activo = 2">Clases</button>
    <button @click="activo = 3">Rutas</button>
    <button @click="activo = 4">Async</button>

    <MiComponente v-if="activo === 1" />
    <MiComponente2 v-if="activo === 2" />
    <MiComponente3 v-if="activo === 3" />
    <MiComponente4 v-if="activo === 4" />
  </div>
</template>


