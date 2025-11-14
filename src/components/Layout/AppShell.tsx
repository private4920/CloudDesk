import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

interface AppShellProps {
  showSidebar?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({ showSidebar = true }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      
      <div className="flex">
        {showSidebar && <Sidebar />}
        
        <main className={`flex-1 ${showSidebar ? 'lg:ml-60' : ''}`}>
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
