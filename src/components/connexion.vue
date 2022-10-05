<script setup lang="ts">
    import { ref } from "@vue/reactivity";
    import { supabase, user } from "@/supabase";
    
    async function signIn(data, node) {
      const { user, error } = await (nvlUtilisateur.value
        ? supabase.auth.signUp(data)
        : supabase.auth.signIn(data));
      if (error) {
        console.error(error);
        node.setErrors([error.message]);
      }
    }
    const nvlUtilisateur = ref(false);
    </script>
    
    <template>
    
      <div class="">
        <button  class="" v-if="user" @pointerdown="supabase.auth.signOut( ) ">
          Se déconnecter ({{ user.email }})
        </button>
        <FormKit
          v-else
          type="form"
          :submit-attrs="{
            classes: {
              input:
              'bg-white',
            },
          }"
          :submit-label="nvlUtilisateur ? 'Sinscrire' : 'Se connecter'"
          @submit="signIn"
        >
          <FormKit name="email" label="Votre eMail" type="email" />
          <FormKit name="password" label="Mot de passe" type="password" />
          <formKit
            label="Nouvel utilisateur ?"
            class="flex flex-row"
            name="nvlUtilisateur"
            type="checkbox"
            v-model="nvlUtilisateur"
          />
        </FormKit>
      </div>
    </template>