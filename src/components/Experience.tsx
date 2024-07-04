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
          startDate="July 2023"
          endDate="Present"
          responsibilities={[
            'Developed and maintained comprehensive end-to-end features, integrating both backend and frontend technologies, at the same time emphasizing on the importance of documentation for the team’s benefit.',
            'Played a key role in various aspects of the import annotations feature, highlighting versatility and ability to contribute effectively across multiple project stages.',
            'Actively engaged in modernizing legacy codebases by incorporating new technologies, such as API endpoint migrations on the frontend using Redux Toolkit.',
            'Hosted SUPA engineering’s Learn & Share session, presented about NextJS’s app router to facilitate knowledge-sharing among team members.',
            'Led the creation of a promotional page for SUPA’s AI Chatbot service - Mila, increasing engagement by up to 20%.',
          ]}
        />
        <WorkCard
          role="Senior Business Operations Analyst"
          company="SUPA"
          startDate="Nov 2021"
          endDate="July 2023"
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
