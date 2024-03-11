
import { useAtomValue } from "jotai";
import BusRoute from "./CompornentList/BusRoute/BusRoute.tsx";
import BusTime from "./CompornentList/BusTime/BusTime.tsx";
import NowTime from "./CompornentList/NowTime.tsx";
import { NearbusGoalTransrateToID, NearbusStartTransrateToID } from "./CompornentList/Atoms.ts";
function App() {
  return (
    <div>
      <NowTime />
      <BusRoute />
      <BusTime />
      {/* <div>{JSON.stringify(useAtomValue(NearbusGoalTransrateToID)[0])}</div>
      <div>{JSON.stringify(useAtomValue(NearbusGoalTransrateToID)[1])}</div> */}
    </div>
  );
}

export default App;
