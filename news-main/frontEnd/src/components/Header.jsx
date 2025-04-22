import React, { useState } from 'react'
import useSearchSuggestion from '../hooks/useSearchSuggestion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchQuery } from '../utils/cacheSlice'

function Header() {
    const [search, setSearch] = useState('')
    const [showSuggestion, setShowSuggestion] = useState(true)
    const suggestionData = useSearchSuggestion(search)
    const dispatch = useDispatch()

    console.log('ahahahah',search)

    function query(q){
        dispatch(searchQuery(q))
    }

    return (
        <div className='flex flex-row justify-between px-10 h-16 top-0 bg-black relative'>
            <h1 className='text-5xl font-bold text-red-500 font-stretch-200% p-2 w-1/4'>SWEN</h1>

            {/* Wrapper for input and suggestions */}
            <div className='flex flex-row items-center w-3/4 justify-center relative'>
                <div className="relative w-1/2">
                    <input
                        type='text'
                        placeholder='What do you want to know today?'
                        className='bg-neutral-800 text-white h-10 w-full px-4 p-2 rounded-l-4xl'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setShowSuggestion(true)
                        }}
                        onBlur={() => setTimeout(() => setShowSuggestion(false), 100)}
                    />
                    {showSuggestion && suggestionData?.length > 0 && (
                        <ul className="absolute bg-black text-white w-full mt-1 rounded-lg shadow-lg z-30">
                            {suggestionData.map((suggest, index) => (
                                <li key={index} className="p-2 hover:bg-neutral-700 cursor-pointer">
                                    <Link
                                        to='/search'
                                        className='block w-full h-full'
                                        onClick={() => {
                                            setSearch(suggest)
                                            setShowSuggestion(false)
                                            query(suggest)
                                        }}
                                    >
                                        {suggest}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className='bg-red-500 text-white h-10 px-4 p-2 rounded-r-4xl'>Search</button>
            </div>
        </div>
        
    )

    
}

export default Header
