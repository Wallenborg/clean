import { UserProvider } from "@/context/UserContext";
import Header from "@/components/header/Header";
import DayCircle from "@/components/day-circle/DayCircle";
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";

export default function CleanPage() {
  return (
    <ProtectedRoute>
      <UserProvider>
        <div className="no-scroll margin">
          <Header includeNav={true} />
          <DayCircle />
        </div>
      </UserProvider>
    </ProtectedRoute>
  );
}
