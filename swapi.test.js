const swapi = require('./swapi')
const fetch = require('node-fetch')


//First way, passing a done callback
it('must return a list of people', (done)=>{
		
			expect.assertions(1)
			swapi.getPeople(fetch, 'people')
				.then(data => {
			expect(data.count).toEqual(87)
			done()
})

})

//second way return the promise, and jest is smart enough to understand it has to wait

it('must return a list of people - promise', () => {

					expect.assertions(2)
		return swapi.getPeoplePromise(fetch, 'people')
					.then( data => {
								expect(data.count).toEqual(87)
                  expect(data.results.length).toBeGreaterThan(5)
					})

})



it('get people returns count and results', ()=>{

   const mockFetch  = jest.fn()
										.mockReturnValue(Promise.resolve({

												json: ()=>Promise.reslove({
															
											count:87,
											results:[0,1,3,4,5]
										})
									}))

	return swapi.getPeoplePromise(mockFetch, 'people')
						 .then(data => {

                expect(mockFetch.mock.calls.length).toBe(1)
})

})