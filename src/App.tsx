import './App.css'
import BusRoute from "./CompornentList/BusRoute/BusRoute.tsx";
import BusTime from "./CompornentList/BusTime/BusTime.tsx";
import NowTime from "./CompornentList/NowTime.tsx";

function App() {
  return (
    <div className=''>
      <header className="pt-3 pb-3 pl-2.5 bg-sky-200">
        <NowTime />
        <BusRoute />
      </header>
      <div className='mx-1'>
        <BusTime />
      </div>
    </div>
  );
}

export default App;