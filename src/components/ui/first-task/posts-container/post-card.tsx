import { PostData } from '@/types/types';
import React from 'react';
import useGetComments from './get-comments';
import { useUserSelection } from '@/components/context/user-context';
import CommentsSection from './comment-section';
import LoadingIndicator from '../../loading-indicator';

interface PostProps {
    post: PostData;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
    const { dataResponse, isLoading } = useGetComments(post?.id);
    const { selectedUser } = useUserSelection();
    const imageUrl = selectedUser?.gender === "male" ? "/male.png" : "/female.png";

    return (
        <div className="bg-blue-100 shadow-md flex flex-row py-4 px-2 w-full  relative rounded">
            <div className="pt-6 px-4 flex flex-col text-left">
                <h2 className="text-xl font-semibold text-black line-clamp-2 pb-4">{post.title}</h2>
                <p className="text-gray-500">{post.body}</p>
                {isLoading ?
                    <LoadingIndicator />
                    :
                    dataResponse && dataResponse.length > 0 && (
                        <CommentsSection dataResponse={dataResponse}
                            imageUrl={imageUrl}
                            selectedUser={selectedUser} />
                    )}
            </div>
        </div>
    );
};

export default PostCard;
