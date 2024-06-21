import Header from "@/components/header/Header";

import Link from "next/link";
import Button from "@/components/button/Button";
import DayCircle from "@/components/day-circle/DayCircle";

export default async function CleanPage() {
  return (
    <div>
      <Header includeNav={true} />
      <DayCircle />
    </div>
  );
}
