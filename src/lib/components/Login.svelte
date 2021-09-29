<script lang="ts">
	import { session } from '$app/stores'

	const auth = () => {
		$session.isLoggedIn = true
	}
</script>

<button on:click={auth}>Login</button>

<style>
    /* your styles go here */
</style>