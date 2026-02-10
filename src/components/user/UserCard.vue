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
.card{
    border: 1px solid #d4d4d4;
    padding: 20px;
    width: 20%;
    border-radius: 1rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out ;
}
.avatar{
    width: 50px;
    padding: 10px;
    text-align: center;
    background-color: #004f6e;
    border-radius: 50%;
    color: white;
    font-weight: 700;
}

.card:hover{
    transform: translateY(-3px);
}
</style>