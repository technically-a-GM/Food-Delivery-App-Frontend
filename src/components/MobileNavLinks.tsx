import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () =>{

    const {logout} = useAuth0();
return (
    <>
        <Link to = "/user-profile" className="bg-white hover:text-orange-500 font-bold">User Profile</Link>
        <Button
  onClick={() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }}
  className="flex items-center px-3 text-white hover:bg-orange-500 font-bold"
>
  Logout
</Button>

    </>
)
}

export default MobileNavLinks;