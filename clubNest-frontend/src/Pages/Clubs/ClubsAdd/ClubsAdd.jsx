import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ClubsAdd = () => {

    const { user, loading } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const dataInfo = {
            ...data,
            email: user.email,
            name: user.displayName
        }

        try {
            const res = await axiosSecure.post('/api/clubs', dataInfo);

            if (res.data.insertedId) {
                toast.success("Club Created Successfully!");
                reset();
            }
        } catch (error) {

            console.error(error);
            toast.error('❌ Error!', 'Failed to add Club.', 'error');

        }


    };



    return (
        <div>
            <ToastContainer />
            <div className='min-h-screen mt-16 flex flex-col  mb-36 items-center max-w-7xl mx-auto'>
                {
                    loading ? <>
                        <div className="flex justify-center items-center min-h-screen">
                            <div className="w-12 h-12 border-4 border-[#fe3e01] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </> : <>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center max-w-xl w-full p-8 py-12  text-gray-500 rounded-lg shadow-xl border border-gray-100 bg-white">


                            <div className="w-full ">
                                <p>club Name</p>
                                <input
                                    {...register("clubName", {
                                        required: "Name is required"
                                    })}
                                    placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="text" required />
                            </div>
                            {errors.clubName && (
                                <span className="text-red-500 text-sm">{errors.clubName.message}</span>
                            )}


                            <div className="w-full ">
                                <p>Banner Image</p>
                                <input
                                    {...register("BannerImage", {
                                        required: "Image is required"
                                    })}
                                    placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="url" required />
                            </div>
                            {errors.BannerImage && (
                                <span className="text-red-500 text-sm">{errors.BannerImage.message}</span>
                            )}

                            <div className="w-full ">
                                <p>Membership Fee</p>
                                <input
                                    {...register("membershipFee", {
                                        required: "Membership Fee is required"
                                    })}
                                    placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="number" required />
                            </div>
                            {errors.membershipFee && (
                                <span className="text-red-500 text-sm">{errors.membershipFee.message}</span>
                            )}
                            <div className="w-full ">
                                <p>category</p>
                                <select
                                    {...register("category", {
                                        required: "category is required"
                                    })}
                                    required
                                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]"
                                >
                                    <option value="">Select category </option>
                                    <option value="Dhaka">Photography</option>
                                    <option value="Chattogram">Sports</option>
                                    <option value="Khulna">Tech</option>
                                </select>
                            </div>
                            {errors.category && (
                                <span className="text-red-500 text-sm">{errors.category.message}</span>
                            )}
                            <div className="w-full ">
                                <p>location(city/area)</p>
                                <select
                                    {...register("location", {
                                        required: "Location is required"
                                    })}
                                    name="location"
                                    required
                                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]"
                                >
                                    <option value="">Select city/area</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Rangpur">Rangpur</option>
                                </select>
                            </div>
                            {errors.location && (
                                <span className="text-red-500 text-sm">{errors.location.message}</span>
                            )}

                            <div className="w-full ">
                                <p>Description</p>
                                <textarea
                                    rows={4}
                                    {...register("description", {
                                        required: "Description is required"
                                    })}
                                    placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="text" required />
                            </div>

                            {errors.description && (
                                <span className="text-red-500 text-sm">{errors.description.message}</span>
                            )}

                            <div className="w-full ">
                                <p>Email</p>
                                <input
                                    value={user.email}
                                    disabled
                                    placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="email" required />
                            </div>
                            <div className="w-full ">
                                <p>Name</p>
                                <input
                                    placeholder="type here"
                                    value={user.displayName}
                                    disabled
                                    className="border  border-gray-200 rounded w-full p-2 mt-1 outline-[#fe3e01]" type="email" required />
                            </div>


                            <button

                                disabled={loading}
                                className="bg-[#fe3e01] flex items-center justify-center gap-2 
  text-white w-full py-2 rounded-md transition-all 
  disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading && (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}

                                {loading ? "Creating..." : "Create Club"}
                            </button>
                        </form>
                    </>
                }
            </div>
        </div>
    );
};

export default ClubsAdd;