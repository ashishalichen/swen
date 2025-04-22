import React, { use, useEffect } from 'react'
import { API_KEY } from '../utils/constants'
import useTopHeadline from '../hooks/useTopHeadlines'
import NewsCard from './NewsCard'
import useSearchSuggestion from '../hooks/useSearchSuggestion'

function TopHeadlines() {

  const newsData = useTopHeadline()

  

  return (
    <div className='w-5/6 bg-neutral-900 rounded p-2 m-2 '>
      <h1 className='text-3xl font-bold text-white p-5'>Top Trending</h1>
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

export default TopHeadlines