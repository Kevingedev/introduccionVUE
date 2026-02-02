
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
  <div class="contenido">
            <!-- Interpolación -->
        <h2>Hola, {{ nombre }}</h2>

        <!-- v-model -->
        <input v-model="nombre" placeholder="Cambia tu nombre" class="input" />

        <!-- v-on -->
        <button @click="actualizarMensaje">
          Cambiar mensaje
        </button>

        <p>{{ mensaje }}</p>
        <p>Contador: {{ contador }}</p>
          
          <div class="divPrecio">
              <!-- computed -->
            <input type="number" v-model="precio" class="input" />
            <p>Precio base: {{ precio }}</p>
            <p>Precio con IVA: {{ precioConIVA }}</p>

          </div>
  
  </div>

</template>

<style scoped>
.contenido {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 1.5rem;
}
h2 {
  margin-bottom: 20px;
  color: #333;
}
.input {
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #1d1d1d;
  margin-bottom: 15px;
  font-size: 14px;
}
button{
  padding: 1rem;
  background: #f0d1d1;
  border-radius: 1rem;
}
button:hover{
  background: #f4f6ff;
}
.divPrecio {
  margin-top: 20px;
  padding: 40px;
  background: #f4f6ff;
  border-radius: 10px;
}
</style>
