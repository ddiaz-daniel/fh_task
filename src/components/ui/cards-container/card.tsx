import React from 'react';

interface Card {
    data: { id: number; title: string; description: string; };
}

const Card: React.FC<Card> = ({ data }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="text-gray-500">{data.description}</p>

            </div>
        </div>
    );
};

export default Card;
