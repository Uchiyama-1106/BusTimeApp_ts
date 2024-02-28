// NowTime 現在時刻　祝日かどうか
import { atom } from "jotai";

export const nowAtom = atom<Date>(new Date());

type holidayCheck = (now: Date) => boolean;
const holidayCheck: holidayCheck = (now: Date) => {
  const speHoliday2024: number[][] = [
    [1, 2, 3, 8],
    [11, 12, 23],
    [20],
    [29],
    [3, 4, 5, 6],
    [],
    [15],
    [11, 12],
    [16, 22, 23],
    [14],
    [3, 4, 23],
    [30, 31],
  ];
  const month: number = now.getMonth();
  const date: number = now.getDate();
  if (speHoliday2024[month].includes(date)) {
    return true;
  } else {
    return false;
  }
};

export const holidayCheckAtom = atom<boolean>((get) => {
  const now = get(nowAtom);
  return holidayCheck(now);
});


// BusRoute バス停のリスト　出発するバス停　到着するバス停
export const ListAtom = atom<string[]>([
  "前橋駅",
  "表町",
  "本町",
  "千代田町二丁目",
  "千代田町三丁目",
  "群大附属小前",
  "住吉町交番前",
  "国領町１丁目",
  "敷島学校入口",
  "群大病院入口",
  "昭和町三丁目",
  "群大病院",
  "昭和町三丁目",
  "下小出町一丁目",
  "下小出",
  "上小出",
  "北前橋",
  "南橘中学校前",
  "南橘団地入口",
  "南橘団地",
  "南橘保育所北",
  "荒牧新道",
  "荒牧",
  "前橋自動車教習所",
  "群馬大学荒牧",
  "敷島公園バスターミナル",
  "川原町北",
  "総合スポーツセンター",
  "関根",
  "法華沢",
  "田口",
  "発電所前",
  "木曽神社入口（小児寄り）",
  "循環器病院入口",
  "小児医療センター",
  "木曽神社入口(１７号沿い)",
  "下箱田",
  "坂東橋",
  "東半田",
  "半田",
  "半田北",
  "沼辺",
  "カーリット前",
  "松原",
  "中村",
  "早尾神社前",
  "大崎",
  "渋川駅",
]);

export const changedStartValueAtom = atom<string>("")

export const startAtom = atom<string>((get) => {
  const List = get(ListAtom);
  const Start = get(changedStartValueAtom);
  if (Start === ""){
  return List[0];
  }else{
    return Start;
  }
});

export const changedGoalValueAtom = atom<string>("")

export const goalAtom = atom<string>((get) => {
  const List = get(ListAtom);
  const Goal = get(changedGoalValueAtom);
  if (Goal === ""){
  return List[24];
  }else{
    return Goal;
  }
});