<script lang="ts">
	/* global netlifyIdentity */
	import { onMount } from 'svelte'
</script>

<svelte:head>
	<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<button on:click={() => netlifyIdentity.open('login')}>Login</button>

<style>
    /* your styles go here */
</style>