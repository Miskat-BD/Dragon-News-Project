'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data, 'google login');
    }
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data, 'github login');
    }
    return (
        <div>
            <h2 className='text-lg font-bold mb-6'>Login With</h2>
            <div className="flex flex-col gap-2">
                <button className='btn text-sky-500 border-sky-500' onClick={handleGoogleSignin}><FaGoogle /> Login With Google</button>
                <button className='btn' onClick={handleGithubSignin}><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;