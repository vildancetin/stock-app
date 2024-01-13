import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import logo from "../assets/stock-app-logo.png";
const Dashboard = () => {
  return (
    <div>
      <aside className="w-[250px] bg-[#537D3C] h-screen text-white ">
        <div>
          <img src={logo} alt="" className="h-[200px] ml-6" />
        </div>
        <ul className="flex justify-center flex-col gap-4">
          <li className="">
            <button className="flex justify-center items-center">
              <MdDashboard />
              Dashboard
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center">
              <FaShoppingCart />
              Purchases
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center">
              <FaDollarSign />
              Sales
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center">
              <FaStoreAlt />
              Firms
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center">
              <TbBrandReact />
              Brands
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center">
              <FaShoppingBag />
              Products
            </button>
          </li>
          <div className="mt-20">
            <li>
              <button className="flex justify-center items-center ">
                <IoLogOut />
                Logout
              </button>
            </li>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Dashboard;
