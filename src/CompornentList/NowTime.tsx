import { useAtom, useAtomValue } from "jotai";
import { holidayCheckAtom, nowAtom } from "./Atoms";

const NowTime = () => {
  const [now, setNow] = useAtom(nowAtom);
  const nowHandleClick = () => setNow(new Date());

  const dayList: string[] = [
    "(日)",
    "(月)",
    "(火)",
    "(水)",
    "(木)",
    "(金)",
    "(土)",
  ];
  const holi: boolean = useAtomValue(holidayCheckAtom);
  const holidayCheck = holi === true ? "(土日祝日ダイヤ)" : "(平日ダイヤ)";

  const nowMDH: string =
    now.getMonth() +
    1 +
    "月" +
    now.getDate() +
    "日" +
    dayList[now.getDay()] +
    now.getHours() +
    "時" +
    now.getMinutes() +
    "分" +
    holidayCheck;
  return (
    <div>
      <h2>現在日時</h2>
      <button onClick={nowHandleClick}>現在の日時に合わせる</button>
      <p>{nowMDH}</p>
      <></>
    </div>
  );
};

export default NowTime;
