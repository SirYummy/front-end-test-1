import 'isomorphic-fetch'

export const fetchData = (endpoint) => { 
    
    return fetch(endpoint)
        .then(response => response)
        .then(data => data)
        .catch((error) => error)
        
}