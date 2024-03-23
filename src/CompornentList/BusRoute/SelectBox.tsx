import { sortedBusSpotList } from "../Atoms";

interface SelectBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectBox: React.FC<SelectBoxProps> = ({ value, onChange }) => {
  const List: string[] = sortedBusSpotList;
  return (
    <div>
      <select value={value} onChange={onChange} className="w-64 border font-semibold">
        {List.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
