import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    // console.log(news, 'newscard');
    return (
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
                <p className='line-clamp-3'>{news.details}</p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <h1 className='flex gap-2 items-center'><FaStar className='text-yellow-300'/> {news.rating.number}</h1>
                        <h1 className='flex gap-2 items-center'><FaEye/> {news.total_view}</h1>
                    </div>
                    <Link href={`/news/${news._id}`}>
                    <button className='btn'>See Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;