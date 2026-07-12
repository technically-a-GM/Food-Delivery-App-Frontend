import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () =>{

    const hasCreaterUser = useRef(false);


    const navigate = useNavigate();
    const {user} = useAuth0();
    const {createUser} = useCreateMyUser();

    useEffect(()=>{
    if(user?.sub && user?.email  && !hasCreaterUser.current){
    createUser({
       auth0Id : user.sub,
       email : user.email,
    })
 }
 navigate("/")
    },[createUser,navigate,user]);

    return <>
    Loading ...
    </>
}

export default AuthCallbackPage;