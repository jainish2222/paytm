/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "./Button"
export function User({userdata}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {userdata.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {userdata.firstName} {userdata.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                window.location.href="/send?id=" + userdata._id + "&name=" + userdata.firstName;
            }} label={"Send Money"} />
        </div>
    </div>
}
