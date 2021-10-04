<script lang="ts">
	import { auth } from '$lib/stores'
	import { onMount } from 'svelte'
	import { session } from '$app/stores'

	const closeModalAndSetLogin = () => {
	  $auth.close()
	  $session.isLoggedIn = true
	}

	onMount(async () => {
	  const netlifyIdentity = await import('netlify-identity-widget')
	  $auth = netlifyIdentity

	  $auth.init({
	    container: '#login-menu',
	    local: 'fr'
	  })

	  $auth.on('login', closeModalAndSetLogin)
	})
</script>

<div id="login-menu"></div>

<style>
    /* your styles go here */
</style>