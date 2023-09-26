import dynamic from "next/dynamic";
import React, { ReactNode } from 'react';
const DynamicNav = dynamic(() => import('@/Components/NavBer/Navber'));
const DynamicFooter = dynamic(() => import("@/Components/Footer/Footer"));

const RootLayouts: React.FC< {children:ReactNode}>  = ({children}) => {
    return (
        <div>
            <DynamicNav />
            {children}
            <DynamicFooter />
        </div>
    );
};

export default RootLayouts;
