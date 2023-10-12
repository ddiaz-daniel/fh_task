import { UserData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetUsers() {
    const [dataResponse, setDataResponse] = useState<{
        data: UserData[] | null;
        isLoading: boolean;
    }>({
        data: null,
        isLoading: true,
    });

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

                setDataResponse({
                    data: fetchedData,
                    isLoading: false,
                });
            } catch (error) {
                console.error(error);
                setDataResponse({
                    data: null,
                    isLoading: false,
                });
            }
        };

        void fetchData();
    }, []);

    return dataResponse;
}

export default useGetUsers;
