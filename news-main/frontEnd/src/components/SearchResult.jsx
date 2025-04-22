import React from 'react'
import { useSelector } from 'react-redux'
import useCategory from '../hooks/useCategory'
import NewsCard from './NewsCard'

function SearchResult() {
    console.log('hasdjahsdvajhsdv')
    const query = useSelector((store) => store.cache.query)
    const newsData = useCategory(query)
    console.log(newsData)



    return query && newsData && (
        <div className='w-5/6 bg-neutral-900 rounded p-2 m-2 '>
            <h1 className='text-3xl font-bold text-white p-5'>{`Search results for: '${query}'`}</h1>
            <div className=" flex flex-wrap">
                {
                    newsData.map((info, index) =>
                        <NewsCard key={index} info={info} />
                    )
                }
            </div>
        </div>
    )
}

export default SearchResult