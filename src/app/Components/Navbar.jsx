import Image from 'next/image';


const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="navbar-start">
                    <Image className='bg-gray-100 border border-sky-400 rounded-full' src={'/al-kalam-trf.png'} width={50} height={50} alt="Al kalam Logo" />
                    <a className="btn btn-ghost text-xl">আল কলম</a>
                </div>

                <div className="navbar-end gap-3">
                    <Image className='bg-gray-100 border border-sky-400 rounded-full' src={'/al-kalam-trf.png'} width={30} height={30} alt="Al kalam Logo" />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Profile</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;