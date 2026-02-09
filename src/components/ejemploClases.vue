<template>
    <h2 class="texto">Ejemplo de clases CSS dinamicas</h2>

<!--texto con clases dinamicas-->
 <div class="cuadro">
 <p :class="{ activo: estaActivo, error: hayError }">
    Este es un ejemplo de clase dinámica.
 </p>
<p>Esta activo: {{ estaActivo }}</p>


<!--Alterna las clases al clickar-->
<button @click="cambiar">
    Toggle
</button>
</div>
</template>

<script setup>
import { ref } from 'vue';

const estaActivo = ref(false);
const hayError = ref(true);

function cambiar(){
    estaActivo.value=!estaActivo.value;
    hayError.value=!hayError.value;
}

</script>

<!-- Estilos scoped, solo validos en el componente -->
<style scoped>
    .activo{
         color: rgb(75, 255, 99);
        font-weight: bold;
        padding: 10px;
    }
      .error{
         color: rgb(255, 156, 75);
        font-weight: bold;
        padding: 10px;
    }
</style>