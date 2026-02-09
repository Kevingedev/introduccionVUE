
<script setup lang="ts">
import { ref, computed } from 'vue'
const nombre = ref<string>('')
const mensaje = ref<string>('')
const contador = ref<number>(0)

const precio = ref<number>(0)
const precioConIVA = computed<number>(() => precio.value * 1.21)

const actualizarMensaje = () => {
  mensaje.value = 'Mensaje actualizado'
  contador.value++
}
</script>

<template>
  <div class="contenido" :class="{ activo: contador > 0 }" >
            <!-- Interpolación -->
        <h2 :style="{ color: contador > 2 ? 'red' : 'black' }">Hola, {{ nombre }}</h2>

        <!-- v-model -->
        <input v-model="nombre" placeholder="Cambia tu nombre" class="input" />

        <!-- v-on -->
        <button @click="actualizarMensaje">
          Cambiar mensaje
        </button>

        <p>{{ mensaje }}</p>
        <p :class="{ destacado: contador >= 3 }">Contador: {{ contador }}</p>
          
          <div class="divPrecio">
              <!-- computed -->
            <input type="number" v-model="precio" class="input" />
            <p :class="{ caro: precioConIVA > 100 }">Precio base: {{ precio }}</p>
            <p>Precio con IVA: {{ precioConIVA }}</p>

          </div>
  
  </div>

</template>

<style scoped>
.contenido {
  padding: 100px;
  border-radius: 10px;
  background: #dbdde0;
  font-size: 1.5rem;

}

.activo {
  border: 2px solid #42b883;
}

.input {
  display: block;
  margin: 10px 0;
  padding: 8px;
}

button {
  padding: 8px 12px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}

.destacado {
  font-weight: bold;
  color: blue;
}

.caro {
  color: red;
  font-weight: bold;
}
</style>
