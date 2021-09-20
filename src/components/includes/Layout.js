import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen w-full h-full bg-warmGray-100 ">
      <Header />
      <Sidebar />
      <div className="lg:fixed relative lg:left-64 lg:top-24 top-20 lg:ml-16 lg:mr-8 p-4 inset-x-0">
        {children}
      </div>
    </div>
  );
}
