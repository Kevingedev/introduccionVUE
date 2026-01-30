<template>
  <div class="componente">
    <p>mi componente</p>

    <button @click="ocultarBoton">ocultar / mostrar</button>
    <div v-if="activo">
      visible
    </div>
    <div v-for="(item, index) in array" :key="index">{{ index }}. {{ item }}</div>

    <input v-model="text" type="text" placeholder="Escribe algo" />
    <p>Texto ingresado: {{ text }}</p>
    <button @click="anadirLista">añadir</button>


  </div>
</template>

<script setup>

import { ref } from 'vue'

const array = ref(["HTML", "CSS", "Javascript", "Terminal"]);

const text = ref('');
const activo = ref(true);

function anadirLista() {

  if (text.value != '') {
    array.value.push(text.value)
  };
}

function ocultarBoton() {

  if (activo.value == true) {
    activo.value = false;
  } else {
    activo.value = true;
  };

}


</script>
