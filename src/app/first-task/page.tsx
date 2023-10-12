import UserContainer from '@/components/ui/first-task/user-container';
import PageHeader from '@/components/ui/page-header';
import PostsContainer from '@/components/ui/first-task/posts-container';
import React from 'react';

const FirstTaskPage = () => {
    return (

        <div className='h-screen flex flex-col'>
            <PageHeader />
            <main className='flex flex-row flex-1 px-20 py-8 bg-darkBlue-900 space-x-3'>
                <UserContainer />
                <PostsContainer />
            </main>
        </div>
    );
};

export default FirstTaskPage;
