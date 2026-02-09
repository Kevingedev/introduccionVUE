<template>
  <div class="componente">
    <p class="texto">Ejemplo de uso de directivas</p>


    <!---------------------imagen con v-bind-------------------->
    <div class="cuadro">
      imagen con v-bind
      <img :src="image" :alt="text" width="100px">
    </div>


    <!------------------------lista----------------------------->
    <div class="cuadro">

      <!--input con v-model recoge el nombre-->
      <input v-model="nombreusuario" type="text" placeholder="Escribe el nombre" />

      <!--V-on se ejecuta al hacer click-->
      <button @click="anadirUsuario">añadir usuario</button>

      <p>nombre ingresado: {{ nombreusuario }}</p>


      <!--v-on cambia el valor de la variable visible-->
      <button @click="ocultarlista">{{ textoboton }}</button>


      <!--v-if oculta o renderiza la lista-->
      <div v-if="visible">
        <ul>
          <!--v-for recorre la lista-->
          <!--v-on elimina un usuario-->
          <li v-for="usuario in usuarios" :key="usuario.id" @click="eliminarUsuario(usuario.id)">{{ usuario.nombre }}
          </li>
        </ul>

      </div>

      <div v-else>
        lista oculta
      </div>

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

//vite no carga archivos locales
const image = ref(
  new URL("../assets/logo.png", import.meta.url).href
);

const text = ref("Logo");

function anadirUsuario() {

  if (nombreusuario.value != '') {
    const user = {
      id: usuarios.value.length + 1,
      nombre: nombreusuario.value
    }
    usuarios.value.push(user);
  };
}

function eliminarUsuario(id) {
  // Filtramos la lista eliminando el usuario cuyo id coincide
  usuarios.value = usuarios.value.filter(usuario => usuario.id !== id);
}

function ocultarlista() {
  
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
<style>
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

.cuadro p {
  font-size: large;
}

.cuadro li {
  font-size: large;
}

button {
  background-color: #008CBA;
  color: white;
  padding: 7px 15px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

input {
  padding: 7px 15px;
}

.cuadro li:hover {
  color: red;
  text-decoration: line-through;
}
</style>

