'use client';
import React from "react";
import useGetUsers from "./get-users";
import { UserData } from "@/types/types";
import Card from "./card";
import { Puff } from "react-loader-spinner";

const CardsContainer: React.FC = () => {
    const { data: usersData, isLoading } = useGetUsers();

    return (
        <div className="container py-4 flex flex-row w-1/3">
            {isLoading ? (
                <div className="flex items-center justify-center h-40 w-full">
                    <Puff
                        height="80"
                        width="80"
                        radius={0.5}
                        color="#cfe4fa"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <div className="flex flex-col space-y-3">
                    {usersData?.map((item: UserData) => (
                        <Card key={item.id} user={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardsContainer;
