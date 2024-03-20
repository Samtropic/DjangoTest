import React, {useContext} from 'react';
import {appContext} from '../../App'
import { Link } from 'react-router-dom'; // Import Link for navigation

const UserList = () => {
    const context = useContext(appContext)
    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-blue-200 p-5'>
                {context.value.map((user) => (
                    <Link 
                    to={`/user/${user.id}`}
                    state={user.id}
                    key={user.id}
                    > 
                        <div className="hover:cursor-pointer hover:bg-blue-400 shadow-shadow-500 shadow-3xl rounded-lg relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px]"
                        >
                            
                                <div className="relative mt-1 flex h-16 w-full justify-center rounded-xl bg-cover">
                                    <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                                    <img className="h-full w-full rounded-full" src="https://i.ibb.co/6YbS9ff/avatar11.png" alt="" />
                                </div>
                                </div>
                                <div className="mt-16 flex flex-col items-center">
                                    <h4 className="text-bluePrimary text-xl font-bold">{user.first_name} {user.last_name}</h4>
                                    <h3 className="text-bluePrimary text-xl font-bold">{user.username}</h3>
                                    <p className="text-lightSecondary text-base font-normal">{user.email}</p>
                                </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default UserList;