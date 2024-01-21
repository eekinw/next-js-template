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
      <div className="">
        <div>
          {role} <span className="text-primaryred">@ {company}</span>{' '}
        </div>
        <div>
          {startDate} - {endDate}
        </div>
      </div>

      <div>
        <ul className="">
          {responsibilities.map((r, index) => (
            <li key={index}>
              <span className="text-primaryred">▹ </span>{r}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NumberedList;
