import { PostData } from "@/types/types";
import { useEffect, useState } from "react";

function useGetPosts(id: number | undefined) {
    const [posts, setPosts] = useState<PostData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

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

                setPosts(fetchedData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setPosts(null);
                setIsLoading(false);
            }
        };

        void fetchData();
    }, [id]);

    return { posts, isLoading };
}

export default useGetPosts;
