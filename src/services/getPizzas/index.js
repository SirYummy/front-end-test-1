import { fetchData } from '../fetchData'

export const getPizzas = () => {
    const pizzaEndpoint = 'http://localhost:8080/pizzas.json'
    return fetchData(pizzaEndpoint)
            .then((pizzas) => {
                
                return pizzas
            })
            .catch((error) => {
                
                return error
            })
}