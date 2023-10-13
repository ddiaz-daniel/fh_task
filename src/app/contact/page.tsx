import PageHeader from '@/components/ui/page-header';
import React from 'react';
import { SiD3Dotjs, SiExpress, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiVega } from 'react-icons/si';


const ContactTaskPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <PageHeader />
            <main className="flex flex-col flex-1 px-20 py-8 bg-darkBlue-900 space-x-3">
                <div className="text-white text-2xl mb-4">Contact Information</div>
                <div className="text-white text-lg">
                    <p>
                        <strong>Name:</strong> Daniel Diaz
                    </p>
                    <p>
                        <strong>GitHub:</strong>{" "}
                        <a
                            href="https://github.com/ddiaz-daniel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:underline"
                        >
                            https://github.com/ddiaz-daniel
                        </a>
                    </p>
                    <p className='flex flex-row space-x-2'>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:ddiaz.daniel@outlook.com" className="text-blue-300 hover:underline flex flex-row space-x-2">
                            <p>ddiaz.daniel@outlook.com</p>
                        </a>
                    </p>
                    <p>
                        <strong>Tech Stack:</strong>
                        <ul className="list-none mt-2 flex flex-row space-x-4">
                            <li className="flex flex-col items-center">
                                <SiNextdotjs size={50} />
                                <div>Next.js</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiReact size={50} />
                                <div>React</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiTailwindcss size={50} />
                                <div>Tailwind</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiNodedotjs size={50} />
                                <div>Node.js</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiExpress size={50} />
                                <div>Express</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiD3Dotjs size={50} />
                                <div>D3.js</div>
                            </li>
                            <li className="flex flex-col items-center">
                                <SiVega size={50} />
                                <div>Vega-Lite</div>
                            </li>
                        </ul>
                    </p>


                </div>
            </main>

        </div>
    );
};

export default ContactTaskPage;
