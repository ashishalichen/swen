import { useEffect, useState } from "react"
import { SUGGESTION_API } from "../utils/constants"

function useSearchSuggestion(keyword) {
    const [suggestions, setSuggetions] = useState('')
    const baseUrl = 'https://swen.onrender.com/search'

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