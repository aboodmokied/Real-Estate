import {FcHome} from "react-icons/fc"
import {AiOutlineSearch} from "react-icons/ai"
import {BsCashStack} from "react-icons/bs"
import {FiKey} from "react-icons/fi"

export const NavData=[
    {id:1,title:"Home",icon:<FcHome/>,href:'/'},
    {id:2,title:"Search",icon:<AiOutlineSearch/>,href:'/search'},
    {id:3,title:"Buy Property",icon:<BsCashStack/>,href:'/search?purpose=for-sale'},
    {id:4,title:"Rent Property",icon:<FiKey/>,href:'/search?purpose=for-rent'},
]