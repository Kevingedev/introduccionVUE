<template>
  <div class="componente">
    <p class="texto">Ejemplo de uso de directivas</p>


    <!--v-bind enlaza la imagen-->
    <div class="cuadro">
      imagen con v-bind
      <img :src="image" :alt="text" width="100px">
    </div>

    <div class="cuadro">
    <!--v-on cambia el valor de visible-->
    <button @click="ocultarBoton">{{ textoboton }}</button>


     <!--v-if oculta o renderiza la lista-->
      <div v-if="visible">
        <ul>
          <!--v-for recorre la lista-->
          <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.nombre }}</li>
        </ul>

      </div>

      <div v-else>
        lista oculta
      </div>



    
    <!--V-on ejecuta el click-->
    <button @click="anadirLista">añadir usuario</button>

      <!--formulario: v-model-->
      <input v-model="nombreusuario" type="text" placeholder="Escribe el nombre" />

      <p>nombre ingresado: {{ nombreusuario }}</p>

    </div>


  </div>

</template>



<script setup>

import { ref } from 'vue'


 const usuarios = ref([
  {
    id: 1,
    nombre: "Sofía"
  },
  {
    id: 2,
    nombre: "Mateo"
  },
  {
    id: 3,
    nombre: "Lucía"
  },
  {
    id: 4,
    nombre: "Leo"
  },
  {
    id: 5,
    nombre: "Martina"
  },
]);

const nombreusuario = ref('');
const visible = ref(true);
const textoboton = ref('ocultar lista');

const image = ref(
  new URL("../assets/logo.png", import.meta.url).href
); //vite no carga archivos locales

const text = ref("Logo");


function anadirLista() {

  if (nombreusuario.value != '') {
    const user = {
      id: usuarios.value.length + 1,
      nombre: nombreusuario.value
    }
    usuarios.value.push(user);
  };
}

function ocultarBoton() {

  if (visible.value == true) {
    visible.value = false;
    textoboton.value = 'mostrar lista';
  } else {
    visible.value = true;
    textoboton.value = 'ocultar lista';
  };

}

</script>

<!-- Estilos globales, validos en todos los componentes -->
<style >
.texto {
  color: blue;
  font-size: 18px;
  margin: 20px;
}

.cuadro {
 border-radius: 10px;
  border-width: 1px;
  padding: 20px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cuadro p{
  font-size: large;
}

.cuadro li{
  font-size: large;
}

button {
  background-color: #008CBA;
  color: white;
  padding: 15px 30px;
  margin: 15px;
  border: none; 
  border-radius: 5px; 
  cursor: pointer;
  font-size: 16px;
}

input {
   padding: 15px 30px;
}
</style>

