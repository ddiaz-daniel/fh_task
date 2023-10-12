
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

export type Country = {
    country: string;
};

export type CountriesData = {
    "Bunker fuels (Not in Total)": number;
    "Cement": number;
    "Country": string;
    "Gas Flaring": number;
    "Gas Fuel": number;
    "Liquid Fuel": number;
    "Per Capita": number;
    "Solid Fuel": number;
    "Total": number;
    "Year": number;
};