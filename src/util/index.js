export const msToMins = (ms)=>{
  let min = Math.floor((ms/1000/60) << 0);
  let sec = Math.floor((ms/1000) % 60);
  return `${min}:${sec}`;
}