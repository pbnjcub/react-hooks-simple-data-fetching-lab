// create your App component here
import React, { useState, useEffect } from "react"

function App() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((json) => {
            setData(json)
            setIsLoaded(true)   
        })
    }, [])

    console.log(data)

    if (!isLoaded) return <p>Loading...</p>

    return <img src={data.message} alt="A Random Dog" />
}

export default App