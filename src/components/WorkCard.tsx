interface WorkListProps {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

const NumberedList = ({ role, company, startDate, endDate, responsibilities }: WorkListProps) => {
  return (
    <>
      <div className="flex flex-col p-4 gap-y-2 mb-4">
        <div className="text-2xl font-bold">
          {role} <span className="text-gold">@ {company}</span>
        </div>
        <div className="text-sm text-gray-200">
          {startDate} - {endDate}
        </div>
      </div>

      <ul className="list-disc list-inside pl-4">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-400 mb-2">
            {responsibility}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NumberedList;
