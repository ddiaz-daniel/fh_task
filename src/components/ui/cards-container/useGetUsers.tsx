import { UserData, UsersData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetUsers() {
    const [dataResponse, setDataResponse] = useState<UserData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = '/api/users-data';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    console.error(response);
                    throw new Error('API request failed');
                }

                const fetchedData = await response.json() as UsersData;

                setDataResponse(fetchedData?.data);

            } catch (error) {
                console.error(error);
                setDataResponse(null);
            }
        };

        void fetchData();
    }, []);

    return dataResponse;
}

export default useGetUsers;
