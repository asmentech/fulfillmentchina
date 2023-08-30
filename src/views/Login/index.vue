<template>
    <div>
        <div>loginPage</div>
        <a @click="login">sign in</a>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const login = function() {
    router.push('/dashboard')
}
</script>

<style>

</style>