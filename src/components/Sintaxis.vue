<script setup>
import { ref, computed } from 'vue'
const nombre = ref('')
const mensaje = ref('')
const contador = ref(0)

const precio = ref(0)
const precioConIVA = computed(() => precio.value * 1.21)

const actualizarMensaje = () => {
  mensaje.value = 'Mensaje actualizado'
  contador.value++
}
</script>

<template>
  <div class="container">
    <div class="card">
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
          
          <div class="precio-box">
              <!-- computed -->
            <input type="number" v-model="precio" class="input" />
            <p>Precio base: {{ precio }}</p>
            <p>Precio con IVA: {{ precioConIVA }}</p>

          </div>
  
  </div>
 
  </div>

</template>

<style scoped>
.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 350px;
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
  border: 1px solid #999999;
  margin-bottom: 15px;
  font-size: 14px;
  transition: 0.3s;
}
.precio-box {
  margin-top: 20px;
  padding: 10px;
  background: #f4f6ff;
  border-radius: 10px;
}
</style>














































































































