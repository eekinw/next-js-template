import Link from 'next/link';

interface RightMenuNavbarProps { 
    onClose: () => void;
}

const RightMenuNavbar = ({ onClose }: RightMenuNavbarProps) => {
  return (
      <div
          className="md:hidden fixed top-0 right-0 h-screen flex flex-col  w-1/2 bg-[#333333] shadow-lg p-6 z-50"
      
      >
      <div className="flex justify-end">
        <button className="text-gold text-3xl" onClick={onClose}>
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <Link href="#about" className="p-2 cursor-pointer hover:text-gold transition transform">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className='text-gold'>01.</span>
            <div>About</div>
          </div>
        </Link>
        <Link
          href="#experience"
          className="p-2 cursor-pointer hover:text-gold transition transform"
        >
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className='text-gold'>02.</span>
            <div>Experience</div>
          </div>
        </Link>
        <Link href="#projects" className="p-2 cursor-pointer hover:text-gold transition transform">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className='text-gold'>03.</span>
            <div>Side Projects</div>
          </div>
        </Link>
        <Link href="#contact" className="p-2 cursor-pointer hover:text-gold transition transform">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className='text-gold'>04.</span>
            <div>Contact</div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default RightMenuNavbar;
