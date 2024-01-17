import Button from "./Button";

const Home = () => {
  return (
    <div className="flex flex-col px-8 py-4 gap-y-3">
      <span>Hi, my name is</span>
      <h1 className="text-5xl font-bold">Ee Kin</h1>
      <h1 className="text-5xl font-bold">I build things for the web.</h1>
      <div className="">
        <p>
          I’m a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible, human-centered
          products at <span>SUPA</span>.
        </p>
      </div>
      <Button className="max-w-md">Check out my Github!</Button>
    </div>
  );
};

export default Home;
