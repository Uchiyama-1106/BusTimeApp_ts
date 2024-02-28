import SelectBox from "./SelectBox";
import SwapSelectBoxes from "./SwapSelectBoxes";
import BusFromAndTo from "./BusFromAndTo";
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
  const startChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };

  const goal = useAtomValue(goalAtom);
  const setGoal = useSetAtom(changedGoalValueAtom);
  const goalChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGoal(e.target.value);

  return (
    <div>
      <SelectBox value={start} onChange={startChange} />
      <SwapSelectBoxes />
      <SelectBox value={goal} onChange={goalChange} />
      <BusFromAndTo />
    </div>
  );
};

export default BusRoute;
