"use client";
import React from "react";
import useGetPosts from "./get-posts";
import { useUserSelection } from "@/components/context/user-context";
import PostCard from "./post-card";
import { PostData } from "@/types/types";
import LoadingIndicator from "../../loading-indicator";

const PostsContainer: React.FC = () => {
    const { selectedUser } = useUserSelection();
    const { posts, isLoading } = useGetPosts(selectedUser?.id);

    if (!selectedUser) {
        return <div className="container flex flex-row w-2/3 bg-slate-200 my-4 rounded h-fit">
            <p className="text-2xl font-bold text-black w-full text-center p-8">No user selected</p>
        </div>;
    }


    return (
        <div className="container flex flex-col w-2/3 bg-slate-200 my-4 py-8 rounded h-fit">
            <div className="flex flex-col justify-between pb-8 px-8">

                <h2 className="text-4xl font-semibold text-black line-clamp-2">
                    {selectedUser.name}
                </h2>
                <p className="text-s font-semibold text-blue-700 underline line-clamp-2">
                    {selectedUser.email}
                </p>
            </div>
            <div className="flex flex-col space-y-3 px-8">

                {isLoading ?
                    <LoadingIndicator /> :
                    posts && posts?.length > 0 ? posts?.map((item: PostData) => (
                        <PostCard key={item.id} post={item} />
                    )) : <p className="text-2xl font-bold text-black w-full text-center p-8">No posts</p>}
            </div>
        </div>
    );
};

export default PostsContainer;