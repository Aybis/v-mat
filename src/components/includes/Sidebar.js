import {
  HomeIcon,
  ServerIcon,
  ShareIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="fixed lg:w-64 lg:left-8 lg:inset-y-0 inset-x-0 bottom-0 z-40">
      <div className="bg-white lg:h-5/6 lg:max-h-full lg:rounded-xl lg:my-24 lg:p-8 lg:flex lg:flex-col justify-between border-t border-gray-200 lg:border-none transition-all duration-300 ease-in-out">
        {/* Icon App */}
        <div className="lg:flex gap-4 justify-start items-center hidden">
          <div className="relative rounded">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/logoApp.svg`}
              alt="LogoApp"
              className="h-10 w-10"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">V-Route</h1>
        </div>

        {/* Menu  */}
        <div className="flex lg:flex-col lg:justify-evenly justify-between lg:h-1/2 py-2 px-8 md:px-0">
          <NavLink
            to="/"
            exact={true}
            className="flex lg:gap-4 flex-col lg:flex-row px-4 text-sm lg:text-base py-2 lg:px-6 lg:py-3 rounded-lg items-center font-regular text-black text-opacity-30 hover:text-blue-600 lg:hover:text-white hover:text-opacity-100 lg:hover:bg-blue-600 transition-all duration-300"
            activeClassName="lg:bg-blue-600 lg:text-white text-blue-600 font-bold lg:font-semibold tracking-wide text-opacity-100">
            <HomeIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            <span className="mt-1">Home</span>
          </NavLink>
          <NavLink
            to="/fabric"
            exact={true}
            className="flex lg:gap-4 flex-col lg:flex-row px-4 text-sm lg:text-base py-2 lg:px-6 lg:py-3 rounded-lg items-center font-regular text-black text-opacity-30 hover:text-blue-600 lg:hover:text-white hover:text-opacity-100 lg:hover:bg-blue-600 transition-all duration-300"
            activeClassName="lg:bg-blue-600 lg:text-white text-blue-600 font-bold lg:font-semibold tracking-wide text-opacity-100">
            <ShareIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            <span className="mt-1">Fabric</span>
          </NavLink>
          <NavLink
            to="/vlan"
            exact={true}
            className="flex lg:gap-4 flex-col lg:flex-row px-4 text-sm lg:text-base py-2 lg:px-6 lg:py-3 rounded-lg items-center font-regular text-black text-opacity-30 hover:text-blue-600 lg:hover:text-white hover:text-opacity-100 lg:hover:bg-blue-600 transition-all duration-300"
            activeClassName="lg:bg-blue-600 lg:text-white text-blue-600 font-bold lg:font-semibold tracking-wide text-opacity-100">
            <ServerIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            <span className="mt-1">VLAN</span>
          </NavLink>
          <NavLink
            to="/ospf"
            exact={true}
            className="flex lg:gap-4 flex-col lg:flex-row px-4 text-sm lg:text-base py-2 lg:px-6 lg:py-3 rounded-lg items-center font-regular text-black text-opacity-30 hover:text-blue-600 lg:hover:text-white hover:text-opacity-100 lg:hover:bg-blue-600 transition-all duration-300"
            activeClassName="lg:bg-blue-600 lg:text-white text-blue-600 font-bold lg:font-semibold tracking-wide text-opacity-100">
            <ServerIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            <span className="mt-1">OSPF</span>
          </NavLink>
          <NavLink
            to="/us"
            exact={true}
            className="hidden lg:flex lg:gap-4 flex-col lg:flex-row px-4 text-sm lg:text-base py-2 lg:px-6 lg:py-3 rounded-lg items-center font-regular text-black text-opacity-30 hover:text-blue-600 lg:hover:text-white hover:text-opacity-100 lg:hover:bg-blue-600 transition-all duration-300"
            activeClassName="lg:bg-blue-600 lg:text-white text-blue-600 font-bold lg:font-semibold tracking-wide text-opacity-100">
            <UserGroupIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            <span className="mt-1">About Us</span>
          </NavLink>
        </div>

        {/* Footer */}

        <div className="lg:flex hidden gap-2 w-full items-center justify-center rounded-b-xl ">
          <h1 className="text-xs text-gray-400 font-medium">#semangART</h1>
          <h1 className="text-xs text-gray-400 font-medium">
            #goesSidangBacth1
          </h1>
        </div>
      </div>
    </nav>
  );
}
