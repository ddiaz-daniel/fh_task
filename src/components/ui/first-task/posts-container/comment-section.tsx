import React from 'react';
import { CommentData } from '@/types/types';
import Image from 'next/image';

interface CommentsSectionProps {
    dataResponse: CommentData[];
    imageUrl: string;
    selectedUser: { name: string; } | null;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ dataResponse, imageUrl, selectedUser }) => {
    return (
        <div className="border-t pt-2 space-y-4">
            <hr className="border-t border-gray-300 my-4" />
            {dataResponse.map((comment: CommentData) => (
                <div key={comment.id} className="flex flex-row">
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
    );
};

export default CommentsSection;
