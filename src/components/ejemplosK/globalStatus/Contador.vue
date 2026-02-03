<script setup lang="ts">
import { useStore } from '@/stores/store'

const { estado, incrementar } = useStore()
</script>

<template>
  <div class="box">
    <p>Puntos globales: {{ estado.contador }}</p>
    <button @click="incrementar">Sumar Puntos</button>
  </div>
</template>

<style scoped>
.box {
  border: 2px solid #004747;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f0fdfd;
  margin-top: 5px;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007777;
  color: white;
  font-size: 1.01rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #007777ef;
  transform: translateY(-3px);
}
</style>