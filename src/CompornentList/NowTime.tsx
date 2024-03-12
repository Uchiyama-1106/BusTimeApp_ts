import { useAtom, useAtomValue } from "jotai";
import { BusServiceID, nowAtom } from "./Atoms.ts";
import { useState } from "react";
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
  const nowServiceID = useAtomValue(BusServiceID)

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
    "(" + nowServiceID + "ダイヤ)";


  const [newMonth, setNewMonth] = useState(now.getMonth() +
    1);
  const [newDate, setNewDate] = useState(now.getDate());
  const [newHour, setNewHour] = useState(now.getHours());
  const [newMinutes, setNewMinutes] = useState(now.getMinutes());
  const [newSeconds, setNewSeconds] = useState(now.getSeconds());

  const setTimeHandleClick = () =>
    setNow(
      new Date(new Date().getFullYear(), newMonth - 1, newDate, newHour, newMinutes, newSeconds)
    );

  return (
    <div>
      <h2>現在日時</h2>
      <p>{nowMDH}</p>
      <button onClick={nowHandleClick}>現在の日時に合わせる</button>
      <div></div>
      <input
        type="number"
        value={newMonth}
        onChange={(e) => setNewMonth(parseInt(e.target.value))}
      />
      <span>月</span>
      <input
        type="number"
        value={newDate}
        onChange={(e) => setNewDate(parseInt(e.target.value))}
      />
      <span>日</span>
      <input
        type="number"
        value={newHour}
        onChange={(e) => setNewHour(parseInt(e.target.value))}
      />
      <span>時</span>
      <input
        type="number"
        value={newMinutes}
        onChange={(e) => setNewMinutes(parseInt(e.target.value))}
      />
      <span>分</span>
      <input
        type="number"
        value={newSeconds}
        onChange={(e) => setNewSeconds(parseInt(e.target.value))}
      />
      <span>秒</span>
      <div></div>
      <button onClick={setTimeHandleClick}>指定の日時に合わせる</button>

    </div>
  );
};

export default NowTime;
