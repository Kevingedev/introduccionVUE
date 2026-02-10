<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type {User} from '../../types'
import UserCard from '@/components/user/UserCard.vue';  
import UserFilter from '@/components/user/UserFilter.vue';  

// Estado Reactivo
const userList = ref<User[]>([]);
const filter = ref<string>('');
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

//funcion para obtener datos (Fetch con tipado)
const getUsers = async () => {
    try{
        const response = await fetch('http://localhost:10000/users');
        if (!response.ok) throw new Error('No se pudo conectar con el servidor');
        
        
        //Le decimos a TS que el JSON resultante es un array  de usuaruoios
        const data = await response.json() as User[];
        
        setTimeout(() => {
            
        }, 2000);

        userList.value = data;

    }catch(err){
        error.value = (err as Error).message;
    }finally{
        loading.value = false;
    }
}

// Ejecutar al cargar el componente 
onMounted(getUsers);

// Logica de filtrado (se mantiene igual, el poder de computed)
const filteredUsers = computed(()=>{

    return userList.value.filter(u=> u.name.toLowerCase().includes(filter.value.toLowerCase()));

})

</script>

<template>
    <main class="container">
        <h1>Directorio de usuarios</h1>

        <UserFilter 
            v-if="!loading && !error"
            @update:filter="filter = $event"
        />    

        <div v-if="loading" class="mensaje">
            cargando usuarios...
        </div>
        <div v-else-if="error" class="mensaje error">Error: {{ error }}</div>
        <section v-else class="flex">
            <UserCard
                v-for="user in filteredUsers"
                :key="user.id"
                :user="user"
            />
        </section>
        <p v-if="!loading && filteredUsers.length === 0" class="mensaje">
            No hay usuarios que coincidan con "{{ filter }}"
        </p>

    </main>
</template>

<style scoped>
    .container{
        width:1440px;
        margin: 0 auto;
        padding: 20px;
    }
    .flex{
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    .mensaje{
        text-align: center;
        padding: 40px;
        font-size: 1.2rem;
    }
    .error{
        color: #d9534f;
        font-weight: 700;
    }
</style>