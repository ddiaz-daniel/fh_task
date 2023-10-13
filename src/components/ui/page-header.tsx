import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => {
    const fullHref = typeof window !== 'undefined' ? `${window.location.origin}` : "";

    return (
        <header className="bg-darkBlue-900">
            <div className="container mx-auto flex items-center justify-between h-24 ">
                <Link href="/" className="text-white text-2xl font-bold flex flex-row items-center">
                    <Image src="/cat-logo.png" alt="logo" width={40} height={40} />
                    <h2 className="ml-2 ">Logistikum Tasks</h2>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-white font-bold hover:text-amber-400 text-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={`${fullHref}/first-task`} className="text-white hover:text-amber-400 text-lg">
                                First Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/second-task" className="text-white hover:text-amber-400 text-lg">
                                Second Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/third-task" className="text-white hover:text-amber-400 text-lg">
                                Third Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/forth-task" className="text-white hover:text-amber-400 text-lg">
                                Forth Task
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-amber-400 text-lg">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='w-full flex justify-center'>
                <hr className="border-2 white w-4/12" />
            </div>
        </header>
    );
};

export default PageHeader;
