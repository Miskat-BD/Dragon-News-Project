import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, 'paramsres');
    const categories = await getCategories();
    // console.log(categories.news_category, 'categories');
    const news = await getNewsByCategoryId(id)
    // console.log(news, 'news');
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
            <div className=" col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6">
               <h2 className="text-lg font-bold mb-6">News by Catgories</h2>
                <div className="space-y-3">
                    {
                        news.length > 0
                       ? news.map(n => {
                            return <NewsCard key={n._id} news={n} className="p-2 border rounded-md ">{n.title}</NewsCard>
                        }) : <h2 className='font-bold text-4xl'>No News Found !</h2>
                    }
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;