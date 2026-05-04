'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    // console.log(session, 'session');
    return (
        <div className='container mx-auto flex justify-between items-center mt-8'>
            <div className=""></div>
            <ul className='flex justify-between items-center gap-2 text-[#706F6F]'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            {isPending ? <span className="loading loading-spinner loading-lg"></span> : user ? <div className="flex justify-between items-center gap-2">
                <h1>Hello, {user.name}</h1>
                <Image src={user.image || userAvatar} alt='user img' width={40} height={40}></Image>
                <button className='btn btn-primary' onClick={async()=> await authClient.signOut()}>Logout</button>
            </div> : <Link href={'/login'}> <button className='btn btn-primary'>Login</button></Link>}
        </div>
    );
};

export default Navbar;