<script setup> 
    import BaseCard from '../components/estructura/BaseCard.vue' 
</script> 
<template> 
    <main> 
        <h1>Estructura y Modularidad en Vue.js</h1> 
 
        <BaseCard title="Componentes" color="blue"> 
            <p>Los componentes son bloques de construcción reutilizables en Vue.js que encapsulan la lógica, el 
                diseño y el comportamiento de una parte específica de la interfaz de usuario.</p> 
        </BaseCard> 

        <BaseCard title="Props y Eventos" color="green"> 
            <p>Las props permiten pasar datos desde un componente padre a un componente hijo, mientras que los eventos 
                permiten la comunicación desde el hijo hacia el padre.</p> 
        </BaseCard> 

        <BaseCard title="Composición y Reutilización" color="orange"> 
            <p>Vue.js fomenta la composición de componentes, lo que facilita la creación de interfaces complejas a partir 
                de piezas más pequeñas y manejables.</p> 
        </BaseCard> 

        
 
    </main>
</template>