<script setup lang="ts">
//definimos el componente envia un evento llamado UPDATE:FILTER

const emit = defineEmits<{
    (e: 'update:filter', value: string): void
}>()

const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:filter', target.value)
}
</script>


<template>

    <input type="text" placeholder="Buscar por nombre..." @input="onInput">

</template>


<style scoped>
    input{
        border: 2px solid #d4d4d4;
        border-radius: 1rem;
        padding: 1rem;
        width: 25%;
    }
</style>
