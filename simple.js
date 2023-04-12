import logUpdate from "log-update";

let values = ["downloading", "downloading.", "downloading..", "downloading..."];

let i = 0;

setInterval(() => {
  const value = values[i++ % values.length];
  logUpdate(value);
  // console.log(value);
}, 100);
