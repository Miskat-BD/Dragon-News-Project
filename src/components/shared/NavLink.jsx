"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    // console.log('pathname:', pathName);
    return (
        <div>
            <Link className={`${isActive ? 'border-b-2 border-b-purple-600' :''}`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;