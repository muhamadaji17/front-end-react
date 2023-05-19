import { forwardRef } from "react";
// import Link from "next/link";
import { Link, useLocation } from "react-router-dom";
import logo from '../../gambar/logo.jpg';
import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md";

const SideBar = forwardRef(({}, ref) => {
  const { pathname } = useLocation();
  // const router = useRouter();
  const listMenu = [
    { 
      to: "/dashboard",
      path: "/dashboard", 
      icon: <MdCottage />,
      name: "Dashboard" 
    },{
      to: "/user",
      path: "/user", 
      icon: <MdShopTwo />, 
      name: "User"
      },{ 
      to: "/customer", 
      path: "/customer", 
      icon: <MdGroup />,
      name: "Customer" },
    {
      to: "/order",
      path: "/order",
      icon: <MdCategory />,
      name: "Order",
    },{
      to: "/orderdetail",
      path: "/orderdetail", 
      icon: <MdShopTwo />, 
      name: "Order Detail"
    },{
      to: "/product",
      path: "/product", 
      icon: <MdShopTwo />, 
      name: "Product"
    },{
      to: "/productcategory",
      path: "/productcategory", 
      icon: <MdShopTwo />, 
      name: "Product Category"
    },
  ];

  return (
    <div ref={ref} className="fixed w-56 h-full bg-gray-300 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img
          className="w-32 h-auto rounded-xl"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link to={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathname == mn.path
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                {mn.icon}
              </div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;