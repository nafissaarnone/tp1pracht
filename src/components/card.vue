<script setup lang="ts">
    import bed from './icones/bath.vue'
    import bath from './icones/bed.vue'
    import size from './icones/size.vue'
    import heart from './icones/heart.vue'
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
        <figure>
            <img class="rounded-t-lg" :src="image" alt="" />
        <figcaption class="flex flex-col relative rouned-b-lg border-2 border-t-0 px-5 py-7">
            <h3 class="text-2xl text-gray-900">{{nom}}</h3>
            <div class="flex items-center order-first">
                <div class="text-2xl text-indigo-500">${{prix}}</div>
                <div class="text-gray-500">/mois</div>
            </div>
            <hr class="my-2 border-indigo-100 border-t-2"/>
            <div class="flex justify-between text-sm">
                <div><bed class="inline-block align-top"/>{{nbrBED}} Beds</div>        </div>
            <div class='w-12 h-12 border-2 border-indigo-100 rounded-full absolute top-7 right-5 grid place-items-center'>
                <heart :class="{'fill-red-300': favori}" />
            </div>
        </figcaption>
        </figure>
    </template>