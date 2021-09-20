import { BellIcon, LogoutIcon } from '@heroicons/react/outline';
import React from 'react';

export default function Header() {
  return (
    <div className="absolute top-0 lg:left-64 lg:ml-12 inset-x-0">
      <div className="lg:grid lg:grid-cols-4 p-4 lg:content-center lg:h-20 flex mt-1">
        <div className="hidden lg:flex xl:col-span-1 col-span-2 lg:flex-none  justify-start items-center">
          <h1 className="text-lg font-light text-gray-400">
            Monday, 20 September 2021
          </h1>
        </div>
        <div className="hidden lg:flex xl:col-span-2 col-span-1n justify-start items-center"></div>

        <div className="lg:grid lg:grid-cols-1 flex  justify-between w-full">
          <div className="flex gap-8 lg:justify-center items-center flex-row-reverse lg:flex-row justify-between w-full">
            <div className="flex justify-center items-center gap-4">
              <div className="group relative hover:bg-gray-200 hover:p-2 rounded-md p-2 transition-all duration-300">
                <div className="h-2 w-2 rounded-full bg-red-500 absolute right-3 top-2"></div>
                <BellIcon className="group-hover:text-gray-800 group-hover:text-opacity-100 lg:h-7 lg:w-7 h-6 w-6 text-gray-600 text-opacity-60" />
              </div>
              <LogoutIcon className="h-7 w-7 text-gray-400 hidden" />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/300.jpeg`}
                alt="profile"
                loading="lazy"
                className="h-14 w-14 rounded-full"
              />
              <div className="flex 2xl:flex lg:hidden flex-col ">
                <h1 className="text-base font-semibold text-gray-800">
                  Abdul Muchtar Astria
                </h1>
                <h2 className="text-sm font-light text-gray-500">
                  Front End Engineer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
