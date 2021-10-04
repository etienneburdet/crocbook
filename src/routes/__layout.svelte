<script lang="ts">
  import Login from '$lib/components/Login.svelte'
  import { session } from '$app/stores'
  import { auth } from '$lib/stores'

  const logUser = () => {
    console.log($auth.currentUser())
  }
</script>

<Login/>
{#if $session.isLoggedIn}
  <slot />
{/if}
<style>
  /* your styles go here */
</style>
