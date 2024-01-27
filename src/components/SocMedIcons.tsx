import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocMedIcons = () => {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <a
          href="https://twitter.com/eekinw"
          className="hover:text-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/eekinwong/"
          className="hover:text-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/eekinw"
          className="hover:text-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocMedIcons;
