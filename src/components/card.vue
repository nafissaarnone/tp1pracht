<script setup lang="ts">
import bed from './icones/bath.vue'
import bath from './icones/bed.vue'
import size from './icones/size.vue'
import heart from './icones/heart.vue';

defineProps({
    nom: String,
    prix: Number,
    favori: Boolean,
    image: String,
    nbrSDB: Number,
    nbrBED: Number,
});

</script>
<template>
    <figure class="m-20 w-90 max-w-24 ">
        <img class="w-full rounded-t-lg" v-bind:src="image" alt="" />
        <figcaption class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7">
            <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
            <address class="not-italic text-gray-500">{{ nom }}</address>
            <div class="order-first flex items-center">
                <div class="text-2xl text-indigo-500">
                    ${{ prix?.toLocaleString("en-US") }}
                </div>
                <div class="text-gray-500">/mois</div>
            </div>
            <hr class="my-2 border-t-2 border-indigo-100" />
            <div class="flex justify-between text-sm">
                <div>
                    <bed class="inline-block align-top" /> 4 Beds
                </div>

                <div>
                    <size class="inline-block align-top" /> {{ nbrBED }}
                </div>
            </div>
            <div class="
            absolute
            top-7
            right-4
            grid
            h-12
            w-12
            place-items-center
            rounded-full
            border-2 border-indigo-100
          ">
                <heart :class="{ 'fill-red-400': favori }" />
            </div>
        </figcaption>
    </figure>
</template>