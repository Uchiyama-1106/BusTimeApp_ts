import { useAtomValue } from "jotai";
import { stopInfo } from "../Atoms";

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

type stops = {
  stop_id: string;
  stop_code: string;
  stop_name: string;
  stop_desc: string;
  stop_lat: string;
  stop_lon: string;
  zone_id: string;
  stop_url: string;
  location_type: string;
  platform_code: string;
  parent_station: string;
};

interface BusTimeBoxProps {
  TripAndTimes: [trips, stop_times, stop_times];
}
const BusTimeBox: React.FC<BusTimeBoxProps> = ({ TripAndTimes }) => {
  const Trips: trips = TripAndTimes[0];
  const Start: stop_times = TripAndTimes[1];
  const Goal: stop_times = TripAndTimes[2];
  const StopInfo: stops[] = useAtomValue(stopInfo);
  const IDChangeName = (id: string) => {
    const stop = StopInfo.find(value => id === value.stop_id);
    return stop ? stop.stop_name : "";
  }


  return (
    <div>
      <hr />
      <p>{Trips.trip_headsign}</p>
      <p>{Start.departure_time + " " + IDChangeName(Start.stop_id)}</p>
      <p>{Goal.arrival_time + " " + IDChangeName(Goal.stop_id)}</p>
    </div>
  );
};

export default BusTimeBox;
