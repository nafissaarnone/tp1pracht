<script setup lang="ts">
import Card from "../components/card.vue";

const maison = {
    nom: "maison untel",
    prix: 5,

}

</script>
<template >
    <div class="flex flex-row ">
        <Card nom="maison untel" :prix="5" image="maison-1.jpg" />


    </div>

</template>