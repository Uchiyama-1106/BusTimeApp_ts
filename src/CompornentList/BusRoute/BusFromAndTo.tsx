import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import { ListAtom, startAtom, goalAtom } from "../Atoms";
const BusFromAndTo = () => {
  const List: string[] = useAtomValue(ListAtom);
  const start = useAtomValue(startAtom);
  const goal = useAtomValue(goalAtom);
  const startIndex: number = List.findIndex(item => item === start);
  const goalIndex: number = List.findIndex(item => item === goal);

  const [route, setRoute] = useState("");

  useEffect(() => {
    let newRoute: string;
    if (goalIndex > startIndex){
      newRoute = "前橋駅発〜渋川駅行";
    }
    else if(goalIndex < startIndex){
      newRoute = "渋川駅発〜前橋駅行";
    } 
    else {
      newRoute = "出発する場所と到着する場所が同じです！";
    }
    setRoute(newRoute);
  }, [start, goal]);

  return (
    <div>
      <p>{route}</p>
    </div>
  )
}

export default BusFromAndTo;