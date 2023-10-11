
export type UsersData = {
    data: UserData[];
    status: string;
    error?: string;
};

export type UserData = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
};

export type PostData = {
    id: number;
    user_id: number;
    title: string;
    body: string;
};

export type CommentData = {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
};

export type error = {
    error: string,
    results: string[],
    status: string;
};