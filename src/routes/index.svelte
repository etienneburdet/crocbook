<script context="module" lang="ts">
  type Family = {
    id: string
    fields: {
      nom: string
      dossier: string
      membres?: string[]
      nomsMembres?: string[]
      adresse?: string
    }
  }
  type Families = Family[]

  /**
   * @type {import('@sveltejs/kit').Load}
   */
export async function load ({ page, fetch, session, context }): Promise<{ props: { families: Families } }|undefined> {
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
// eslint-disable-next-line no-multiple-empty-lines
<script lang="ts">
  export let families: Families
</script>

{#await families}
  Loading records
{:then}
  {#each families as family (family.id)}
    <h2>{family.fields.nom}</h2>
    {JSON.stringify(family.fields)}
    <ul>
      {#if family.fields.membres && family.fields.nomsMembres}
        {#each family.fields.membres as membre, index (membre)}
          <li>
            <a href="/membres/{membre}"
              >{family.fields.nomsMembres[index]}</a
            >
          </li>
        {/each}
      {/if}
    </ul>
  {/each}
{:catch}
  No records
{/await}
