import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 py-10">
            <div className="w-full max-w-[1000px] mx-auto p-6">
                {children}
            </div>
        </div>
    );
}
 
export default Layout;