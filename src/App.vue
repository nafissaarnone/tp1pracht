<template>
  <nav class="bg-black p-5">
    
    <div class=" flex justify-center">

    
    <ul class="bg-pink-400 rounded-lg w-7/12 text-center">
      <li>
        <router-link class=" underline" to="/">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class=" underline" to="/simple">
          lien vers
          <code class="font-mono">page simple</code>
        </router-link>
      </li>
      <li>
        <router-link class=" underline" to="/liste">
          lien vers
          <code class="font-mono">page liste</code>
        </router-link>

      </li>
      <li>
        <router-link class=" underline" to="/listefech">
          lien vers
          <code class="font-mono">page liste fech</code>
        </router-link>

      </li>
      <li>
        <router-link class=" underline" to="/edit/new">
          lien vers
          <code class="font-mono">page new.vue</code>
        </router-link>

      </li>
      <li>
        <router-link class=" underline" to="/list-supabase.vue">
          lien vers
          <code class="font-mono">liste-supabase</code>
        </router-link>

      </li>

      <li>
        <router-link class=" underline" to="/connecter">
          lien vers
          <code class="font-mono">connexion</code>
        </router-link>

      </li>
    </ul>
  </div>
  </nav>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" />

  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>


</template>

<script setup lang="ts">

</script>
