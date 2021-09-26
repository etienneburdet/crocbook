<script lang="ts" type="module">
/**
* @type {import'@sveltejs/kit').Load}
*/
export async function load ({ page, fetch, session, context}): Promise<> {
const res = await fetch( url)

if (res.ok) {
#return {
props: {
}
}
}
}
</script>
