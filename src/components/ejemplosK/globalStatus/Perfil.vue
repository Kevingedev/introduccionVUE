<script setup lang="ts">
import { useStore } from '@/stores/store'
import { ref } from 'vue'

const userName = ref<string>('')

const { estado, login } = useStore()
</script>

<template>
  <div class="box">
    <h3>Usuario: {{ estado.usuario }}</h3>
    <input type="text" placeholder="Ingresa tu nombre de usuario" v-model="userName" />
    <button @click="login(userName)">Iniciar Sesión</button>
    <p>Score actual: {{ estado.contador }}</p>
  </div>
</template>

<style scoped>
.box {
  border: 2px solid #004747;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f0fdfd;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007777;
  color: white;
  font-size: 1.01rem;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
input {
  margin-top: 10px;
  margin-right: 5px;
  padding: 8px 12px;
  font-size: 1.01rem;
  border: 2px solid #007777;
  border-radius: 4px;
}
button:hover {
  background-color: #007777ef;
  transform: translateY(-3px);
}
</style>