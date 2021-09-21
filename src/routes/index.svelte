<script context="module" lang="ts">
import type { LoadOutput } from '@sveltejs/kit'


/**
   * @type {import'@sveltejs/kit').Load}
   */
export async function load ({ page, fetch, session, context }) {
  const res = await fetch('/airtable/familles')

  const { records: families } = await res.json()

  if (res.ok) {
    return {
      props: {
        families
      }
    }
  }
}
</script>

<script lang="ts">
  export let families
</script>

{#await families}
  Loading records
{:then}
  {#each families as family (family.id)}
    <h2>{family.fields.nom}</h2>
    {JSON.stringify(family.fields)}
    <ul>
      {#if family.fields.membres}
        {#each family.fields.membres as membre, index (membre)}
          <li>
            <a href="/membres/{membre}"
              >{family.fields.noms_membres[index]}</a
            >
          </li>
        {/each}
      {/if}
    </ul>
  {/each}
{:catch}
  No records
{/await}
