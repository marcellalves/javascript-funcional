const { curryingFactoryMethod } = require('./currying')

describe('Currying dependency injection', () => {
    test('Should call injected function', () => {
        const curryingService = {
            create(obj) {

            }
        }
        const request = { body: {} }
        const respose = curryingFactoryMethod({ curryingService })(request)
        expect(respose).toBe(200)
    })
})
