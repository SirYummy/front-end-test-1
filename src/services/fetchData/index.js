import fetch from 'isomorphic-fetch'

export default (endpoint) => {
    return fetch(endpoint)
}