import useGetColorForHour from "@/hooks/useGetColorForHour";
import "./MainCircle.css";

export default function MainCircle() {
  const color = useGetColorForHour(
    new Date().getHours(),
    new Date().getMinutes()
  );

  const circleStyle = {
    backgroundColor: color,
  };

  return (
    <div className="maincircle-circle" style={circleStyle}>
      <div className="maincircle-eyes">
        <span className="maincircle-eye"></span>
        <span className="maincircle-eye"></span>
      </div>
    </div>
  );
}
