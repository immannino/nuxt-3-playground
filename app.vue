<template>
    <section>
        <Things />
        <div class="content">
            <h1>Titties</h1>
            <div class="stuff">
                {{ counter }}
            </div>
        </div>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <Tony />
    </section>
</template>
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>