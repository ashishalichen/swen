import { useEffect, useState } from "react"
import { SUGGESTION_API } from "../utils/constants"

function useSearchSuggestion(keyword) {
    const [suggestions, setSuggetions] = useState('')
    const baseUrl = 'https://5000-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/search' || 'http://localhost:5000/search'

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchSuggestion()
        }, 500);

        return () => clearTimeout(timer)

    }, [keyword])


    async function fetchSuggestion() {
        const data = await fetch(`${baseUrl}?q=${keyword}`,{
            credentials:'include'
        })
        const json = await data.json()
        setSuggetions(json[1])

        return json[1]
    }

    return suggestions
}

export default useSearchSuggestion