import PageHeader from '@/components/ui/page-header';
import USMap from '@/components/ui/fourth-task/us-map';
import React from 'react';

const FourthTaskPage = () => {
    return (
        <div className='h-screen flex flex-col bg-darkBlue-900'>
            <PageHeader />
            <main className='flex flex-row flex-1 px-20 bg-darkBlue-900 justify-center'>
                <div className='text-black bg-gray-200 rounded h-fit w-8/12 mt-8 text-center flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold mb-2'>US Obesity Index</h2>
                    <p className='text-lg'>Hover over a state to see its obesity index.</p>
                    <div className='flex flex-row justify-center'>
                        <USMap />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FourthTaskPage;
