'use client'
import Image from "next/image";

import { useRouter } from "next/navigation";
import HomeFeatures from "./components/HomeFeatures";
import HomeStats from "./components/HomeStats";

const Home = () => {
  const router = useRouter();



  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <img src="https://ssl.cdn-redfin.com/photo/52/bigphoto/016/72656016_2.jpg" />
      <div className='flex flex-col'>
           <HomeFeatures />
      <HomeStats />
      </div>
   
    </main>
  );
}

export default Home
