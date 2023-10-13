import { CommentData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetComments(id: number | undefined) {
    const [dataResponse, setDataResponse] = useState<CommentData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

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
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setDataResponse(null);
                setIsLoading(false);
            }
        };

        void fetchData();
    }, [id]);

    return { dataResponse, isLoading };
}

export default useGetComments;
