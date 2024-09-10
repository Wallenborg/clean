import { UserProvider } from "@/context/UserContext";
import Header from "@/components/header/Header";
import DayCircle from "@/components/day-circle/DayCircle";

export default function CleanPage() {
  return (
    <UserProvider>
      <div className="no-scroll">
        <Header includeNav={true} />

        <DayCircle />
      </div>
    </UserProvider>
  );
}
