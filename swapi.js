const fetch = require('node-fetch')

const getPeople =  async (fetch, filter) => {

				const getRequest = await fetch(`https://swapi.co/api/${filter}`)
				const data = await getRequest.json()
				return {
								
						  count:data.count,
							result:data.results
				}
}

const  getPeoplePromise = (fetch, filter) => {

		return fetch(`https://swapi.co/api/${filter} `)
		.then(res=>res.json())
	.catch(err => console.error(err))
}

module.exports = {
	getPeople,
  getPeoplePromise
}