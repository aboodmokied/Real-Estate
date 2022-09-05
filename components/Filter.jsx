import React,{useState} from "react";
import {BsFilter} from 'react-icons/bs'
import {useRouter} from 'next/router'

import {filterData} from '../utils/filterData'
import MySelect from "./MySelect";
function Filter() {
    const router=useRouter()
    let filters=router.query||{}
    let [urlFilterData,setURLFilterData]=useState(filters)
    let [showFilter,setShowFilter]=useState(false)

    let filterHandler=(queryName,selectValue)=>{
        router.push({pathname:"/search",
        query:{...router.query,[queryName]:selectValue}})
        setURLFilterData(prev=>({...prev,[queryName]:selectValue}))
    }

    
    return (
        <div className="my-7 bg-blue-300/70">
            <h1 className="text-xl font-bold text-center border-b p-2  flex items-center justify-center gap-2 cursor-pointer"
            onClick={()=>setShowFilter(prev=>!prev)}
            >Search Property By Filters {<BsFilter/>}</h1>
            {showFilter&&<div className="py-5 px-3 flex flex-wrap gap-3">
                {filterData.map(e=>{
                    return(
                        <MySelect
                        key={e.placeholder}
                        filter={e}
                        changeHandler={filterHandler}
                        filterData={urlFilterData}
                        />
                    )
                })}
            </div>}
        </div>
    );
}

export default Filter;