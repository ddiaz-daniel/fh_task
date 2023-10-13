import PageHeader from '@/components/ui/page-header';
import FilterCard from '@/components/ui/second-task/filter-card/filter-card';
import GraphsContainer from '@/components/ui/second-task/graphs-container';
import React from 'react';

const SecondTaskPage = () => {
    return (

        <div className='h-screen flex flex-col bg-darkBlue-900'>
            <PageHeader />
            <main className='flex flex-row flex-1 px-20 bg-darkBlue-900 space-x-8'>
                <FilterCard />
                <GraphsContainer />
            </main>
        </div>
    );
};

export default SecondTaskPage;
