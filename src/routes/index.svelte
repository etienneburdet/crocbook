<script context="module" lang="ts">
import type { LoadInput, LoadOutput } from '@sveltejs/kit'


/**
   * @type {import'@sveltejs/kit').Load}
   */
// export async function load ({ page, fetch, session, context }): Promise<LoadOutput> {
//   const res = await fetch('/airtable')
//   const json = await res.json()
//   const { json: families } = json

//   if (res.ok) {
//     return {
//       props: {
//         families
//       }
//     }
//   }
// }
</script>

<script lang="ts">
  export let families = []
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{#await families}
  Loading records
{:then}
  {#each families as family (family.id)}
    <h2>{family.fields.Name}</h2>
    {JSON.stringify(family.fields)}
    <ul>
      Parents :
      {#if family.fields.Parents}
        {#each family.fields.Parents as parent, index (parent)}
          <li>
            <a href="/people/{parent}"
              >{family.fields['Name (from Parents)'][index]}</a
            >
          </li>
        {/each}
      {/if}
      <li>{family.fields['Name (from enfants)']}</li>
    </ul>
  {/each}
{:catch}
  No records
{/await}
