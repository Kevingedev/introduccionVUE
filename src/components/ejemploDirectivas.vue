<template>
  <div class="componente">
    <p class="texto">Ejemplo de uso de directivas</p>


    <!--v-on cambia el valor de visible-->
    <button @click="ocultarBoton" class="boton">{{ textoboton }}</button>


    <div class="cuadro">
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

    </div>

    <!--v-on ejecuta accion al clickar-->
    <button @click="anadirLista" class="boton">añadir usuario</button>

    <div class="cuadro">

      <!--v-model gestiona formularios-->
      <input v-model="nombreusuario" type="nombreusuario" placeholder="Escribe el nombre" />

      <p>nombre ingresado: {{ nombreusuario }}</p>

    </div>

    <!-- dependencias asíncronas: <suspense> -->
    <Suspense>
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

<!-- Estilos scoped, solo validos en el componente -->
<style scoped>
.texto {
  color: blue;
  font-size: 2rem;
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

.boton{
  background-color: #008CBA; /* Color de fondo */
  color: white; /* Color del texto */
  padding: 15px 30px; /* Tamaño interno */
  border: none; /* Quitar borde predeterminado */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor a mano */
  font-size: 16px;
}

</style>

