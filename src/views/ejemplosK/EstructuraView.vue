<script setup lang="ts"> 
    import PadreComponent from '@/components/ejemplosK/parentChild/PadreComponent.vue' 
    import BaseCard from '@/components/ejemplosK/slots/BaseCard.vue' 
    import ModalSeguro from '@/components/ejemplosK/teleport/ModalSeguro.vue';
    import NavigationButtons from '@/components/ejemplosK/NavigationButtons.vue'
    import Televisor from '@/components/ejemplosK/propsEmits/Televisor.vue'
    import AbueloComponent from '@/components/ejemplosK/provideInjects/AbueloComponent.vue'
    import GamerProfile from '@/components/ejemplosK/reactividad/GamerProfile.vue';
    import ShallowRef from '@/components/ejemplosK/reactividadOpti/ShallowRef.vue';
    import ShallowReactive from '@/components/ejemplosK/reactividadOpti/ShallowReactive.vue';
    import Perfil from '@/components/ejemplosK/globalStatus/Perfil.vue';
    import Contador from '@/components/ejemplosK/globalStatus/Contador.vue';    
    import CarritoCompras from '@/components/ejemplosK/computed/carritoCompras.vue';
    import WatchComponent from '@/components/ejemplosK/watchers/WatchComponent.vue';
    import WatchEffectComponent from '@/components/ejemplosK/watchers/WatchEffectComponent.vue';
    import { ref, computed } from 'vue'


    const item = ref<string>('componentes'); // slots, teleport.


</script> 
<template> 
    <main class="main"> 
        <div>

            <h1>Estructura y Modularidad en Vue.js</h1>
            
            <!-- Estoy usando Emits y props para comunicar componentes -->
            <NavigationButtons 
                :item="item" 
                @update:item="(nuevoValor) => item = nuevoValor" 
            />
            
        
            <div id="componentes" v-if="item==='componentes'">
                <PadreComponent />
            </div>
            <div id="slots" v-if="item==='slots'">

                <BaseCard title="Perfil de Usuario" color="red"> 
                    <p>Nombre: <strong>Juan Pérez</strong></p> 
                    <button class="btnSlots">Editar Perfil</button> 
                </BaseCard>
            </div>

            <div id="teleport" class="content" v-if="item==='teleport'">
                <ModalSeguro />
            </div>

            <div id="propsEmits" v-if="item==='propsEmits'">
                <Televisor />
            </div>

            <div id="provideInject" v-if="item==='provideInjects'">
                <AbueloComponent />
            </div>

            <div id="reactividad" v-if="item==='reactividad'">
                <GamerProfile />
            </div>
            <div id="reactividadOpti" v-if="item==='reactividadOpti'">
                <ShallowRef />
                <br>
                <ShallowReactive />
            </div>
            <div id="estadoGlobal" v-if="item==='estadoGlobal'">
                <Perfil />
                <Contador />
            </div>
            <div id="computed" v-if="item==='computed'">
                <CarritoCompras />
            </div>
            <div id="watchers" v-if="item==='watchers'">
                <WatchComponent />
                <WatchEffectComponent />
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

.content {
    padding: 20px;
    border: 1px solid hsla(160, 100%, 37%, 1);
    border-radius: 0.5rem;
}
</style>