import "./MainCircle.css";
import useGetColorForHour from "@/hooks/useGetColorForHour";

export default function MainCircle() {
  // Use the hook to get the color
  const color = useGetColorForHour(
    new Date().getHours(),
    new Date().getMinutes()
  );

  // Inline style to set the background color dynamically
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
