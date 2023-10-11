import PageHeader from '@/components/ui/page-header';
import React from 'react';

const FirstTaskPage = () => {
    return (
        <div className='h-screen flex flex-col bg-slate-600'>
            <PageHeader />
            {/* Create a main that will be a middle container that contains the posts*/}
            <main className='flex flex-col items-center justify-center flex-1 px-20 text-center bg-gray-400'>
            </main>
        </div>
    );
};

export default FirstTaskPage;
