import { UserData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetUsers() {
    const [dataResponse, setDataResponse] = useState<UserData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://gorest.co.in/public/v2/users';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    console.error(response);
                    throw new Error('API request failed');
                }
                const fetchedData = await response.json() as UserData[];


                setDataResponse(fetchedData);

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
