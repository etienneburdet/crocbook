<script lang="ts" context="module">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit'

  export async function load ({
    page,
    fetch,
    session,
    context
  }: LoadInput): Promise<LoadOutput> {
    const { isLoggedIn } = session
    return {
      props: {
        isLoggedIn
      }
    }
  }
</script>

<script lang="ts">
  import { session } from '$app/stores'
  import { onMount } from 'svelte'
  export let isLoggedIn: boolean

  onMount(() => {
    $session.isLoggedIn = false
  })
  const login = () => {
    $session.isLoggedIn = true
  }
</script>
{#if isLoggedIn}
  <slot />
{:else}
  <button on:click={login}>Login</button>
{/if}

<style>
  /* your styles go here */
</style>
