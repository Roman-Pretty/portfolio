import { ArrowRight, Menu, Moon, Sun } from 'lucide-react';
const Header = () => {

    return (
        <div className="navbar p-10 lg:px-32 sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <Menu size={32} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#resume'>Resume</a></li>
                    </ul>
                </div>
                <a href='/' className='hidden sm:flex items-center gap-4'>
                    <a className="text-xl font-bold gap-4">Roman Pretty</a>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#resume'>Resume</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a href='mailto:romanjjpretty@gmail.com' className="btn btn-neutral hover:bg-zinc-700 rounded-md">
                    Contact
                    <ArrowRight strokeWidth={1.6} />
                </a>
            </div>
        </div>
    );
};

export default Header;