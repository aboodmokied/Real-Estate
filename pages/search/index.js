import Properity from '../../components/Properity'
import Filter from '../../components/Filter';
import {useRouter} from 'next/router'
function Search({data}) {
    const router = useRouter();
    return ( 
        <div className="container-components ">
            <Filter/>
            <h1 className="my-3 font-bold text-2xl"
            
            >Properties</h1>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map(ele=><Properity key={ele.id} pro={ele}/>)}
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3c42b7a59dmsh8eb0e51182612bdp1dc7b7jsnf2e0d179449d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    let res =await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`, options)
    let data=await res.json()
    return {
        props:{
            data:data.hits,
        }
    }
}
export default Search;
