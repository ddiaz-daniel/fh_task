'use client';
import React from "react";
import useGetUsers from "./get-users";
import { UserData } from "@/types/types";
import Card from "./card";
import LoadingIndicator from "../../loading-indicator";

const CardsContainer: React.FC = () => {
    const { data: usersData, isLoading } = useGetUsers();

    return (
        <div className="container py-4 flex flex-row w-1/3">
            {isLoading ?
                <LoadingIndicator color="cfe4fa" />
                : (
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
