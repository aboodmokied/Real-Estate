import Slider from "react-slick";
import Image from "next/image";

import {GoVerified} from "react-icons/go"
import {FaBed,FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"

function ProperityDetails({pro}) {
    let {photos, price, rentFrequency, rooms, title, baths, area,amenities, agency, isVerified,description,purpose,type }=pro
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container-components">
            <div className="w-full lg:w-[70%] mx-auto my-10">
                <div className="slider mx-auto my-8 lg:my-6 h-[500px] w-full">
                <Slider {...settings} className="h-[500px]">
                {photos.map(im=><Image key={im.id} src={im.url} layout='fill' objectFit='contain' className="h-[500px]"/>)}
                </Slider>
                </div>

                <div className=" p-2">
                            <div className="flex items-center relative">
                                <p className={`${isVerified&&'mr-2'} text-green-400`}>{isVerified&&<GoVerified />}</p>
                                <h1 className="text-lg font-bold">AED {price}{rentFrequency && `/${rentFrequency}`}</h1>
                                <div className="absolute right-1 rounded-full overflow-hidden w-[35px] h-[35px] justify-self-end"><Image className="object-cover" src={agency.logo.url} alt="logo" height={100} width={100}/></div>
                            </div>
                            <div className="mt-1 text-blue-400 flex items-center gap-3">{rooms} <FaBed /> | {baths} <FaBath /> | {area.toFixed(2)} sqft <BsGridFill /></div>
                            <p className="mt-10 font-semibold ">{title}</p>
                            <p className="my-3 text-gray-500">{description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-2 md:gap-10 lg:gap-12">
                                    <div className="border-b p-2 flex justify-between items-center">
                                        <p>TYPE</p>
                                        <p className="font-bold">{type}</p>
                                        
                                    </div>
                                    <div className="border-b p-2 flex justify-between items-center">
                                        <p>PURPOSE</p>
                                        <p className="font-bold">{purpose}</p>
                                        
                                    </div>
                            </div>

                            <div className="">
                                <h1 className="my-3 font-bold text-2xl">Facilites:</h1>
                                <div className="flex items-center gap-2 flex-wrap">
                                {amenities.map(e=><p key={e.text} className="bg-blue-200/70 text-blue-500 font-bold p-1  rounded-md">{e.text}</p>)}
                                    
                                </div>
                            </div>
                        </div>
            </div>
            
        </div>
    );
}

export default ProperityDetails;

export async function getServerSideProps({params}){
    let id=params.properityId
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '223d09d2edmshbcf819a550283afp1a8bb5jsnb49d80703e19',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    
    const res=await fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`, options)
    const data=await res.json()
    return{
        props:{
            pro:data
        }
    }
}
