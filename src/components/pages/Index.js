import React from 'react';
import Breadcrumbs from '../atoms/Breadcumbs';

export default function Index() {
  return (
    <div className="relative inset-x-0">
      <div className="flex justify-between p-2 w-full">
        <h1 className="text-xl lg:text-3xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <Breadcrumbs />
      </div>

      <div className="mt-8 bg-white inset-x-0 h-24 rounded-lg"></div>
    </div>
  );
}
