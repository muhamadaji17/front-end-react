import { Bars3CenterLeftIcon, GiftIcon } from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
    className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
      showNav ? "pl-56" : ""
    }`}
    >
      <div className="pl-4 md:pl-16">
  <Bars3CenterLeftIcon 
    className="h-8 w-8 text-gray-700 cursor-pointer"
    onClick={() => setShowNav(!showNav)}
  />
</div>
<div className="flex items-center pr-4 md:pr-16">
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <img
        src="./gambar.jpg"
        className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
        alt="profile picture"
      />
    </div>
  </Menu>
</div>

    </div>
  );
}