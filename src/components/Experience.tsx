import NumberedList from "./NumberedList";
import WorkCard from "./WorkCard";
const Experience = () => {

  return (
    <>
      <div className="mb-10" id="experience">
        <NumberedList number="02" title="My Professional Experience" />
      </div>
      <div className="flex flex-col gap-y-4">
        <WorkCard
          role="Software Engineer"
          company="SUPA"
          startDate="Aug 2023"
          endDate="Present"
          responsibilities={[
            'Enhanced functionality of the DATABOLT platform by developing a project filter feature and implementing free text classification.',
            'Played a key role in various aspects of the import annotations feature, highlighting versatility and ability to contribute effectively across multiple project stages.',
            'Led front-end API creation and migration using RTK Queries.',
            'Worked on sharing feature and chatbot widget for SUPA chatbot page.',
            'Created a unique sharing feature for the chatbot promotional page, showcasing creativity and proficiency in enhancing user engagement and digital marketing tools.',
          ]}
        />
        <WorkCard
          role="Senior Business Operations Analyst"
          company="SUPA"
          startDate="Nov 2021"
          endDate="Aug 2023"
          responsibilities={[
            "Spearheaded SUPA's training initiatives for data annotators through a series of educational modules and mentorship approach, to upskill and develop self-aware data labelers.",
            'Project management and consulting towards clients within the Robotics, Agricultural, E-Commerce and Retail industries.',
            "Acting as a focal point in a cross-functional team by aligning different departments' expectations and leveraging their resources in order to effectively manage the pipeline of projects.",
          ]}
        />
      </div>
    </>
  );
};

export default Experience;
