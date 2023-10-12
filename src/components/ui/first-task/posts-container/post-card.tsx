import { PostData, CommentData } from '@/types/types';
import React from 'react';
import useGetComments from './get-comments';
import Image from 'next/image';
import { useUserSelection } from '@/components/context/user-context';

interface PostProps {
    post: PostData;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
    const comments = useGetComments(post?.id);
    const { selectedUser } = useUserSelection();
    const imageUrl = selectedUser?.gender === "male" ? "/male.png" : "/female.png";


    return (
        <div className="bg-blue-100 shadow-md flex flex-row py-4 px-2 w-full  relative rounded">
            <div className="pt-6 px-4 flex flex-col text-left">
                <h2 className="text-xl font-semibold text-black line-clamp-2 pb-4">{post.title}</h2>
                <p className="text-gray-500">{post.body}</p>

                {comments && comments.length > 0 && (
                    <div className="border-t pt-2 space-y-4">
                        <hr className="border-t border-gray-300 my-4" />
                        {comments.map((comment: CommentData) => (
                            <div key={comment.id} className=" flex flex-row">
                                <Image src={imageUrl} alt={`${selectedUser?.name}'s profile`} width={50} height={50} className="rounded-full w-20 mx-4" />
                                <div className="flex flex-col text-left justify-center">
                                    <div className="flex flex-row space-x-2">
                                        <p className="text-black font-bold">
                                            {comment.name}
                                        </p>
                                        <p className="text-gray-500">
                                            -
                                        </p>
                                        <p className="text-gray-500">
                                            {comment.email}
                                        </p>
                                    </div>
                                    <p className="text-gray-500 py-2">{comment.body}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCard;
