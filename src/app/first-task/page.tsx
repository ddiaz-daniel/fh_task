import UserContainer from '@/components/ui/cards-container/user-container';
import PageHeader from '@/components/ui/page-header';
import PostsContainer from '@/components/ui/posts-container/posts-container';
import React from 'react';

const FirstTaskPage = () => {
    return (

        <div className='h-screen flex flex-col bg-slate-600'>
            <PageHeader />
            <main className='flex flex-row flex-1 px-20 bg-gray-400'>
                <UserContainer />
                <PostsContainer />
            </main>
        </div>
    );
};

export default FirstTaskPage;
