import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: "1",
        title: "Breaking News: Major Event Unfolds in the city"
    },
    {
        id: "2",
        title: "Breaking News: New Policy announced by the Goverment"
    },
    {
        id: "3",
        title: "Breaking News: Sports team Wins Championship"
    }
]
const BreakingNews = () => {
    return (
        <div className='container mx-auto px-2 flex justify-between items-center bg-gray-200 gap-4 py-4'>
            <button className='btn bg-red-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => <span key={n.id}>{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;