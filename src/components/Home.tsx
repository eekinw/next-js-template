import Button from "./Button";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <span>Hi, my name is</span>
      <h1 className="text-5xl font-bold">Ee Kin</h1>
      <h1 className="text-5xl font-bold">I build things for the web.</h1>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto veniam ex dolor fuga beatae nostrum rem ipsam totam deleniti quaerat nemo eligendi quidem, maiores ab explicabo dolorem, adipisci debitis id. Perspiciatis hic doloribus debitis eligendi iste ad laudantium alias recusandae eos aperiam, nulla, dolor, vitae cumque quisquam doloremque! Autem, voluptas corporis expedita aliquid corrupti tempora commodi vitae nihil porro, animi praesentium officiis sed facilis ea obcaecati magni reprehenderit qui optio quas. Rerum illum molestias placeat aliquam, dicta cum impedit voluptatum.<span>SUPA</span>.
        </p>
      </div>
      <Button className="max-w-md">Check out my Github!</Button>
    </div>
  );
};

export default Home;
