import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCache } from "../utils/cacheSlice";

function useCategory(category) {

    const [apiData, setApiData] = useState([])
    const dispatch = useDispatch()
    const cache = useSelector((store) => store.cache.cache)
    const baseUrl = 'https://5000-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/everything'||'http://localhost:5000/everything'

    useEffect(() => {
        if (cache[category]) {
            setApiData(cache[category])
        }
        else {
            fetchData()
        }

    }, [API_KEY,category])

    async function fetchData() {
        const data = await fetch(`${baseUrl}?q=${category}`, {
            credentials: 'include'
          });
        const json = await data.json()
        setApiData(json.articles)

        dispatch(setCache({ [category]: json.articles }))

    }

    return apiData
}

export default useCategory