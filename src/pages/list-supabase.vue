<script setup lang="ts">

import { createClient } from@supabase/supabase-js

import { supabase } from "../supabase";
import Card from "../components/card.vue";
import FormulaireOffreMaison from "../components/FormulaireOffreMaison.vue";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

let { data: maison, error } = await supabase
    .from('maison')
    .select('*')
console.log(maison);

</script>

<template>
    <div>
        <Card v-for="m in maison" :key="m" v-bind:="m"></Card>
        <FormulaireOffreMaison></FormulaireOffreMaison>
    </div>

</template>