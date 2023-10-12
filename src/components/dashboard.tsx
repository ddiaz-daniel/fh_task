'use client';
import React, { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

const Dashboard = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch('/task.md');
                if (!response.ok) {
                    throw new Error('Failed to load Markdown content');
                }
                const content = await response.text();
                setMarkdownContent(content);
            } catch (error) {
                console.error('Error loading Markdown content:', error);
            }
        };

        fetchMarkdownContent();
    }, []);

    return (
        <div className=''>
            <MarkdownPreview className='px-32 py-8' source={markdownContent} />
        </div>
    );
};

export default Dashboard;
