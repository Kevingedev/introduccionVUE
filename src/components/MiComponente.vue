<template>
  <div class="componente">
    <p class="texto">Ejemplo de uso de directivas</p>




    <!--v-on cambia el valor de visible-->
    <button @click="ocultarBoton">{{ textoboton }}</button>



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

    <button @click="anadirLista">añadir usuario</button>

    <div class="cuadro">

      <!--formulario: v-model-->
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

// Definir el componente de forma asíncrona
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./componente2.vue')
);

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
  font-size: 18px;
  margin: 20px;
}

.cuadro {
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  padding: 20px;
}
</style>

