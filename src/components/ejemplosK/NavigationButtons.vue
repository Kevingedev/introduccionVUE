<script setup lang="ts">

// recibir propiedad para saber que boton estara seleccionado o activo 
defineProps(['item']);

// Definir evento a emitir
const emit = defineEmits(['update:item']);

const seleccionar = (valor: string) => {
    // Emitir evento con nuevo valor
    emit('update:item', valor);
};
</script>

<template>
    <div class="nav">
        <button 
            @click="seleccionar('componentes')" 
            :class="{ activo: item === 'componentes' }"
        >
            Componentes
        </button>
        
        <button 
            @click="seleccionar('slots')" 
            :class="{ activo: item === 'slots' }"
        >
            Slots
        </button>
        
        <button 
            @click="seleccionar('teleport')" 
            :class="{ activo: item === 'teleport' }"
        >
            Teleport
        </button>
        <button 
            @click="seleccionar('propsEmits')" 
            :class="{ activo: item === 'propsEmits' }"
        >
            Props & Emits
        </button>
        <button 
            @click="seleccionar('provideInjects')" 
            :class="{ activo: item === 'provideInjects' }"
        >
            Provide/Injects
        </button>
        <button
            @click="seleccionar('reactividad')" 
            :class="{ activo: item === 'reactividad' }"
        >
            Reactividad Simples
        </button>
        <button
            @click="seleccionar('reactividadOpti')" 
            :class="{ activo: item === 'reactividadOpti' }"
        >
            Reactividad Optimizada
        </button>
        <button
            @click="seleccionar('estadoGlobal')" 
            :class="{ activo: item === 'estadoGlobal' }"
        >
            EstadoGlobal
        </button>
        <button
            @click="seleccionar('computed')" 
            :class="{ activo: item === 'computed' }"
        >
            Computed
        </button>
        <button
            @click="seleccionar('watchers')" 
            :class="{ activo: item === 'watchers' }"
        >
            Watchers
        </button>
    </div>
</template>
<style scoped>
.nav {
    margin-bottom: 20px;
}

.nav button {
    margin-right: 10px;
    margin-top: 7px;
    padding: 10px 15px;
    font-size: 1.1rem;
    background-color: #d8d8d8;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.nav button:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.nav button.activo {
    background-color: #3094ff;
    color: white;
}
</style>