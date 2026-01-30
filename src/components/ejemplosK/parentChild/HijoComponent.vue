<script setup>
const props = defineProps({ cantidad: Number });
const emit = defineEmits(['sumar']);
</script>

<template>
  <button @click="emit('sumar')">Hijo: Botón Aumentar {{ props.cantidad }}</button>
</template>

<style scoped>

button {
    padding: 10px 15px;
    background-color: hsla(160, 100%, 37%, 1);
    font-size: 1.1rem;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

</style>