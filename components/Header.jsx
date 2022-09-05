import React, {useState} from "react";

import Link from 'next/link'
import {useRouter} from "next/router"

import {GiHamburgerMenu} from 'react-icons/gi'
import {NavData} from "../utils/data"
function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [showNav,setShowNav]=useState(false)
    let navStyle={
        display:showNav? "block":"none"
    }
    return (

        <div className="border-b relative p-3 flex items-center justify-between container-header">
            <div className="logo select-none cursor-pointer  text-blue-500 text-3xl font-bold"
            onClick={()=>router.push("/")}
            >
                <h1>Realtor</h1>
            </div>
            
            <div className=" icon hover:text-white hover:bg-blue-400 transition-all p-3 border rounded border-gray-200 text-gray-500 text-sm cursor-pointer"
            onClick={()=>setShowNav(prev=>!prev)}
            >
                <GiHamburgerMenu/>
            </div>

                <div 
                className={`transition-all bg-white nav w-[225px] absolute z-10 flex flex-col gap-2 top-[95%] right-3  border border-gray-200 rounded-md py-3`}
                style={navStyle}>
                { NavData.map(ele=>{
                    return(
                        <Link key={ele.id} href={ele.href}>
                            <div className={`${currentRoute === ele.href? "active" : "non-active"} flex gap-3 items-center hover:bg-gray-100 transition-all px-3 py-[5px] cursor-pointer`}>
                                <div className="text-sm">{ele.icon}</div>
                                <p>{ele.title}</p>
                            </div>
                        </Link>
                    )
                })}
                </div>
        </div>
        
    );
}

export default Header;