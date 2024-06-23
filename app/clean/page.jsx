import Header from "@/components/header/Header";

import DayCircle from "@/components/day-circle/DayCircle";

export default async function CleanPage() {
  return (
    <div className="no-scroll">
      <Header includeNav={true} />
      <DayCircle />
    </div>
  );
}
