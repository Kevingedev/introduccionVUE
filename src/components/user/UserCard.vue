<script setup lang="ts">
    import type {User} from '../../types'

    defineProps<{user: User}>()

</script>

<template>
    <div class="card">
        <div class="avatar">{{ user.avatar }}</div>
        <h3>{{ user.name }}</h3>
        <p>{{ user.position }}</p>
    </div>
</template>

<style scoped>
.card {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 1.25rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7c3aed, #06b6d4, #7c3aed);
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
        0 12px 40px rgba(124, 58, 237, 0.25),
        0 4px 16px rgba(0, 0, 0, 0.3);
    border-color: rgba(124, 58, 237, 0.3);
}

.card:hover::before {
    opacity: 1;
    animation: shimmer 2s linear infinite;
}

.avatar {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #7c3aed, #06b6d4);
    border-radius: 50%;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
    margin-bottom: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover .avatar {
    transform: scale(1.1);
    box-shadow: 0 6px 24px rgba(124, 58, 237, 0.5);
}

h3 {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

p {
    color: rgba(241, 245, 249, 0.55);
    font-size: 0.875rem;
    margin: 0;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
</style>