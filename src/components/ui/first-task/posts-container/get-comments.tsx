import { CommentData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetComments(id: number | undefined) {
    const [dataResponse, setDataResponse] = useState<CommentData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://gorest.co.in/public/v2/posts/${id}/comments`;
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
                const fetchedData = await response.json() as CommentData[];

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

export default useGetComments;
