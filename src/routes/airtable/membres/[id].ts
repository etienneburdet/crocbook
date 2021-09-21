import { API_KEY } from '$lib/env'
import type { DefaultBody } from '@sveltejs/kit/types/endpoint'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get ({ params }): Promise<DefaultBody> {
  const { id } = params

  const headers = new Headers({ Authorization: `Bearer ${API_KEY}` })
  const request = new Request(
        `https://api.airtable.com/v0/appGca1zvRwNN4TnZ/Personnes/${id}`,
        {
          headers
        }
  )

  const res = await fetch(request)
  const json = await res.json()

  return {
    body: json
  }
}
