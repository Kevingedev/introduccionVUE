<template>
     <p class="texto">Ejemplo asincronia - suspense</p>

    <div class="cuadro">
 <button @click="cargardatos">Cargar {{cargar}}</button>

    <!-- dependencias asíncronas: <suspense> -->
    <Suspense v-if="cargar">
      <!-- Contenido principal -->
      <template #default>
        <AsyncComponent />
      </template>

      <!-- Contenido de carga (fallback) -->
      <template #fallback>
        <div>Cargando contenido...</div>
      </template>
    </Suspense>
</div>

</template>



<script setup>

import { ref, defineAsyncComponent } from 'vue';

// Controla si se carga el componente
const cargar = ref(false);

function cargardatos(){
    cargar.value=!cargar.value;
}

// Definir el componente de forma asíncrona
const AsyncComponent = defineAsyncComponent(() =>
  import('./componenteAsinc.vue')
);

</script>

