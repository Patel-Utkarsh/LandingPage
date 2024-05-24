"use client"
import NavBar from "@/components/NavBar";
import heroImg from "../images/banner.2d2823a2.jpeg";
import img1 from "../images/JustWravel-1706862602-AG-Vof-3.jpeg";
import img2 from "../images/JustWravel-1706862890-bhrigu-3.jpeg"
import img3 from "../images/JustWravel-1706863447-Friendship-peak-3.jpeg"
import img4 from "../images/JustWravel-1707036478-Kashmir-BP-5.jpeg"
import img5 from "../images/JustWravel-1707153686-L2L-Turtuk-5.jpeg"
import img6 from "../images/JustWravel-1707153752-L2L-Turtuk-&-TSO-Moriri-4.jpeg"
import img7 from "../images/JustWravel-1706863610-hampta-pass-3.jpeg"
import img14 from "../images/pink-sunset-on-rocky-beach-aeaoh1xk9o1uoczw.jpg"
import img8 from "../images/1.png"
import img9 from "../images/2.png"
import img10 from "../images/3.png"
import img11 from "../images/4.png"
import img12 from "../images/5.png"
import img13 from "../images/7.png"



import Image from "next/image";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { setToken, setUser } from "@/redux/features/auth";
import Loader from "../components/Ldr"
import { setLoader } from "@/redux/features/loader";
import Cookies from "js-cookie";
import Footer from "@/components/Footer";




export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.loader);
  const { user } = useSelector((state) => state.auth);


  //destructuring token 
  const { token } = useSelector((state) => state.auth);








  //Function to get user data though token stored in cookie
  async function getUserData() {
    dispatch(setLoader(true));
    const res = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);

    if(!data.id) {
      dispatch(setToken(null));
      dispatch(setUser(null));
      Cookies.remove("token");
      dispatch(setLoader(false));
      router.push('/login')
      toast.error('token expired');
      return;


    }
    
    dispatch(setLoader(false));
    

    dispatch(setUser(data));

    


   await extendSession();


  }

  // function to extend session of a user
  async function extendSession() {
    const res = await fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        expiresInMins: 40,
      })
    });



    const data = await res.json();

    Cookies.set('token', data.token, { expires: 40 });
    dispatch(setToken(data.token));
    dispatch(setUser(data));

  }



  useEffect(() => {
    getUserData();
  }, [])

  if (!user) {
    return <Loader></Loader>
  }








  return (


    <div className="bg-white">


      <NavBar></NavBar>

      <div>
        <div className="relative h-full">

          <Image className="h-[70vh] object-cover sm:h-[100%] filter blur-sm" src={heroImg} alt="img1"></Image>
          <div className="absolute top-[10%] w-[60%] sm:w-[50%] left-16 flex flex-col gap-10 ">
            <p className="text-white text-6xl sm:text-8xl font-bold">Book your trip to <span className="text-[#afde1e]"> Tawang</span></p>

            <div className="font-semibold text-xl">
              <p> <span className="text-[#afde1e]">Wander</span> | Travel | <span className="text-[#afde1e]">Connect</span> | Repeat </p>
              <p>Where Adventure meets Community</p>
              <p>#wravelerforlife</p>
              <div className="relative mt-5">

                <input type="text" className="rounded-3xl w-full h-14 sm:w-[55%]" ></input>
                <button className="bg-[#1666d9] p-3 sm:w-[25%] rounded-3xl absolute right-1 sm:left-[29.7%] mt-[1px]">Explore trip</button>

              </div>


            </div>


          </div>



          <div className=" hidden absolute right-5 top-[20%] w-[40%]  sm:flex flex-col gap-4">

            <div className="rounded-[10px] border border-white/20 bg-white/10 p-5">
              <p>
                Ashish

              </p>

              <p>

                Transforming travel dreams into reality, one click at a time - thank you for making trip planning a joy!

              </p>
            </div>

            <div className="rounded-[10px] border border-white/20 bg-white/10 p-5">
              <p>
                Ashish

              </p>

              <p>

                Transforming travel dreams into reality, one click at a time - thank you for making trip planning a joy!

              </p>
            </div>

            <div className="rounded-[10px] border border-white/20 bg-white/10 p-5">
              <p>
                Ashish

              </p>

              <p>

                Transforming travel dreams into reality, one click at a time - thank you for making trip planning a joy!

              </p>
            </div>

          </div>



        </div>


        <div className=" bg-white text-black w-[95%] mx-auto mt-10 ">
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-bold text-gray-600 text-3xl ">Category</p>

            </div>

            <div className="flex justify-between ">
              <p className="text-3xl font-bold">
                Our Best Trecks

              </p>

              <p className="hidden sm:flex text-[#1666d9]">
                <FaCaretLeft size={25}></FaCaretLeft>
                <FaCaretRight size={25}></FaCaretRight>


              </p>

            </div>

          </div>


          <div className="flex flex-wrap justify-around mt-8">
            <div className="relative mt-4"  >
              <Image className="w-[375px] h-[150px] object-cover sm:h-[300px] sm:w-[250px] rounded-lg" src={img1} alt="im5"></Image>
              <div className="absolute w-[100%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Kashmir Great lakes</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kashmir</p>

                    </div>


                  </div>

                  <div></div>

                  <div className="flex gap-3">

                    <div className="flex">
                      <IoIosTime className="mt-[4px]"></IoIosTime>
                      <p>10N/11D</p>

                    </div>

                    <div className="flex">
                      <MdDateRange className="mt-[4px]"></MdDateRange>
                      <p>Jun - Sep</p>

                    </div>


                  </div>

                  <p>₹32,000</p>


                </div>



              </div>


            </div>


            <div className="relative mt-4"  >
              <Image className="w-[375px] h-[150px] object-cover  sm:h-[300px] sm:w-[250px] rounded-lg" src={img2} alt="im5"></Image>
              <div className="absolute w-[100%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Kashmir Great lakes</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kashmir</p>

                    </div>


                  </div>

                  <div></div>

                  <div className="flex gap-3">

                    <div className="flex">
                      <IoIosTime className="mt-[4px]"></IoIosTime>
                      <p>10N/11D</p>

                    </div>

                    <div className="flex">
                      <MdDateRange className="mt-[4px]"></MdDateRange>
                      <p>Jun - Sep</p>

                    </div>


                  </div>

                  <p>₹32,000</p>


                </div>



              </div>


            </div>


            <div className="relative mt-4"  >
              <Image className="w-[375px] h-[150px] object-cover sm:h-[300px] sm:w-[250px] rounded-lg" src={img3} alt="im5"></Image>
              <div className="absolute w-[100%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Kashmir Great lakes</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kashmir</p>

                    </div>


                  </div>

                  <div></div>

                  <div className="flex gap-3">

                    <div className="flex">
                      <IoIosTime className="mt-[4px]"></IoIosTime>
                      <p>10N/11D</p>

                    </div>

                    <div className="flex">
                      <MdDateRange className="mt-[4px]"></MdDateRange>
                      <p>Jun - Sep</p>

                    </div>


                  </div>

                  <p>₹32,000</p>


                </div>



              </div>


            </div>


            <div className="relative mt-4"  >
              <Image className="w-[375px] h-[150px] object-cover sm:h-[300px] sm:w-[250px] rounded-lg" src={img4} alt="im5"></Image>
              <div className="absolute w-[100%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Kashmir Great lakes</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kashmir</p>

                    </div>


                  </div>

                  <div></div>

                  <div className="flex gap-3">

                    <div className="flex">
                      <IoIosTime className="mt-[4px]"></IoIosTime>
                      <p>10N/11D</p>

                    </div>

                    <div className="flex">
                      <MdDateRange className="mt-[4px]"></MdDateRange>
                      <p>Jun - Sep</p>

                    </div>


                  </div>

                  <p>₹32,000</p>


                </div>



              </div>


            </div>

          </div>

          <div className="w-[95%] hidden sm:flex justify-center">
            <button className="mt-10  mb-5 rounded-3xl bg-[#1666d9]  text-white p-3">View All</button>

          </div>



        </div>

        <section className="w-[375px]  sm:w-[95%] mx-auto pb-[50px] mt-10 ">

          <video className="rounded-xl" src="https://res.cloudinary.com/dhfas7qft/video/upload/v1716392528/sos-desktop_wtpsuv.mp4" autoPlay muted></video>

        </section>

        <section className="mt-5 text-black w-[95%] mx-auto gap-7 pb-5">
          <div className="flex flex-col ">
            <p className="text-gray-400 font-semibold text-3xl ">Packages</p>
            <p className="semi-bold text-5xl">International Packages</p>
          </div>

          <div className="flex flex-wrap gap-1 justify-around">
            <div className="mt-5 relative" >
              <Image className="w-[85%] mx-auto sm:w-[260px] h-[300px] object-cover rounded-xl" src={img4} alt="img5"></Image>
              <div className="flex flex-col absolute bottom-4 bg-white p-4  pr-6 left-[17%] sm:left-2  rounded-lg">
                <p className="font-bold text-center">Bali</p>
                <div className=" flex">
                  <p>Package Starting - </p>
                  <p className="font-bold"> ₹ 25000</p>
                </div>
              </div>
            </div>

            <div className="mt-5 relative" >
              <Image className="w-[85%] mx-auto sm:w-[260px] h-[300px] object-cover rounded-xl" src={img5} alt="img5"></Image>
              <div className="flex flex-col absolute bottom-4 bg-white p-4  pr-6 left-[17%] sm:left-2 rounded-lg">
                <p className="font-bold text-center">Bali</p>
                <div className=" flex">
                  <p>Package Starting - </p>
                  <p className="font-bold"> ₹ 25000</p>
                </div>
              </div>
            </div>

            <div className="mt-5 relative" >
              <Image className="w-[85%] mx-auto sm:w-[260px] h-[300px] object-cover rounded-xl" src={img6} alt="img5"></Image>
              <div className="flex flex-col absolute bottom-4 bg-white p-4  pr-6 left-[17%] sm:left-2 rounded-lg">
                <p className="font-bold text-center">Bali</p>
                <div className=" flex">
                  <p>Package Starting - </p>
                  <p className="font-bold "> ₹ 25000</p>
                </div>
              </div>
            </div>

            <div className="mt-5 relative text-black" >
              <Image className="w-[330px] mx-auto sm:w-[260px] h-[300px] object-cover rounded-xl" src={img7} alt="img5" ></Image>
              <div className="flex flex-col absolute bottom-4 bg-white p-4  pr-6 sm:left-2  left-[15%] rounded-lg">
                <p className="font-bold text-center">Bali</p>
                <div className=" flex">
                  <p>Package Starting - </p>
                  <p className="font-bold"> ₹ 25000</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-[95%] mx-auto text-black mt-14">
          <div className="flex flex-col ">
            <div className="flex flex-col gap-4">
              <p className="text-center font-semibold text-4xl text-gray-600">Recognitions</p>
              <p className="text-center text-5xl font-bold">Recognitions By Govt.</p>

            </div>

            <div className=" sm:flex pb-10  ">
              <div className="flex flex-wrap w-[90%] justify-center mx-auto sm:w-[50%] mt-8 sm:justify-evenly">
                <Image className=" rounded-lg shadow-lg lg:rounded-[1rem]  " src={img9} alt="img5"></Image>
                <Image className=" rounded-lg shadow-lg lg:rounded-[1rem]" src={img10} alt="img5"></Image>
                <Image className=" rounded-lg shadow-lg lg:rounded-[1rem] mt-5" src={img11} alt="img5"></Image>
                <Image className=" rounded-lg shadow-lg lg:rounded-[1rem] mt-5" src={img12} alt="img5"></Image>
                <Image className=" rounded-lg shadow-lg lg:rounded-[1rem] mt-5" src={img13} alt="img5"></Image>
              </div>
              <div className="w-[90%] mx-auto sm:w-[50%] mt-14">
                In a brief period, JustWravel has achieved significant recognition and success. With each new milestone, Justwravel adds a unique feather to its cap. As a registered member of ATOAI, we are certified tour operators. Our journey has been characterized by excellence and trust, as demonstrated by our three-time consecutive receipt of the MSME Best Enterprise (Travel & Tourism) award. This achievement reflects our unwavering commitment to delivering top-tier travel experiences. Additionally, we proudly hold the 2023 TripAdvisor Travelers Choice Award, a testament to the consistently outstanding feedback and reviews from our satisfied travelers. JustWravel is supported by Startup India, underscoring our dedication to innovation and quality in the travel industry. We were honored to be part of Uttar Pradesh Tourism as an adventure tour operator. Furthermore, JustWravel is incubated by IIM Bangalore's NSRCEL, demonstrating our strong foundation and support from esteemed educational institutions. We were featured by ANI, South Asia's leading multimedia news agency, and Business Standard. These recognitions inspire us to continually raise the bar and continue providing exceptional journeys for our valued travelers.
              </div>
            </div>

          </div>
        </section>

        <section className="w-[95%] mx-auto relative pb-10">
          <Image className="h-[325px] sm:h-[275px] object-cover"  src={img14}></Image>
          <div className="absolute top-0 h-[275px] w-[100%] bg-gradient-to-t from-black/90 to-black/0 rounded-lg flex flex-col pt-10 pl-5 gap-2">
            <p className="font-bold text-xl">Newsletter</p>
            <p className="font-bold text-4xl">
                Sign Up Now
            </p>
            <p className=" text-xl mt-5">
                Be the first one to know all about the Exciting Offers, Travel Updates and more.
          
            </p>

            


            <div className="flex flex-col relative">
              <input type="text" className="text-black w-[80%] sm:w-[40%] mt-5 p-2 rounded-2xl" placeholder="Enter Your Email"></input>
              <button className="absolute left-[60%] sm:left-[32%] top-5 bg-[#1666d9] p-2 font-semibold rounded-2xl">Subscribe</button>
            </div>
          </div>
        </section>






      </div>

      <Footer></Footer>


    </div>


  );
}


