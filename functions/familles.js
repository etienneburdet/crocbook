const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World LOL!' })
  }
}

export { handler }


// const headers = new Headers({ Authorization: `Bearer ${process.env.AIRTABLE_API}` })
// const request = new Request(
//   'https://api.airtable.com/v0/appGca1zvRwNN4TnZ/Familles',
//   {
//     headers
//   }
// )

// /**
//  * @type {import('@sveltejs/kit').RequestHandler}
//  */
// export async function get ({ params }): Promise<DefaultBody> {
//   const res = await fetch(request)
//   const json = await res.json()

//   return {
//     body: json
//   }
// }
