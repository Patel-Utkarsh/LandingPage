import Image from "next/image";
import logo from "../images/JW-logo-dark.ec2abfdd.png"

import Link from "next/link";
import { MdWifiCalling3 } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";


export default function NavBar() {
    return (
        <div className=" w-[95%] mx-auto bg-white flex justify-between sm:justify-evenly sm:w-full  pt-3 pb-3 ">
      <Image src={logo} className="h-[50px] w-[150px]"></Image>
      <div className=" hidden sm:flex gap-5 pt-2  ">
        <Link href={'/'} className="text-black">BackPacking Trips</Link>
        <Link href={'/'} className="text-black">Trecks</Link>
        <Link href={'/'} className="text-black">Weekend Gateways</Link>
        <Link href={'/'} className="text-black">More</Link>

      </div>

      <div className="text-black">
        <div className="flex gap-3">
          <MdWifiCalling3 className="mt-2" size={25}></MdWifiCalling3>

          <div className="hidden sm:flex flex-col gap text-sm">
            <p>Call us</p>
            <p>+91 9310849571</p>
          </div>


          <button className="text-black hidden sm:flex">Logout</button>


          <button className="text-black sm:hidden mt-2"><RiLogoutCircleRFill size={25} /></button>

        </div>

      </div>








    </div>

    );
}