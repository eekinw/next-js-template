import Image from 'next/image';
import headerLogo from '../public/favicon.png';
import hamburger from '../public/hamburger.svg';

const Header = () => {
  return (
    <div className="flex justify-between p-4 h-[80px] ">
      <div className="p-2 cursor-pointer">
        <Image src={headerLogo} width={30} alt="Picture of the author" />
      </div>
      <div className=" cursor-pointer">
        <Image src={hamburger} width={50} height={30} alt="Hamburger menu" />
      </div>
    </div>
  );
};

export default Header;
