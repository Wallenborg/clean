// clean/page.jsx
// In clean/page.jsx
import { StartDateProvider } from "@/context/StartDateContext";
import { UserProvider } from "@/context/UserContext";
import Header from "@/components/header/Header";
import DayCircle from "@/components/day-circle/DayCircle";
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";

export default function CleanPage() {
  return (
    <ProtectedRoute>
      <UserProvider>
        <StartDateProvider>
          <div className="no-scroll">
            <Header includeNav={true} />
            <DayCircle />
          </div>
        </StartDateProvider>
      </UserProvider>
    </ProtectedRoute>
  );
}
