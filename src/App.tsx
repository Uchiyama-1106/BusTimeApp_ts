import BusRoute from "./CompornentList/BusRoute/BusRoute.tsx";
import BusTime from "./CompornentList/BusTime/BusTime.tsx";
import NowTime from "./CompornentList/NowTime.tsx";
function App() {
  return (
    <div>
      <NowTime />
      <BusRoute />
      <BusTime />
    </div>
  );
}

export default App;
