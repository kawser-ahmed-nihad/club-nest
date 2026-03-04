import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import useAxios from '../../../hooks/useAxios';

const SocialLogin = () => {
    const navigate = useNavigate();
    const { socialLogin } = useAuth()
    const axiosInstance = useAxios();

    const handleLogin = () => {

        socialLogin()
            .then(res => {
                const userInfo = {
                    name: res.user.displayName || "No Name",
                    email: res.user.email,
                    photo: res.user.photoURL || ''
                };

                console.log(userInfo);
                // Send to backend
                axiosInstance.post("/api/users", userInfo)
                toast.success('Google Login successful! Redirecting...', {
                    autoClose: 4000,  // 4 seconds
                    pauseOnHover: true,
                    position: 'top-center',
                });

                // 4️⃣ Redirect after 4 seconds
                setTimeout(() => {
                    navigate(location.state?.from || '/');
                }, 4000);
                
            })
            .catch(err => {
                toast.success("Error", err.message, "error");
                console.log(err);
            });
    }


    return (
        <div>
            <ToastContainer />
            <button onClick={handleLogin} type="button"
                className="mt-2 flex py-2 w-full items-center justify-center gap-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                    <path fill="#FFC107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917">
                    </path>
                    <path fill="#FF3D00"
                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691">
                    </path>
                    <path fill="#4CAF50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44">
                    </path>
                    <path fill="#1976D2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917">
                    </path>
                </svg>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;