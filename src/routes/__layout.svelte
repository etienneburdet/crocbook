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
  import Login from '$lib/components/Login.svelte'

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
  <Login />
{/if}

<style>
  /* your styles go here */
</style>
