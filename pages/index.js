import Offer from "../components/Offer";
import Properity from "../components/Properity";

import offet1 from '../public/offer1.jpg'
import offet2 from '../public/offer2.jpg'
function Home({rentData,saleData}) {
    
    return ( 
        <>
        <Offer
        header="RENT A HOME"
        title="Rental Homes for Everyone"
        buttonTitle="Explore Renting"
        cover={offet1}
        />

        <div className="container-components my-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rentData.map(pro=><Properity key={pro.id} pro={pro}/>)}
        </div>

        <Offer
        header="BUY A HOME"
        title="Find, Buy And Own Your Dream Home"
        buttonTitle="Explore Buying"
        cover={offet2}
        />

        <div className="container-components my-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {saleData.map(pro=><Properity key={pro.id} pro={pro}/>)}
        </div>

        </>
    );
}

export async function getStaticProps(context){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3c42b7a59dmsh8eb0e51182612bdp1dc7b7jsnf2e0d179449d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    
    let res1=await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25', options)
    let data1=await res1.json()
    
    let res2=await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25', options)
    let data2=await res2.json()

    return{
        props:{
            rentData:data1.hits.slice(0,6),
            saleData:data2.hits.slice(0,6)
        },
        revalidate:30
    }
}
export default Home;
