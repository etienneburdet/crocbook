<script context="module" lang="typescript">
	/**
 * @type {import'@sveltejs/kit').Load}
 */
export async function load({ page, fetch, session, context }) {
	const res = await fetch('/airtable')
	const json = await res.json()
	const { records: families } = json.json

	if (res.ok) {
		return {
			props: {
				families
			}
		}
	}
}
</script>

<script>
	export let families
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#await families}
	Loading records
{:then}
	{#each families as family (family.id)}
	<h2>{family.fields["Name"]}</h2>
		{JSON.stringify(family.fields)}
		<ul>
			<li>Parents : {typeof family.fields["Parents"]}
				{#each [...family.fields["Parents"]] as parent, index (parent)}
					{parent.id}
				{/each}
			</li>
			<li>{family.fields["Name (from enfants)"]}</li>
		</ul>
	{/each}
{:catch}
 No records
{/await}
