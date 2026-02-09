<template>
  <div>
    <h2 class="texto">Formulario con v-model</h2>
    <div class="cuadro">

      <!--uso de v-model-->
      <!-- input text -->
      <label>
        Nombre:
        <input type="text" v-model="nombre" placeholder="Escribe tu nombre"/>
      </label><br><br>

      <!-- select -->
      <label>
        País:
        <select v-model="pais">
          <option disabled value="">Selecciona un país</option>
          <option>España</option>
          <option>México</option>
          <option>Argentina</option>
        </select>
      </label><br><br>


      <!-- radio -->
      <label for>
        <input type="radio" value="Masculino" v-model="genero" />
        Masculino
      </label>
      <label>
        <input type="radio" value="Femenino" v-model="genero" />
        Femenino
      </label><br><br>

      <!-- checkbox -->
      <label>
        <input type="checkbox" v-model="aceptaTerminos" />
        Acepto los términos
      </label>

      <button :disabled="!aceptaTerminos" @click="enviarFormulario">enviar</button>
    </div>


  </div>

  <!--uso de v-for-->
  <ul>
    <li v-for="(user, index) in lista" :key="index">
      {{ user.nombre }} - {{ user.pais }}- {{ user.genero }}
    </li>
  </ul>

</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const pais = ref('')
const aceptaTerminos = ref(false)
const genero = ref('')

const lista = ref([])

function enviarFormulario() {
  const usuario = {
    nombre: nombre.value,
    pais: pais.value,
    genero: genero.value
  }
  lista.value.push(usuario)
  console.log(lista)

}
</script>

<style>



button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>