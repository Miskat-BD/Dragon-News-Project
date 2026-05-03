import BreakingNews from '@/components/shared/BreakingNews';
import Headers from '@/components/shared/Headers';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Headers />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;