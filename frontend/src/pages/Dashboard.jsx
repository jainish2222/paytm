import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance "
import { Users } from "../components/Users "
import { useState } from "react"
import { useEffect } from "react"
import {Button} from "../components/Button"
import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { BottomWarning } from "../components/BottomWarning"
export const Dashboard = ()=>{
    // const navigate = useNavigate();
    const [bal, setbal] = useState(0);
useEffect(async() => {
       const response = await axios.get("http://localhost:3000/api/v1/account/balance",
         {
             headers: {
                 Authorization: "Bearer " + localStorage.getItem("token")
             }
         })
         setbal(response.data.balance)
     }, [])
     
   return(
    <div>
        <Appbar/>
        <div className='m-8'>
            <Balance value={bal}/>
            <Users/>
            <Button label={'signin'} onClick={() => {window.location.href="/signin"}} />
        </div>
    </div>
   )
}