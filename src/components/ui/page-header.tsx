import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => {
    const fullHref = typeof window !== 'undefined' ? `${window.location.origin}` : "";

    return (
        <header className="bg-black">
            <div className="container mx-auto flex items-center justify-between h-16">
                <Link href="/" className="text-white text-2xl font-bold flex flex-row items-center">
                    <Image src="/cat-logo.png" alt="logo" width={40} height={40} />
                    Junior Frontend Tasks
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href={`${fullHref}/first-task`} className="text-white hover:font-bold">
                                First Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/second-task" className="text-white hover:font-bold">
                                Second Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:font-bold">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default PageHeader;
