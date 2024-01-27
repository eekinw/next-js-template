import Image from "next/image";
import GithubLogo from "../public/github-mark.png";

interface SideProjectCardProps {
  name: string;
  description: string;
  lang: string[];
  href: string;
}

const SideProjectCard = ({ name, description, lang, href }: SideProjectCardProps) => {
    return (
      <div className="relative group flex flex-col mt-6 text-gray-700 bg-slate-100 shadow-md bg-clip-border rounded-xl hover:-translate-y-1 transition-transform h-full">
        <div className="flex justify-between items-start p-6">
          <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 group-hover:text-gold">
            {name}
          </h5>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Image src={GithubLogo} height={25} alt="GitHub Icon" className="cursor-pointer hover:scale-105" />
          </a>
        </div>
        <div className="px-6 pb-6 pt-0">
          <p className="block text-base antialiased font-light leading-relaxed text-inherit mb-4">
            {description}
          </p>
          <div className="flex gap-x-2">
            <ul className="flex flex-wrap gap-2">
              {lang.map((language) => (
                <li key={language} className="bg-white rounded-full px-3 py-1 text-sm border-2 border-solid border-gold">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default SideProjectCard;
