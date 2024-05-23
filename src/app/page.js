"use client"
import NavBar from "@/components/NavBar";
import heroImg from "../images/banner.2d2823a2.jpeg";
import img1 from "../images/JustWravel-1706862602-AG-Vof-3.jpeg";
import img2 from "../images/JustWravel-1706862890-bhrigu-3.jpeg"
import img3 from "../images/JustWravel-1706863447-Friendship-peak-3.jpeg"
import img4 from "../images/JustWravel-1706863916-KGL3 (1).jpeg"
import Image from "next/image";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { setUser } from "@/redux/features/auth";
import Loader from "../components/Ldr"
import { setLoader } from "@/redux/features/loader";



export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {loader} = useSelector((state)=>state.loader);
 

  //destructuring token 
  const {token} = useSelector((state)=>state.auth);



  //if token isnt stored in local storage, it will redirect to login window
  if(!token) {
    router.push('/login')
    return null;
  }


  //Function to get user data though token stored in local storage
  async function getUserData(){
    dispatch(setLoader(true));
    const res = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
      }, 
    });

    const data = await res.json();
    dispatch(setLoader(false));


    //checking whether token has expired
    if(!data.id) {
      router.push('/login')
      return null;

    }

    dispatch(setUser(data));


    extendSession();


  }

  // function to extend session of a user
  async function extendSession() {
    const res = await fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, 
      }, 
      body: JSON.stringify({
        expiresInMins: 30, 
      })
    });

    const data = await res.json();

    localStorage.setItem("token111",JSON.stringify(data.token));

  }



  useEffect(()=>{
    getUserData();

  },[])

  if(loader) return (<Loader></Loader>);


  



  
  
  return (
    <div className="bg-white">

      <NavBar></NavBar>

      <div>
        <div className="relative h-full">

          <Image className="h-[60vh] object-cover sm:h-[100%] filter blur-sm" src={heroImg} alt="img1"></Image>
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
            <div className="relative mt-4" >
              <Image className="w-[95%] sm:h-[300px] sm:w-[250px] rounded-lg" src={img1} alt="im2"></Image>
              <div className="absolute w-[95%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Valley of Flowers</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kasmir</p>

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


            <div className="relative mt-4" >
              <Image className="w-[95%] sm:h-[300px] sm:w-[250px] rounded-lg" src={img2} alt="im3"></Image>
              <div className="absolute w-[95%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Bhrigu Lake</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kasmir</p>

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


            <div className="relative mt-4" >
              <Image className="w-[95%] sm:h-[300px] sm:w-[250px] rounded-lg" src={img3} alt="im4"></Image>
              <div className="absolute w-[95%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
                <div className="flex flex-col h-[100%] justify-end p-3" >

                  <div>

                    <p className="font-bold">Friendship Peak</p>
                    <div className="flex">
                      <FaLocationDot className="mt-[4px]"></FaLocationDot>
                      <p>Rishikesh to kasmir</p>

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
              <Image className="w-[95%] sm:h-[300px] sm:w-[250px] rounded-lg" src={img4} alt="im5"></Image>
              <div className="absolute w-[95%] h-full sm:w-[250px] top-0 text-white bg-gradient-to-t from-black/90 to-black/0 rounded-lg ">
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

        <section className="w-[95%] mx-auto pb-[50px] mt-10 ">

            <video className="rounded-xl" src="https://res.cloudinary.com/dhfas7qft/video/upload/v1716392528/sos-desktop_wtpsuv.mp4" autoPlay muted></video>

        </section>

        




      </div>
     

    </div>


  );
}
