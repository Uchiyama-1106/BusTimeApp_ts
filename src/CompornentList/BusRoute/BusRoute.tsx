import SelectBox from "./SelectBox";
import SwapSelectBoxes from "./SwapSelectBoxes";
import { useAtomValue, useSetAtom } from "jotai";
import {
  startAtom,
  goalAtom,
  changedStartValueAtom,
  changedGoalValueAtom,
} from "../Atoms";

const BusRoute = () => {
  const start = useAtomValue(startAtom);
  const setStart = useSetAtom(changedStartValueAtom);
  const startChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStart(e.target.value);
  };

  const goal = useAtomValue(goalAtom);
  const setGoal = useSetAtom(changedGoalValueAtom);
  const goalChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setGoal(e.target.value);

  return (
    <div>
      <div className="flex">
        <div className="ml-2 h-12">
          <SwapSelectBoxes />
        </div>
        <div className="ml-1.5 h-12">
          <div className="flex">
            <div className="font-semibold mr-2">出発</div>
            <SelectBox value={start} onChange={startChange} />
          </div>
          <div className="flex">
            <div className="font-semibold mr-2">到着</div>
            <SelectBox value={goal} onChange={goalChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
