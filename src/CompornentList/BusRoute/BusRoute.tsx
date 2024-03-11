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
      <SelectBox value={start} onChange={startChange} />
      <SwapSelectBoxes />
      <SelectBox value={goal} onChange={goalChange} />
    </div>
  );
};

export default BusRoute;
