<script context="module" lang="ts">
  import type { LoadInput } from '@sveltejs/kit'
  type Membre = {
    nom: string
    email?: string
    photo?: {
      url: string
    }
  }
  /**
   * @type {import'@sveltejs/kit').Load}
   */
  export async function load ({
    page,
    fetch,
    session,
    context
  }: LoadInput): Promise<{ props: { membre: Membre } } | undefined> {
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
  export let membre: Membre
</script>

{#await membre}
  Loading records
{:then}
  <h2>{membre.nom}</h2>
  {#if membre.photo}
    <img src={membre.photo[0].url} alt="" />
  {/if}
{:catch}
  No records
{/await}
