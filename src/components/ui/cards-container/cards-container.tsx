import React from "react";
import useGetUsers from "./useGetUsers";
import { UserData } from "@/types/types";

const MainContainer: React.FC = () => {
    const usersData = useGetUsers(); // You need to implement this function

    return (
        <div className="container mx-auto py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {usersData?.map((item: UserData) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default MainContainer;