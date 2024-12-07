export function formateTime(time: string) {
  const parts = time.split("_");
  const hours = parts[0];
  const minutes = parts[1];
  const zone = parts[2];
  return `${hours}:${minutes} ${zone}`;
}
export function compressTime(time: string) {
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1].split(" ")[0];
  const zone = time.split(":")[1].split(" ")[1];
  return `${hours}_${minutes}_${zone}`;
}
