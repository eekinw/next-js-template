import NumberedList from "@/components/NumberedList";
import SideProjectCard from "@/components/SideProjectCard";
const Work = () => {
  // sm: 1 col
  // md: 2 col
  // lg: 3 col
  return (
    <div>
      <NumberedList number="03" title="My Side Projects" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
        <div className="m-2">
          <SideProjectCard
            name="Rewards Frontend"
            description="hahahahaha"
            lang={['JS', 'Tailwind']}
          />
        </div>
        <div className="m-2">
          <SideProjectCard
            name="Rewards Backend"
            description="hahahahaha"
            lang={['JS', 'Tailwind']}
          />
        </div>
        <div className="m-2">
          <SideProjectCard name="Flappy Bird" description="hahahahaha" lang={['JS', 'Tailwind']} />
        </div>
      </div>
    </div>
  );

};

export default Work;
