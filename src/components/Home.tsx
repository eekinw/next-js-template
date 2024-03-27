import Button from "./Button";

const Home = () => {

  return (
    <div className="flex flex-col">
      <p className="mb-5 italic">Hi, my name is</p>
      <h1 className="text-5xl font-bold mb-2">Ee Kin.</h1>
      <h2 className="text-3xl font-bold text-gray-200">I build things for the web.</h2>
      <div className="mt-10">
        <p className="mb-10 text-white">
          I&apos;m a self-taught software engineer based in Kuala Lumpur, Malaysia that focuses on
          web development. Currently building cool stuff at{' '}
          <a className="font-bold text-gold hover:underline" href="https://supa.so" target="_blank">
            SUPA
          </a>
          .
        </p>
      </div>
      <div className="flex justify-start gap-x-4">
        <a href="https://github.com/eekinw" target="_blank" rel="noopener noreferrer">
          <Button className="max-w-1/3 hover:scale-105 transition-all ease-in-out">
            My Github
          </Button>
        </a>
        <a
          href="https://drive.google.com/file/d/1gjjE3hr7-CfHokGb4yEZ7WbaQg6p_JFN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="max-w-1/3 hover:scale-105 transition-all ease-in-out">
            My Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
