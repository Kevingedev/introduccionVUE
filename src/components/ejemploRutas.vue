<template>
  <p class="texto">Ejemplo de rutas con parametros</p>
  <div class="cuadro">
    <p>dirigirse a (localhost)/user/:id?</p>
    <p>ID del usuario: {{ userId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Obtener la ruta actual
const route = useRoute();

// Extraer el parámetro `id` de la URL
// Usamos computed para que userId se reactive si la ruta cambia sin recargar el componente.
const userId = computed(() => route.params.id);
</script>