import Image from "next/image";
import logo from "../images/JW-logo-dark.ec2abfdd.png"

import Link from "next/link";
import { MdWifiCalling3 } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import {  useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setToken, setUser } from "@/redux/features/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function NavBar() {

  

  
const router = useRouter();
const dispatch = useDispatch();

function logOut() {
  console.log("Logging out...");
  Cookies.remove("token");
  dispatch(setToken(null));
  dispatch(setUser(null));
  console.log("Token removed and user state set to null");
  router.push('/login');
  console.log("Redirecting to login");
  toast.success('Log out successful')
}

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


          <button className=" hidden sm:flex rounded-md sm:ml-2 bg-blue-600 text-white font-bold p-2" onClick={()=>logOut()}>Logout</button>


          <button className="text-black sm:hidden mt-2" onClick={()=>logOut()}><RiLogoutCircleRFill size={25} /></button>

        </div>

      </div>








    </div>

    );
}