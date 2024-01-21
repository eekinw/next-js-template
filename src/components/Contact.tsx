import NumberedList from "./NumberedList";

const Contact = () => {
    return (
      <>
        <NumberedList number="04" title="What's Next?" />
        <div className="  flex flex-col justify-center items-center gap-y-4 m-10">
          <h1 className=" text-2xl font-bold text-primaryred">Let&apos;s Connect</h1>
          <p className=" text-justify">
            Although I’m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <div className="mt-5 p-10">
            <button className="px-4 py-2 rounded-md border border-solid border-mint hover:scale-110">Say Hello</button>
          </div>
        </div>
      </>
    );
}

export default Contact