import { useEffect, useState } from "react";


export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}/${separator}${
    month < 10 ? `0${month}` : `${month}`
  }/${separator}${date}`;
}

export function GetCurrentTime() {
  const [dt, setDt] = useState(new Date().toLocaleTimeString("en-US"));

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleTimeString("en-US"));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return dt;
}
