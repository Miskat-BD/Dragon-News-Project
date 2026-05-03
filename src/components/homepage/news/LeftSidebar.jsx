import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-6">All Categories</h2>

            <ul className="flex flex-col gap-3 ">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id} className={`${activeId == category.category_id && "bg-purple-500 text-white"} rounded-md text-md font-bold text-center `}><Link className='block p-2' href={`/category/${category.category_id}`}>{category.category_name}</Link></li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;