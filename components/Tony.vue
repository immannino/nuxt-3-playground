<script setup>
const counter = useState('counter')
</script>
<template>
    <h1>Stuff: {{ counter }}</h1>
</template>
<style scoped>
    h1 {
        font-size: 100rem;
        color: red;
    }
</style>