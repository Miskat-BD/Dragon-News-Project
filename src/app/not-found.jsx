import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h1 className='text-purple-700 font-extrabold text-5xl'>This is Not Found!</h1>
            <Link href={'/'}>
            <button className='btn bg-purple-700 text-white'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;