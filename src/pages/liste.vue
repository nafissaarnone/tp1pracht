<script setup lang="ts">
import Card from "../components/card.vue";

const maison = {
    nom: "maison untel",
    prix: 5,

}

</script>
<template>
    <div>
        <Card nom="maison untel" :prix="800" image="maison6.jpeg" />
        <Card v-bind:prix="maison.prix" />

    </div>
    <div>
        <Card nom="maison untel" :prix="5" image="maison7.jpeg" />
        <Card v-bind:prix="maison.prix" />

    </div>
    <div>
        <Card nom="maison untel" :prix="5" image="maison8.jpeg" />
        <!--<Card v-bind:prix="maison.prix" />-->

    </div>
</template>