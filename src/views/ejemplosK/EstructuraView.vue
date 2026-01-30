<script setup lang="ts"> 
    import PadreComponent from '@/components/ejemplosK/parentChild/PadreComponent.vue' 
    import BaseCard from '@/components/ejemplosK/slots/BaseCard.vue' 
    import { ref, computed } from 'vue'


    const item = ref<string>('componentes'); // slots, teleport.


</script> 
<template> 
    <main class="main"> 
        <div>

            <h1>Estructura y Modularidad en Vue.js</h1>
            
            <div class="nav">
                <button @click="item = 'componentes'" :class="item === 'componentes' ? 'activo' : ''"  >
                    Compomnentes
                </button>
            <button @click="item = 'slots'" :class="item === 'slots' ? 'activo' : ''" >
                Slots
            </button>
            <button @click="item = 'teleport'" :class="item === 'teleport' ? 'activo' : ''" >
                Teleport
            </button>
        </div>
        
        <div id="componentes" v-if="item==='componentes'">
            <PadreComponent />
        </div>
        <div id="slots" v-if="item==='slots'">

            <BaseCard title="Perfil de Usuario" color="red"> 
                <p>Nombre: <strong>Juan Pérez</strong></p> 
                <button class="btnSlots">Editar Perfil</button> 
            </BaseCard>
        </div>
        
    </div>

    </main>
</template>


<style scoped lang="css">
.main {
    
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
}

.nav {
    margin-bottom: 20px;
}

.nav button {
    margin-right: 10px;
    padding: 10px 15px;
    background-color: #d8d8d8;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.nav button:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.nav button.activo {
    background-color: #3094ff;
    color: white;
}

.btnSlots {
    margin-top: 5px;
    padding: 10px 15px;
    background-color: hsla(160, 100%, 37%, 1);
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>