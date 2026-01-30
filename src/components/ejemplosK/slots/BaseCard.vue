<script setup> 
    // Props: Datos simples (String, Number, Boolean) 
    defineProps({ title: String, color: { type: String, default: 'gray' } }) 
</script>
<template> 
    <div class="card" :style="{ borderColor: color }"> 
        <h2 class="card-title">{{ title }}</h2> 
        <hr /> 
        <div class="card-content"> 
            <slot></slot> 
        </div> 
    </div> 
</template> 
<style scoped> 
    .card { border: 2px solid; padding: 1rem; border-radius: 8px; } 
    .card-title { color: v-bind(color); }
     
</style>