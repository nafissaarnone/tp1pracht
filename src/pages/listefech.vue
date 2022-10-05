<script setup lang="ts">
import Card from "../components/card.vue";

const getmaison = await fetch("./maison.json");

const maison = await getmaison.json();


</script>
<template>
    <div class="flex flex-row ">

    
    <div>
        <Card v-for="m in maison" :key="m" v-bind="m"></Card>

    </div>
    <div>
        <Card v-for="m in maison" :key="m" v-bind="m"></Card>



    </div>
    </div>
</template>