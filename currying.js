const { curryingService } = require('./currying-service')
const request = require('./request')

const curryingFactoryMethod = (dependecies) => (request) => {
    const { curryingService } = dependecies
    try {
        const { body } = request
        curryingService.create(body)
        return 200
    } catch (error) {
        return 500
    }
}

const currying = curryingFactoryMethod({ curryingService })(request)

module.exports = {
    curryingFactoryMethod,
    currying
}
