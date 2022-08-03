module.exports = class gameError extends Error {
    constructor(...data) {
        super(...data)

        this.name = '[gameError]'
    }
}