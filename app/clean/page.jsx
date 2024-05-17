import Header from "@/components/header/Header";
import MainCircle from "@/components/main-circle/MainCircle";
import Link from "next/link";
import Button from "@/components/button/Button";

export default async function CleanPage() {
  return (
    <div>
      <Header includeNav={true} />
      <MainCircle />
      <Link href="/">
        <Button text="BACK" className="button-left-bottom " />
      </Link>
    </div>
  );
}
