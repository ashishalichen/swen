import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCache } from "../utils/cacheSlice";

function useTopHeadline() {
    const [apiData, setApiData] = useState([])
    const dispatch = useDispatch()
    const cache = useSelector((store) => store.cache.cache)
    const baseUrl = 'https://5000-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/headlines'||'http://localhost:5000/headlines'

    useEffect(() => {

        if (cache['Headlines']) {
            setApiData(cache['Headlines'])
        }
        else {
            fetchData()
        }
    }, [API_KEY])

    async function fetchData() {
        const data = await fetch('https://5000-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/headlines', {
            credentials: 'include'
          });
        const json = await data.json()
        setApiData(json.articles)

        dispatch(setCache({ ['Headlines']: json.articles }))
    }

    return apiData
}

export default useTopHeadline