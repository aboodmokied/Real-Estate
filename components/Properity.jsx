// import Link from "next/router"
import Image from "next/image";
import { useRouter } from "next/router";
import offer1 from "../public/offer1.jpg"

import {GoVerified} from "react-icons/go"
import {FaBed,FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"



function Properity({pro}) {
    let {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }=pro
    const router=useRouter()
    return (
        // <Link>
            <div className="max-w-[600px] mx-auto bg-blue-100/70 p-3 rounded cursor-pointer"
            onClick={()=>router.push(`/search/${externalID}`)}
            >
                        <div className="">
                        <Image
                        src={coverPhoto ? coverPhoto.url : offer1}
                        alt="imag"
                        width={600}
                        height={400}
                        />
                        </div>
        
                        <div className="mt-1 p-2">
                            <div className="flex items-center relative">
                                <p className={`${isVerified&&'mr-2'} text-green-400`}>{isVerified&&<GoVerified />}</p>
                                <h1 className="text-lg font-bold">AED {price}{rentFrequency && `/${rentFrequency}`}</h1>
                                <div className="absolute right-1 rounded-full overflow-hidden w-[35px] h-[35px] justify-self-end"><Image className="object-cover" src={agency.logo.url} alt="logo" height={100} width={100}/></div>
                            </div>
                            <div className="mt-1 text-blue-400 flex items-center gap-2">{rooms} <FaBed /> | {baths} <FaBath /> | {area.toFixed(2)} sqft <BsGridFill /></div>
                            <p className="mt-1">{title.length > 30 ? title.substring(0, 30) + '...' : title}</p>
                        </div>
                    </div> 
        // </Link>
    );
}

export default Properity;