import { UserData } from '@/types/types';
import React from 'react';
import Image from 'next/image';
import { useUserSelection } from '@/components/context/user-context';

interface CardProps {
    user: UserData;
}

const Card: React.FC<CardProps> = ({ user }) => {
    const { selectedUser, setSelectedUser } = useUserSelection();
    const statusDotColor = user.status === 'active' ? 'text-green-500' : 'text-gray-500';
    const backgroundColor = selectedUser?.id === user.id ? 'bg-blue-100' : 'bg-white';
    const imageUrl = user.gender === "male" ? "/male.png" : "/female.png";

    const handleCardClick = () => {
        setSelectedUser(user);
    };

    return (
        <div className={`${backgroundColor} shadow-md flex flex-row py-4 px-2 w-full relative rounded hover:cursor-pointer`} onClick={handleCardClick}>
            <div className="rounded-l-lg overflow-hidden w-4/12">
                <Image src={imageUrl} alt={`${user.name}'s profile`} width={150} height={150} className="rounded-full" />
            </div>
            <div className="absolute top-0 right-0 pr-4 pt-4">
                <p className={`flex items-center ${statusDotColor}`}>
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                    <span className="w-3 h-3 rounded-full ml-1 bg-current" />
                </p>
            </div>
            <div className="pt-6 px-4 flex flex-col w-8/12 text-left">
                <h2 className="text-xl font-semibold text-black line-clamp-2">{user.name}</h2>
                <p className="text-gray-500">Gender: {user.gender}</p>
            </div>
        </div>
    );
};


export default Card;
