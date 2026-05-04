import { getNewsDetailsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

export const generateMetadata = async ({ params, searchParams }) => {
    const { id } = await params;
    // console.log(id, 'details meta');
    const news = await getNewsDetailsId(id);
    return {
        title: news.title,
        description: news.details,
    }

}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, 'params');
    const news = await getNewsDetailsId(id);
    // console.log(news, 'news details');
    return (
        <div className='max-w-4xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* Author Info */}
                    <div className="flex justify-between bg-slate-200 p-2">
                        <div className="flex gap-2">
                            <Image className='rounded-full' src={news.author?.img} alt='author-img' width={40} height={40}></Image>
                            <div className="">
                                <h1 className='font-semibold'>{news.author?.name}</h1>
                                <p className='text-xs'>{news.author?.published_date}</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <CiShare2 />
                            <CiBookmark />
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={400}
                            height={400}
                        />

                    </figure>
                    <p className=''>{news.details}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h1 className='flex gap-2 items-center'><FaStar className='text-yellow-300' /> {news.rating.number}</h1>
                            <h1 className='flex gap-2 items-center'><FaEye /> {news.total_view}</h1>
                        </div>
                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn'>All news in this category</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;