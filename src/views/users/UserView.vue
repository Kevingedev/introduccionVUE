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
        const response = await fetch('http://localhost:5000/users');
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
        <div class="glass-container">
            <div class="header-section">
                <h1>Directorio de usuarios</h1>
                <p class="subtitle">Gestiona y explora tu equipo</p>
            </div>

            <UserFilter 
                v-if="!loading && !error"
                @update:filter="filter = $event"
            />    

            <div v-if="loading" class="mensaje loading-pulse">
                <span class="spinner"></span>
                Cargando usuarios...
            </div>
            <div v-else-if="error" class="mensaje error">
                <span class="error-icon">⚠️</span> Error: {{ error }}
            </div>
            <section v-else class="grid">
                <UserCard
                    v-for="(user, index) in filteredUsers"
                    :key="user.id"
                    :user="user"
                    :style="{ animationDelay: `${index * 0.07}s` }"
                    class="card-animated"
                />
            </section>
            <p v-if="!loading && filteredUsers.length === 0 && !error" class="mensaje no-results">
                No hay usuarios que coincidan con "<strong>{{ filter }}</strong>"
            </p>
        </div>
    </main>
</template>

<style scoped>
    .container {
        --accent: #7c3aed;
        --accent-glow: rgba(124, 58, 237, 0.4);
        --glass-bg: rgba(255, 255, 255, 0.05);
        --glass-border: rgba(255, 255, 255, 0.1);
        --text-primary: #f1f5f9;
        --text-secondary: rgba(241, 245, 249, 0.55);

        width: 100%;
        /* max-width: 1440px; */
        margin: 0 auto;
        padding: 1.5rem 8rem 2.5rem 8rem;
        
        /* FIX: Altura controlada y scroll */
        height: calc(100vh - 120px); /* Ajuste para el padding del #app y sidebar */
        overflow-y: auto;
        overflow-x: hidden;
        
        background: linear-gradient(135deg, #0f0b1e 0%, #1a1145 50%, #0d1b2a 100%);
        color: var(--text-primary);
        /* border-radius: 1.5rem; */

        /* Custom Scrollbar */
        scrollbar-width: thin;
        scrollbar-color: var(--accent) transparent;
    }

    .container::-webkit-scrollbar {
        width: 6px;
    }
    .container::-webkit-scrollbar-track {
        background: transparent;
    }
    .container::-webkit-scrollbar-thumb {
        background: var(--glass-border);
        border-radius: 10px;
    }
    .container::-webkit-scrollbar-thumb:hover {
        background: var(--accent);
        box-shadow: 0 0 10px var(--accent-glow);
    }

    /* ── Glass Container ───────────────────────── */
    .glass-container {
        background: var(--glass-bg);
        max-width: 1440px;
        margin: 0 auto;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: 1.5rem;
        padding: 2.5rem;
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        animation: containerFadeIn 0.6s ease-out;
        min-height: min-content; /* Asegura que el contenido dicte el tamaño interno */
    }

    /* ── Header ────────────────────────────────── */
    .header-section {
        margin-bottom: 2rem;
        text-align: center;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        background: linear-gradient(135deg, #e0e7ff, #c4b5fd, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: none;
        filter: drop-shadow(0 0 24px var(--accent-glow));
        margin-bottom: 0.4rem;
    }

    .subtitle {
        color: var(--text-secondary);
        font-size: 1rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    /* ── Grid de Cards ─────────────────────────── */
    .grid {
        margin-top: 1.8rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1.5rem;
    }

    /* ── Card entry animation ──────────────────── */
    .card-animated {
        animation: fadeInUp 0.5s ease-out both;
    }

    /* ── Mensajes ──────────────────────────────── */
    .mensaje {
        text-align: center;
        padding: 3rem 2rem;
        font-size: 1.1rem;
        color: var(--text-secondary);
        background: rgba(255, 255, 255, 0.03);
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.06);
        margin-top: 1.5rem;
        animation: fadeIn 0.5s ease-out;
    }

    .loading-pulse {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        animation: pulse 2s ease-in-out infinite;
    }

    .spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    .error {
        color: #f87171;
        font-weight: 600;
        border-color: rgba(248, 113, 113, 0.2);
        background: rgba(248, 113, 113, 0.06);
        box-shadow: 0 0 20px rgba(248, 113, 113, 0.1);
    }

    .error-icon {
        font-size: 1.3rem;
    }

    .no-results strong {
        color: var(--accent);
    }

    /* ── Keyframes ─────────────────────────────── */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @keyframes containerFadeIn {
        from {
            opacity: 0;
            transform: translateY(16px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* ── Responsive ────────────────────────────── */
    @media (max-width: 768px) {
        .container {
            padding: 1.5rem 1rem;
        }
        .glass-container {
            padding: 1.5rem;
            border-radius: 1rem;
        }
        h1 {
            font-size: 1.8rem;
        }
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>