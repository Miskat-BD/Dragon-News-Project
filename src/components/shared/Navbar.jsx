import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-8'>
            <div className=""></div>
            <ul className='flex justify-between items-center gap-2 text-[#706F6F]'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className="flex justify-between items-center gap-2">
                <Image src={userAvatar} alt='user img' width={40} height={40}></Image>
                <button className='btn btn-primary'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;