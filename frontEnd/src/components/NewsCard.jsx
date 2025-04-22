import React from 'react';
import { format } from 'date-fns';

function NewsCard({ info }) {
    const { urlToImage, title, source, publishedAt } = info;
    const date = format(new Date(publishedAt), "MMMM d, yyyy h:mm a")

    if (!urlToImage) return null;

    return (

        <div className='w-80 bg-black rounded-lg shadow-md overflow-hidden text-white p-2 m-2 border border-transparent hover:border-white transition duration-300\'>
            <img
                className='w-80 h-48 object-cover rounded-lg'
                src={urlToImage}
                alt={title || 'News Image'}
            />
            <div className='p-3'>
                <h1 className='text-sm'>{source?.name}</h1>
                <p className='text-base font-semibold mt-1'>{title}</p>
            </div >
            <div className='justify-items-end align-bottom'>
                <p>{date}</p>
            </div>
        </div>

    );
}

export default NewsCard;
