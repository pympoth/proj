<script setup>
const props = defineProps([`open`])
const opened = ref(props.open)
</script>

<template>
<div class="modal" v-if="opened" v-on:click="opened = !opened"> 
    <div class="message" v-on:click.stop>
        <p class="name">{{ props.name }}</p>
        <span class="close" v-on:click="opened = !opened">❌</span>
        <slot></slot>
    </div>
    </div>   
</template>
<style scoped>

.modal{
    position: absolute;
    background: #0000005c;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.message{
    background: #ffffff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: -2px 2px 25px 10px #9b54ff;
    
}
</style>