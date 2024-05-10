import Header from "@/components/header/Header";
import MainCircle from "@/components/main-circle/MainCircle";

export default async function CleanPage() {
  return (
    <div>
      <Header includeNav={true} />
      <MainCircle />
    </div>
  );
}
