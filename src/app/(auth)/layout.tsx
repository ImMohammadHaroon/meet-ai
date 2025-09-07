
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return ( 
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            <div className="w-full max-w-lg mx-auto p-4">
                {children}
            </div>
        </div>
    );
}
 
export default Layout;