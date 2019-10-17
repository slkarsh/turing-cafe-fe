export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
        .then(res => res.json())
}

export const postRes = (newRes) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(newRes),
        headers: {
            'Content-type': 'application/json'
        }
    }

    return fetch('http://localhost:3001/api/v1/reservations', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
}  