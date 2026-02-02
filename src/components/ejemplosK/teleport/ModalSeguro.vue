<script setup>
import { ref } from 'vue' 

const abierto = ref(false) 
</script> 
<template> 
    <button @click="abierto = true">Abrir Modal</button> 
    <Teleport to="#modals"> 
        <div v-if="abierto" class="modal-overlay"> 
            <div class="modal-content"> 
                <h2>¡Hola desde el Teleport!</h2> 
                <p>Estoy renderizado fuera de la app principal, pero mi lógica sigue aquí.</p> 
                <button @click="abierto = false">Cerrar</button> 
            </div> 
        </div> 
    </Teleport> 
</template> 
<style scoped>
/* Contenedor principal que cubre toda la pantalla */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  /* Flexbox para centrar el contenido */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegura que esté por encima de todo */
}

/* La tarjeta blanca del modal */
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* Estilo para los textos internos */
.modal-content h2 {
  margin-top: 0;
  color: #333;
}

.modal-content p {
  color: #666;
  line-height: 1.5;
  margin: 1rem 0;
}

/* Estilo para el botón de cerrar */
button {
  background-color: #42b883; /* Verde Vue */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #35495e; /* Azul oscuro Vue */
}
</style>