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
    <div class="search-wrapper">
        <input type="text" placeholder="Buscar por nombre..." @input="onInput">
    </div>
</template>


<style scoped>
    .search-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .search-wrapper::before {
        content: '🔍';
        position: absolute;
        left: calc(50% - 200px + 1rem);
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        pointer-events: none;
        z-index: 1;
        filter: grayscale(1) brightness(0.7);
        transition: filter 0.3s ease;
    }

    .search-wrapper:focus-within::before {
        filter: grayscale(0) brightness(1);
    }

    input {
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 0.9rem 1.2rem 0.9rem 2.8rem;
        width: 100%;
        max-width: 400px;
        color: #f1f5f9;
        font-size: 0.95rem;
        letter-spacing: 0.02em;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
    }

    input::placeholder {
        color: rgba(241, 245, 249, 0.35);
    }

    input:focus {
        border-color: rgba(124, 58, 237, 0.5);
        box-shadow:
            0 0 0 3px rgba(124, 58, 237, 0.15),
            0 4px 16px rgba(124, 58, 237, 0.2);
        background: rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 768px) {
        .search-wrapper::before {
            left: calc(1rem);
        }
        input {
            max-width: 100%;
        }
    }
</style>
