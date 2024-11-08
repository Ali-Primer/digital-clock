"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [hour, setHour] = useState<number | string>(0);
  const [min, setMin] = useState<number | string>(0);
  const [sec, setSec] = useState<number | string>(0);

  function time() {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setHour(h < 10 ? "0" + h : h);
    setMin(m < 10 ? "0" + m : m);
    setSec(s < 10 ? "0" + s : s);

    setTimeout(time, 1000);
  }

  useEffect(() => {
    time();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-4/5 flex justify-between p-8 rounded-lg">
          <div className="text-[206px] font-bold p-6 h-full rounded-2xl bg-white w-1/4 flex justify-center items-center relative">
            {hour}
            <div className="bg-white w-full h-3 absolute "></div>
          </div>
          <div className="text-[206px] font-bold p-6 h-full rounded-2xl bg-white w-1/4 flex justify-center items-center relative">
            {min}
            <div className="bg-white w-full h-3 absolute"></div>
          </div>
          <div className="text-[206px] font-bold p-6 h-full rounded-2xl bg-white w-1/4 flex justify-center items-center relative">
            {sec}
            <div className="bg-white w-full h-3 absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
}
