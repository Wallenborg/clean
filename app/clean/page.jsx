import Header from "@/components/header/Header";
import DayCircle from "@/components/day-circle/DayCircle";
import { StartDateProvider } from "@/context/StartDateContext";

export default async function CleanPage() {
  return (
    <StartDateProvider>
      <div className="no-scroll">
        <Header includeNav={true} />
        <DayCircle />
      </div>
    </StartDateProvider>
  );
}
