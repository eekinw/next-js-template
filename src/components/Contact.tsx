import Button from "./Button";
import NumberedList from "./NumberedList";

const Contact = () => {
    return (
      <>
        <div className="mb-10" id="contact">
          <NumberedList number="04" title="What's Next?" />
        </div>

        <div className="flex flex-col gap-y-4 m-10">
          <h1 className="text-2xl font-bold text-gold">Let&apos;s Connect</h1>
          <p className="text-justify">
            I&apos;m always excited to explore new opportunities and collaborate on innovative
            projects. If you&apos;re interested in working together or just want to say hi, feel
            free to reach out. Let&apos;s create something amazing!
          </p>
        </div>
        <div className="flex justify-center mt-5 p-10">
          <a href="mailto:wongeekinn@gmail.com">
            <Button className="max-w-1/3 hover:scale-105 transition-all ease-in-out">
              Contact Me
            </Button>
          </a>
        </div>
      </>
    );
}

export default Contact