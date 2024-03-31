import './App.css'
import BusRoute from "./CompornentList/BusRoute/BusRoute.tsx";
import BusTime from "./CompornentList/BusTime/BusTime.tsx";
import NowTime from "./CompornentList/NowTime.tsx";
import Atention from './CompornentList/Atention.tsx';

function App() {
  return (
    <div className=''>
      <header className="fixed top-0 left-0 right-0 h-40  bg-sky-200">
        <div className='pt-2 px-1'>
          <NowTime />
          <BusRoute />
        </div>
      </header>

      <div className='... mt-40 mx-1.5'>
        <BusTime />
      </div>
      <div className='... mt-2 mx-1.5'>
        <Atention />
      </div>
    </div>
  );
}

export default App;