"use client"
import Topnav from "../component/topNav"
import Banner from "../component/banner"
import MainContentOne from "../component/mainContentOne"

export default function Home(){
    return(
        <div className="w-full">

            <Topnav />

            <Banner />

            <MainContentOne />
          
        </div>
    )
}