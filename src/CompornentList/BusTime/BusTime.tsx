import { useAtomValue } from "jotai";
import { busTime } from "../Atoms";
import BusTimeBox from "./BusTimeBox";

type trips = {
  route_id: string;
  service_id: string;
  trip_id: string;
  trip_headsign: string;
  block_id: string;
  trip_short_name: string;
  direction_id: string;
  shape_id: string;
};
type stop_times = {
  route_id: string;
  trip_id: string;
  arrival_time: string;
  departure_time: string;
  stop_id: string;
  stop_sequence: string;
  stop_headsign: string;
  pickup_type: string;
  drop_off_type: string;
  timepoint: string;
};

const BusTime = () => {
  const busTimes: Array<[trips, stop_times, stop_times]> =
    useAtomValue(busTime);
  // console.log(busTimes)

  const CreateBusTime = () => {
    return busTimes.map((value, index) => (
      <BusTimeBox key={index} TripAndTimes={value} />
    ));
  };

  return <div>{CreateBusTime()}</div>;
};
export default BusTime;
