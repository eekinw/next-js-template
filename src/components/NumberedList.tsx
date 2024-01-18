interface NumberedListProps { 
    number: string;
    title: string;
};


const NumberedList = ({ number, title }: NumberedListProps) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div>{number}.</div>
      <div>{title}</div>
      <hr className="w-1/3 h-0.5 bg-gray-500 border-0 rounded my-2"></hr>
    </div>
  );
};

export default NumberedList