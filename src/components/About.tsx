import Image from "next/image";
import myImage from '../public/me.jpeg';
import NumberedList from "./NumberedList";
import TechnologyList from "./TechnologyList";
const About = () => {
  const technologies = ["Typescript", "React", "Node", "GraphQL", "PostgreSQL", "TailwindCSS"]
  return (
    <>
      <div className="mb-10">
        <NumberedList number="01" title="About Me" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum dignissimos at
        vero molestias debitis. Omnis sapiente quisquam inventore eius iste, iure incidunt ut
        expedita consectetur, dolorum cum id tenetur repellendus harum, quaerat officia cupiditate
        fuga mollitia. Recusandae hic culpa quod assumenda ullam! Eos beatae ipsa ullam molestiae
        delectus ad veritatis vero odio quo deserunt, natus adipisci provident veniam. Eos aliquam
        nesciunt unde atque dignissimos assumenda? Amet, cupiditate natus! Expedita repudiandae odit
        nostrum? Vel dolor et nam sed placeat ipsum culpa? Vel expedita ad voluptatum. Quidem
        possimus, quibusdam deleniti incidunt sed alias maiores voluptatibus voluptatum magni
        voluptatem deserunt eaque dolore.
      </div>
      <div className="mt-10">
        <TechnologyList technologies={technologies} />
      </div>
      <div className="flex justify-center mt-10">
        <div className=" p-8 relative group inline-block">
          {/* Group hover! */}
          <Image
            src={myImage}
            width={300}
            height={300}
            className="absolute top-3 left-1 z-10 group-hover:translate-x-[-4px] group-hover:translate-y-[-5px]"
            alt="Ee Kin Image"
            priority
          />
          <div
            className="w-72 h-72 border border-mint group-hover:translate-x-2 group-hover:translate-y-2"
            style={{ backgroundColor: 'transparent', boxSizing: 'border-box' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
