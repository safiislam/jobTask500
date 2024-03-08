import { IoChevronDown } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
import { HiMiniUserCircle } from "react-icons/hi2";
import navLogo from '../../public/Group 1000008504.png';

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center py-4">
            <ul className="flex gap-2">
                <li><a href={'#home'} > Home </a> </li>
                <li className=""><a href={'#home'} > Pages <IoChevronDown className="inline-block" /> </a> </li>
                <li><a href={'#home'} > Menu <IoChevronDown className="inline-block" /></a> </li>
                <li><a href={'#home'} > Contact Us</a> </li>
            </ul>
            <div>
                <img src={navLogo} alt="" />
            </div>
            <div className="flex items-center  gap-10">

                <div className="flex g">
                    <IoIosSearch className="text-2xl" />
                    <span>
                        <CiHeart className="text-2xl" />
                    </span>
                    <span>
                        <TbShoppingCart className="text-2xl" />
                    </span>

                </div>
                <div className="flex items-center gap-2">
                    <span>
                        <HiMiniUserCircle className="text-xl" />
                    </span>
                    <span className="font-semibold">Sign in</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;