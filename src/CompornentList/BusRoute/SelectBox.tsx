import { useAtomValue } from "jotai";
import { ListAtom } from "../Atoms";

interface SelectBoxProps {
  value: string;
  onChange: any;
}
const SelectBox: React.FC<SelectBoxProps> = ({ value, onChange }) => {
  const List: string[] = useAtomValue(ListAtom);
  return (
    <div>
      <select value={value} onChange={onChange}>
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
