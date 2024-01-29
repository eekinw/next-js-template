import Image from "next/image";
import myImage from '../public/me.jpeg';
import NumberedList from "./NumberedList";
import TechnologyList from "./TechnologyList";
const About = () => {
  const technologies = ["Typescript", "NextJS", "Ruby on Rails", "Amazon Web Services", "PostgreSQL", "Tailwind CSS"]
  return (
    <>
      <div className="mb-10" id="about">
        <NumberedList number="01" title="About Me" />
      </div>
      <div className="text-gray-400">
        <p>
          {' '}
          Hey there! Thanks for visiting my website. My name is Ee Kin and I come from an economics
          background. My interest in <span className="text-gold">tech</span> and{' '}
          <span className="text-gold">web development</span> started when I was working in my
          current company as a business operations analyst. Somewhere along the line, I decided to
          take the plunge and learn the ropes to become a software engineer - and I haven't looked
          back since. My daily motivation stems from the fact that I get to learn something new
          everyday.
        </p>
        <br />{' '}
        <p className=" leading-relaxed">
          In terms of my day-to-day, I'm currently a{' '}
          <span className="text-gold">full-stack engineer</span> where I get to work on everything -{' '}
          <span className="text-gold">front-end, back-end</span>, and occasionally{' '}
          <span className="text-gold">Dev-Ops</span>! Everyday is different and that's what I love
          about being in tech - I get to immerse myself in a variety of different things and learn
          from them.
        </p>
        <p>
          <br /> Here are the technologies that I've been working with recently:
        </p>
      </div>
      <div className="mt-10">
        <TechnologyList technologies={technologies} />
      </div>
      <div className="flex justify-center mt-10">
        <div className="p-8 relative group inline-block">
          {/* Group hover! */}
          <Image
            src={myImage}
            width={300}
            height={300}
            className="absolute rounded-lg top-3 left-1 z-10 group-hover:translate-x-[-4px] group-hover:translate-y-[-5px] "
            alt="Ee Kin Image"
            priority
          />
          <div
            className="w-72 h-72 rounded-lg border border-gold group-hover:translate-x-2 group-hover:translate-y-2"
            style={{ backgroundColor: 'transparent', boxSizing: 'border-box' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
