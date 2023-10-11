import { NextApiRequest, NextApiResponse } from 'next';

import { UsersData } from '../types/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UsersData>
): Promise<void> {
    try {
        const { data, status, error } = req.body as UsersData;

        const url = 'https://gorest.co.in/public/v2/users';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data,
                status,
                error,
            }),
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const responseData = await response.json() as UsersData;

        res.status(200).json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error',
            data: [],
            status: '',
        });
        return;
    }
}
