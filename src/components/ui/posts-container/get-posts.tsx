import { PostData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetPosts(id: number | undefined) {
    const [dataResponse, setDataResponse] = useState<PostData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://gorest.co.in/public/v2/users/${id}/posts`;
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
                const fetchedData = await response.json() as PostData[];

                setDataResponse(fetchedData);
            } catch (error) {
                console.error(error);
                setDataResponse(null);
            }
        };

        void fetchData();
    }, [id]);

    return dataResponse;
}

export default useGetPosts;
