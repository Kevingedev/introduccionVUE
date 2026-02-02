<script setup>
import { ref } from 'vue';
import HijoComponent from './HijoComponent.vue';

const total = ref(0);
const incrementar = () => total.value++;
</script>

<template>
  <div class="content">

    <p>Total en el padre: {{ total  }}</p>
    <HijoComponent :cantidad="total" @sumar="incrementar" />
  </div>
</template>

<style scoped>
.content {
    padding: 20px;
    border: 1px solid hsla(160, 100%, 37%, 1);
    border-radius: 0.5rem;
}
p{
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
}
</style>