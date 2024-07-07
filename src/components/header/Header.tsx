import { ArrowRight, Menu } from "lucide-react";

const Header = () => {
  return (
    <div
      id="header"
      className="navbar p-10 lg:px-32 absolute h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/50 backdrop-blur-lg transition-all"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:hidden">
            <Menu size={32} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
        <a href="/" className="hidden md:flex items-center gap-4">
          <span className="text-xl font-bold gap-4">Roman Pretty</span>
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4 hidden sm:flex">
        <a
          href="mailto:romanjjpretty@gmail.com"
          className="btn btn-neutral hover:bg-zinc-700 rounded-full"
        >
          Contact Me
          <ArrowRight strokeWidth={1.6} />
        </a>
      </div>
    </div>
  );
};

export default Header;

// import { ArrowRight, ArrowUpRight, Menu } from 'lucide-react';

// const Header = () => {

//     return (
//         <div id="header" className="navbar px-10 p-6 lg:px-48 absolute inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="lg:hidden">
//                         <Menu size={32} />
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         <li><a href='#about'>About</a></li>
//                         <li><a href='#projects'>Projects</a></li>
//                         <li><a href='#resume'>Resume</a></li>
//                     </ul>
//                 </div>
//                 <a href='/' className='hidden sm:flex items-center gap-4'>
//                     {/* <span className="text-xl font-bold gap-4">Roman Pretty</span> */}
//                     <a href='mailto:romanjjpretty@gmail.com' className="w-[12vw] border-b-2 pb-2 border-black">
//                     <div className='w-full flex flex-row justify-between font-semibold mb-2 text-xl'>
//                     Roman Pretty
//                     </div>
//                     <p className='text-xs text-zinc-600'>Portfolio Website</p>
//                 </a>
//                 </a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><a href='#about'>About</a></li>
//                     <li><a href='#projects'>Projects</a></li>
//                     <li><a href='#resume'>Cv</a></li>
//                 </ul>
//             </div>
//             <div className="navbar-end gap-4">
//                 <a href='mailto:romanjjpretty@gmail.com' className="w-[12vw] border-t-2 border-black">
//                     <div className='w-full flex flex-row justify-between font-semibold mb-2'>
//                     Contact
//                     <ArrowUpRight strokeWidth={1.6} />
//                     </div>
//                     <p className='text-xs text-zinc-600'>romanjjpretty@gmail.com</p>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Header;
