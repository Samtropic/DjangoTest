import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {appContext, API_URL} from '../../App'
import axios from 'axios';

const UserProfile = () => {
    const context = useContext(appContext)

    const [profileData, setProfileData] = useState({user: {}});
    const location = useLocation();
    const userId = location.state;

    useEffect(() => {
        console.log(location)
        axios.get(`${API_URL}/users/${userId}/`)
        .then((response) => {
            setProfileData(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [userId]);

    return (
        <>
            <Link to={"/"}>
                <span className='m-5 bg-slate-200 hover:bg-blue-300 p-2 rounded-lg shadow-lg shadow-gray-600' >Go Back to Users</span>
            </Link>
            <section className="gradient-form h-full bg-blue-200">
                <div className="container h-full p-10">
                    <div
                    className="flex h-full flex-wrap items-center justify-center text-neutral-800">
                    <div className="w-full">
                        <div
                        className="block rounded-lg bg-white shadow-lg">
                        <div className="g-0 lg:flex lg:flex-wrap">
                            <div className="px-4 md:px-0 lg:w-6/12">
                            <div className="md:mx-6 md:p-12">
                                <div className="text-center">
                                <img
                                    className="mx-auto w-48 rounded-lg shadow-lg shadow-gray-600"
                                    src="https://i.ibb.co/6YbS9ff/avatar11.png"
                                    alt="logo" />
                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                    {profileData.user.username}
                                </h4>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='border rounded-lg'>
                                        <p className="mb-4 text-2xl">User Info</p>
                                        <div className="relative mb-4" data-twe-input-wrapper-init>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">First Name:</p>
                                                <p className="mb-4">{profileData.user.first_name}</p>
                                            </div>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">Last Name:</p>
                                                <p className="mb-4">{profileData.user.last_name}</p>
                                            </div>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">Email:</p>
                                                <p className="mb-4">{profileData.user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border rounded-lg'>
                                        <p className="mb-4 text-2xl">Profile Info</p>
                                        <div className="relative mb-4" data-twe-input-wrapper-init>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">Age:</p>
                                                <p className="mb-4">{profileData.age}</p>
                                            </div>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">Gender:</p>
                                                <p className="mb-4">{profileData.gender}</p>
                                            </div>
                                            <div className='flex flex-row gap-5'>
                                                <p className="mb-4 font-bold">Hometown:</p>
                                                <p className="mb-4">{profileData.hometown}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
};

export default UserProfile;