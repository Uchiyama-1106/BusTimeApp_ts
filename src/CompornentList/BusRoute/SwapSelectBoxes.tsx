import { useAtomValue, useSetAtom } from "jotai";
import {
  startAtom,
  goalAtom,
  changedStartValueAtom,
  changedGoalValueAtom,
} from "../Atoms";

const SwapSelectBoxes = () => {
  const start = useAtomValue(startAtom);
  const setStart = useSetAtom(changedStartValueAtom);

  const goal = useAtomValue(goalAtom);
  const setGoal = useSetAtom(changedGoalValueAtom);
  const swapValues = () => {
    let temp = start;
    setStart(goal);
    setGoal(temp);
  };

  return <button onClick={swapValues}>↑↓</button>;
};

export default SwapSelectBoxes;
