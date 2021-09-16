<script type="text/javascript" lang="typescript">
	const fetchAirtable = async () => {
		const res = await fetch('/airtable')
		const json = await res.json()
		console.log(json)
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button type="button" name="button" on:click={fetchAirtable}>fetch Airtable</button>
