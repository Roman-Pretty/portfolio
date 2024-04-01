import { ArrowRight, Menu, Sun, Moon, GraduationCap } from 'lucide-react';

const Header = () => {

    return (
        <div className="navbar bg-base-100 p-6 lg:px-32">
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
                    <div className="btn btn-square btn-primary no-animation hover:bg-primary hover:border-none">
                    <GraduationCap strokeWidth={2} size={32}/>
                    </div>
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
                <label className="swap swap-rotate">
                    <input type="checkbox" className="theme-controller" value="dark" />
                    <Sun className="swap-off" />
                    <Moon className="swap-on" />
                </label>
                <a href='mailto:romanjjpretty@gmail.com' className="btn btn-primary">
                    Contact
                    <ArrowRight />
                </a>
            </div>
        </div>
    );
};

export default Header;