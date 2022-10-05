<script setup lang="ts">

import { supabase } from "../supabase";

import Card from "../components/card.vue";

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

let { data: maison, error } = await supabase.from("maison").select("*");
console.log(maison);
</script>

<template>
  <div>
    
      <div v-for="m in maison" :key="m">
      <Card v-bind="m"></Card>
    </div>
  
  </div>
</template>
