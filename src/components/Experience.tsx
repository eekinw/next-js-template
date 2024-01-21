import WorkCard from "./WorkCard";
import NumberedList from "./NumberedList";
const Experience = () => {

  return (
    <>
      <div className="mb-10">
        <NumberedList number="02" title="My Professional Experience" />
      </div>
      {/* scrollbar */}
      <div>
        <WorkCard role="Software Engineer" company="SUPA" startDate="Aug 2023" endDate="Present"
        responsibilities={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          ]}
        />
      </div>
    </>
  );
};

export default Experience;
