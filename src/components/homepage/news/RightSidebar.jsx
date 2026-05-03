import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='text-lg font-bold mb-6'>Login With</h2>
            <div className="flex flex-col gap-2">
                <button className='btn text-sky-500 border-sky-500'><FaGoogle /> Login With Google</button>
                <button className='btn'><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;