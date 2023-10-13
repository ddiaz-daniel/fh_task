import PageHeader from '@/components/ui/page-header';
import React from 'react';

const ThirdTaskPage = () => {
    const renderHost = 'https://obesity-us-backend.onrender.com';

    return (
        <div className='h-screen flex flex-col'>
            <PageHeader />
            <main className='flex flex-col flex-1 px-20 py-8 bg-darkBlue-900 space-x-3'>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold mb-2'>Node.js + Render Deployment</h1>
                    <p className='text-lg mb-4'>This project was created using Node.js and deployed to Render.</p>
                    <p className='text-lg'>
                        GitHub Repository: <a href="https://github.com/ddiaz-daniel/obesity-us-backend" className='text-blue-500 underline'>GitHub Repo</a>
                    </p>
                </div>
                <div className='text-white py-8'>
                    <h2 className='text-2xl font-bold mb-2'>API Endpoints:</h2>
                    <ul className='list-disc pl-4 space-y-6'>
                        <li className='text-lg mb-2'>
                            <strong>GET /states</strong>: Retrieve a list of all states and their IDs.
                            <p><a href={`${renderHost}/api/states`} className='text-blue-500 underline'>{`${renderHost}/api/states`}</a></p>

                        </li>
                        <li className='text-lg mb-2'>
                            <strong>GET /state/:id</strong>: Retrieve the Obesity index and coordinates for a specific state by ID.
                            <p><a href={`${renderHost}/api/state/1`} className='text-blue-500 underline'>{`${renderHost}/api/state/1`}</a></p>
                        </li>
                        <li className='text-lg mb-2'>
                            <strong>GET /summary</strong>: Retrieve summary data, including the state with the highest and lowest obesity index, and the average country obesity index.
                            <p><a href={`${renderHost}/api/summary`} className='text-blue-500 underline'>{`${renderHost}/api/summary`}</a></p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default ThirdTaskPage;
