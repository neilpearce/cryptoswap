import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/cryptoswapLogo.svg';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    return (
        <nav className="w-full flex xl:justify-center items-center p-4">

            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className='w-42 cursor-pointer' />
            </div>

            <ul className='text-white xl:flex hidden list-none flex-row justify-between items-center flex-initial'>
               {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) =>(
                        <NavbarItem key={item + index} title={item} />
               ))}
               <button className='green-btn py-2 px-8 mx-4 rounded-full cursor-pointer'>
                   Log in
               </button>
            </ul>
        </nav>
    );
}

export default Navbar;