<script context="module" lang="ts">
import type { LoadInput } from '@sveltejs/kit'


/**
   * @type {import'@sveltejs/kit').Load}
   */
export async function load ({ page, fetch, session, context }: LoadInput) {
  const { id } = page.params
  const res = await fetch(`/airtable/membres/${id}`)
  const { fields: membre } = await res.json()

  if (res.ok) {
    return {
      props: {
        membre
      }
    }
  }
}
</script>

<script lang="ts">
  export let membre
</script>

{#await membre}
  Loading records
{:then}
  <h2>{membre.nom}</h2>
  {membre}
{:catch}
  No records
{/await}
