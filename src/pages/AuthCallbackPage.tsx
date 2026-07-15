import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const hasCreatedUser = useRef(false);

  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    const createCurrentUser = async () => {
      if (
        user?.sub &&
        user?.email &&
        !hasCreatedUser.current
      ) {
        hasCreatedUser.current = true;

        await createUser({
          auth0Id: user.sub,
          email: user.email,
        });
      }

      navigate("/");
    };

    createCurrentUser();
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;