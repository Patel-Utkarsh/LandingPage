import Link from "next/link";
import logo from "../images/JW-logo-dark.ec2abfdd.png"
import socialMedia from "../images/Screenshot (72).png"
import Image from "next/image";
export default function Footer() {
    return (
        <div className="text-black w-[100%]  sm:w-[95%] mx-auto">
            <div className="flex justify-around ">
                <div className=  "hidden  w-[20%] sm:flex flex-col gap-5">
                    <Image src={logo} className="w-[200px]"></Image>
                    <Image src={socialMedia} className="w-[200px]"></Image>

                </div>
                <div className="w-[20%] sm:w-[15%] flex flex-col gap-3 ">
                    <Link href={''} className="font-bold">Company</Link>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Contact Us</Link>
                    <Link href={''}>Our Blogs</Link>
                    <Link href={''}>career with us</Link>
                    <Link href={''}>Payment Policy</Link>
                    
                </div>

                <div className="w-[20%] sm:w-[15%] flex flex-col gap-3">
                    <Link href={''} className="font-bold">Trips</Link>
                    <Link href={''}>BackPacking trips</Link>
                    <Link href={''}>Trecks</Link>
                    <Link href={''}>Weekend Gateways</Link>
                    <Link href={''}>Biking Trips</Link>
                    <Link href={''}>Upcoming Trips</Link>
                    
                </div>

                <div className="w-[20%] sm:w-[15%] flex flex-col gap-2">
                    <Link href={''} className="font-bold">Trecks</Link>
                    <Link href={''}>Domestic Tour Packages</Link>
                    <Link href={''}>International Gateways</Link>
                    <Link href={''}>Corporate tours</Link>
                    <Link href={''}>Ladakh Trips</Link>
                    <Link href={''}>spiti Trips</Link>
                    
                </div>

                <div className="w-[25%] flex flex-col gap-2">
                    <Link href={''} className="font-bold">Contact Us</Link>
                    <Link href={''}>21, Fourth Floor, Tower B,
                        The Corenthum, Block A, Sector 111, Noida, Uttar Pradesh 201301s</Link>
                    <Link href={''}>+91-8810 457 631</Link>

                </div>
               
            </div>

            <div className="w-[95%] flex justify-between pt-7 pb-4">
                <p>© 2015-2024 JustWravel Pvt. Ltd.</p>
                <Link href={''}> Privacy Policy | Terms and Conditons</Link>
            </div>

        </div>
    );
}