import Image from 'next/image';
import headerLogo from '../public/favicon.png';
import hamburger from '../public/hamburger.svg';

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="p-2 cursor-pointer">
        <Image src={headerLogo} width={30} alt="Picture of the author" />
      </div>
      <div className="sm:block md:hidden cursor-pointer">
        <Image src={hamburger} width={50} height={30} alt="Hamburger menu" />
      </div>
      <div className="hidden md:flex space-x-4">
        <ul className="flex text-primaryred">
          <li className="p-2 cursor-pointer hover:underline">01. About</li>
          <li className="p-2 cursor-pointer hover:underline">02. Experience</li>
          <li className="p-2 cursor-pointer hover:underline">03. Side Projects</li>
          <li className="p-2 cursor-pointer hover:underline">04. Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
