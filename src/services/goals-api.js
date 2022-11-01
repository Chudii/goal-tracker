import axios from 'axios'

const baseURL = 'http://localhost:3001/goals'

// ENDPOINTS

export const getGoals = () => {
    const response = axios.get(baseURL)
    return response
}

export const getGoal = (id) => {
    const URL = baseURL + `/${id}`
    const response = axios.get(URL)
    return response
}

export const createGoal = (goal) => {
    const response = axios.post(baseURL, goal)
    return response
}

export const editGoal = (id, updatedGoal) => {
    const URL = baseURL + `/${id}`
    const response = axios.put(URL, updatedGoal)
    return response
}

export const deleteGoal = async (id) => {
    const URL = baseURL + `/${id}`
    const response = await axios.delete(URL).catch(err => {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
        console.log(err.config)
    })
    return response
}