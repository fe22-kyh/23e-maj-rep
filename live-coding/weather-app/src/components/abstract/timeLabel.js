export default function TimeLabel({format, content}) {

  const date = new Date(content);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return <label>{hours}:{minutes}</label>
}