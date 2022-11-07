import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../../API-JWT-Token/setAuthToken';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User logged in');

        //* JWT Token
        setAuthToken(user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
  };
  return (
    <div>
      <p className="text-center">Social Login</p>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
